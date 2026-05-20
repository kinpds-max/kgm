// =============================================================
// KGM 이종랑홈페이지 실시간 알림 연동 및 상세 에러 로그 기록 스크립트 (수정본)
// =============================================================

const SOLAPI_API_KEY = 'NCSEI0BPHUGSGJQE';
const SOLAPI_API_SECRET = '636FK1NIGBC9GQKTEQGU67XG2IZP9ADK';

// [중요] 발신 전화번호 (솔라피에 서류 등록 완료된 번호)
const SENDER_PHONE = '01075471197'; 

// [중요] 문자를 받을 전화번호 (상담 알림을 전송받을 대표 휴대폰 번호)
const ADMIN_PHONE = '01053358102';  

function doPost(e) {
  try {
    const params = e.parameter;
    const name = params.name;
    const car = params.car;
    const phone = params.phone;
    
    // 1. 구글 스프레드시트에 상담 신청 데이터 기록 (안정성을 위해 시트 이름을 특정하거나 첫 번째 시트 지정)
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName("시트1") || ss.getSheets()[0]; // 활성화된 시트가 변경되어 엉뚱한 곳에 적히는 오류 방지
    sheet.appendRow([new Date(), name, phone, car]);
    const lastRow = sheet.getLastRow();
    
    // 2. 솔라피 v4 API를 사용하여 실시간 문자 전송 및 로그 획득
    let solapiResult = "솔라피 설정 대기";
    if (SOLAPI_API_KEY && SOLAPI_API_KEY !== 'YOUR_SOLAPI_API_KEY') {
      solapiResult = sendNotificationSms(name, car, phone);
    }
    
    // 3. 구글 스프레드시트 E열에 솔라피 발송 결과 기록 (정상 발송 여부 확인용)
    sheet.getRange(lastRow, 5).setValue(solapiResult);
    
    return ContentService.createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function sendNotificationSms(name, car, phone) {
  const url = "https://api.solapi.com/messages/v4/send";
  const authHeader = generateSolapiAuthHeader(SOLAPI_API_KEY, SOLAPI_API_SECRET);
  
  // 문자 발송 템플릿
  const textMessage = `[KGM 이종랑홈페이지]\n새로운 상담 신청이 접수되었습니다!\n\n• 고객성함: ${name}님\n• 휴대폰: ${phone}\n• 관심차종: ${car}\n\n* 구글 스프레드시트를 확인하시고 고객님께 빠르게 연락해 주세요.`;
  
  // [수정] /messages/v4/send API 규격에 맞춰 payload 단일 message 객체로 변경 (기존 messages 배열 오류 수정)
  const payload = {
    message: {
      to: ADMIN_PHONE,
      from: SENDER_PHONE,
      text: textMessage
    }
  };
  
  const options = {
    method: 'post',
    contentType: 'application/json',
    headers: {
      Authorization: authHeader
    },
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  };
  
  try {
    const response = UrlFetchApp.fetch(url, options);
    const responseText = response.getContentText();
    
    try {
      const res = JSON.parse(responseText);
      // 에러 코드가 있을 경우 가독성 좋게 출력
      if (res.errorCode) {
        return "발송 실패: [" + res.errorCode + "] " + res.errorMessage;
      } else if (res.groupId || res.messageId) {
        return "발송 성공 (그룹ID: " + (res.groupId || res.messageId) + ")";
      }
      return responseText;
    } catch (e) {
      return responseText;
    }
  } catch (e) {
    return "요청 에러: " + e.toString();
  }
}

// 솔라피 규격에 최적화된 인증 헤더 생성 함수 (32자리 고유 난수 생성하여 오류 방지)
function generateSolapiAuthHeader(apiKey, apiSecret) {
  const date = new Date().toISOString();
  const salt = Utilities.getUuid().replace(/-/g, ''); 
  const data = date + salt;
  
  const signature = Utilities.computeHmacSha256Signature(data, apiSecret)
    .reduce((str, chr) => {
      chr = (chr < 0 ? chr + 256 : chr).toString(16);
      return str + (chr.length === 1 ? '0' : '') + chr;
    }, '');
    
  return `HMAC-SHA256 apiKey=${apiKey}, date=${date}, salt=${salt}, signature=${signature}`;
}

// 권한 승인 및 발송 테스트를 위한 전용 함수
function testSend() {
  const result = sendNotificationSms("홍길동", "토레스", "010-1234-5678");
  Logger.log("테스트 발송 결과: " + result);
}
