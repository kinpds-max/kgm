# KGM 일산중앙대리점 이종랑 홈페이지 구현 계획

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 단일 `index.html` 파일로 KGM 일산중앙대리점 이종랑 부장의 딜러 홈페이지를 완성한다.

**Architecture:** 모든 HTML, CSS, JS를 단일 `index.html`에 내장. 외부 의존성은 Google Fonts와 Font Awesome CDN만 사용. 모바일 우선 반응형(768px 분기).

**Tech Stack:** HTML5, CSS3 (CSS Variables, Flexbox, Grid), Vanilla JS, Google Fonts (Noto Sans KR), Font Awesome 6

---

## 파일 구조

```
KGM이종랑홈페이지/
├── index.html          ← 단일 파일 (HTML + <style> + <script>)
└── docs/
    └── superpowers/
        ├── specs/2026-04-30-kgm-homepage-design.md
        └── plans/2026-04-30-kgm-homepage.md
```

---

## Task 1: 기본 HTML 뼈대 + CSS 변수 + 폰트 설정

**Files:**
- Create: `index.html`

- [ ] **Step 1: index.html 파일 생성 — 기본 뼈대 작성**

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="KGM 일산중앙대리점 이종랑 부장 | 맞춤 상담 · 실매물 안내 · 신뢰 있는 차량 추천" />
  <title>KGM 일산중앙대리점 | 이종랑</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
  <style>
    /* ===== CSS VARIABLES ===== */
    :root {
      --bg-primary: #111111;
      --bg-card: #1a1a1a;
      --bg-card-hover: #222222;
      --accent: #4a7c3f;
      --accent-hover: #3d6835;
      --accent-light: rgba(74, 124, 63, 0.15);
      --text-primary: #ffffff;
      --text-secondary: #aaaaaa;
      --text-muted: #666666;
      --border: rgba(255,255,255,0.08);
      --radius: 12px;
      --radius-sm: 8px;
      --shadow: 0 4px 24px rgba(0,0,0,0.4);
      --transition: 0.25s ease;
    }

    /* ===== RESET ===== */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body {
      font-family: 'Noto Sans KR', sans-serif;
      background: var(--bg-primary);
      color: var(--text-primary);
      line-height: 1.6;
      overflow-x: hidden;
    }
    a { color: inherit; text-decoration: none; }
    img { max-width: 100%; display: block; }
    button { cursor: pointer; border: none; background: none; font-family: inherit; }

    /* ===== UTILITY ===== */
    .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
    .section-title { font-size: 1.5rem; font-weight: 700; margin-bottom: 20px; }
    .btn-primary {
      display: inline-flex; align-items: center; gap: 8px;
      background: var(--accent); color: #fff;
      padding: 14px 24px; border-radius: var(--radius-sm);
      font-size: 1rem; font-weight: 600;
      transition: background var(--transition);
    }
    .btn-primary:hover { background: var(--accent-hover); }
    .btn-outline {
      display: inline-flex; align-items: center; gap: 8px;
      background: transparent; color: #fff;
      padding: 13px 24px; border-radius: var(--radius-sm);
      font-size: 1rem; font-weight: 600;
      border: 1.5px solid rgba(255,255,255,0.4);
      transition: border-color var(--transition), background var(--transition);
    }
    .btn-outline:hover { border-color: #fff; background: rgba(255,255,255,0.05); }
    .badge {
      display: inline-block; padding: 3px 10px;
      border-radius: 20px; font-size: 0.75rem; font-weight: 600;
    }
    .badge-green { background: var(--accent); color: #fff; }
    .badge-gray { background: rgba(255,255,255,0.12); color: var(--text-secondary); }

    /* ===== PLACEHOLDER IMAGE ===== */
    .img-placeholder {
      background: linear-gradient(135deg, #1e1e1e, #2a2a2a);
      display: flex; align-items: center; justify-content: center;
      color: var(--text-muted); font-size: 0.85rem;
    }
  </style>
</head>
<body>

  <!-- 섹션들이 여기에 들어옵니다 -->

  <script>
    // JS가 여기에 들어옵니다
  </script>
</body>
</html>
```

- [ ] **Step 2: 브라우저에서 index.html 열어 배경색·폰트 적용 확인**

파일 탐색기에서 `index.html` 더블클릭 → 검은 배경 화면이 나오면 OK

---

## Task 2: 헤더 / 네비게이션

**Files:**
- Modify: `index.html` — `<body>` 안에 헤더 HTML 추가, `<style>` 안에 헤더 CSS 추가

- [ ] **Step 1: 헤더 HTML을 `<!-- 섹션들이 여기에 들어옵니다 -->` 위치에 삽입**

```html
<!-- ===== HEADER ===== -->
<header class="header" id="header">
  <div class="container header-inner">
    <a href="#" class="header-logo">
      <span class="logo-kgm">KGM</span>
      <span class="logo-sub">일산중앙대리점</span>
    </a>
    <nav class="header-nav desktop-only">
      <a href="#vehicles">차량안내</a>
      <a href="#promotion">프로모션</a>
      <a href="#reviews">출고후기</a>
      <a href="#consult">상담문의</a>
    </nav>
    <div class="header-actions">
      <a href="tel:010-5335-8102" class="btn-primary desktop-only" style="padding:10px 18px;font-size:0.9rem;">
        <i class="fa-solid fa-phone"></i> 빠른 상담
      </a>
      <a href="tel:010-5335-8102" class="mobile-only icon-btn" aria-label="전화">
        <i class="fa-solid fa-phone"></i>
      </a>
      <button class="hamburger mobile-only" id="hamburgerBtn" aria-label="메뉴">
        <i class="fa-solid fa-bars"></i>
      </button>
    </div>
  </div>
</header>

<!-- ===== MOBILE MENU OVERLAY ===== -->
<div class="mobile-menu" id="mobileMenu">
  <button class="mobile-menu-close" id="mobileMenuClose"><i class="fa-solid fa-xmark"></i></button>
  <nav class="mobile-nav">
    <a href="#" onclick="closeMobileMenu()">홈</a>
    <a href="#vehicles" onclick="closeMobileMenu()">차량안내</a>
    <a href="#promotion" onclick="closeMobileMenu()">프로모션</a>
    <a href="#reviews" onclick="closeMobileMenu()">출고후기</a>
    <a href="#consult" onclick="closeMobileMenu()">상담문의</a>
  </nav>
  <div class="mobile-menu-contact">
    <a href="tel:010-5335-8102" class="btn-primary" style="width:100%;justify-content:center;">
      <i class="fa-solid fa-phone"></i> 010-5335-8102
    </a>
  </div>
</div>
<div class="overlay" id="overlay" onclick="closeMobileMenu()"></div>
```

- [ ] **Step 2: 헤더 CSS를 `<style>` 블록 맨 아래에 추가**

```css
/* ===== HEADER ===== */
.header {
  position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
  background: rgba(17,17,17,0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
  transition: background var(--transition);
}
.header.scrolled { background: rgba(17,17,17,0.97); }
.header-inner {
  display: flex; align-items: center; justify-content: space-between;
  height: 64px;
}
.header-logo { display: flex; align-items: center; gap: 10px; }
.logo-kgm {
  font-size: 1.6rem; font-weight: 900; color: #fff;
  letter-spacing: -0.5px;
}
.logo-sub { font-size: 0.85rem; color: var(--text-secondary); font-weight: 400; }
.header-nav { display: flex; gap: 32px; }
.header-nav a {
  font-size: 0.9rem; color: var(--text-secondary);
  transition: color var(--transition);
}
.header-nav a:hover { color: #fff; }
.header-actions { display: flex; align-items: center; gap: 12px; }
.icon-btn {
  width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;
  border-radius: 50%; background: var(--accent-light); color: var(--accent);
  font-size: 1rem; transition: background var(--transition);
}
.icon-btn:hover { background: var(--accent); color: #fff; }
.hamburger {
  width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;
  border-radius: var(--radius-sm); color: #fff; font-size: 1.2rem;
}

/* ===== MOBILE MENU ===== */
.mobile-menu {
  position: fixed; top: 0; right: -100%; width: 80%; max-width: 320px; height: 100%;
  background: #1a1a1a; z-index: 2000; padding: 80px 30px 30px;
  display: flex; flex-direction: column; gap: 40px;
  transition: right 0.3s ease; box-shadow: -8px 0 32px rgba(0,0,0,0.5);
}
.mobile-menu.open { right: 0; }
.mobile-menu-close {
  position: absolute; top: 20px; right: 20px;
  font-size: 1.5rem; color: #fff; padding: 8px;
}
.mobile-nav { display: flex; flex-direction: column; gap: 0; }
.mobile-nav a {
  padding: 18px 0; font-size: 1.1rem; font-weight: 500;
  border-bottom: 1px solid var(--border); color: var(--text-primary);
  transition: color var(--transition);
}
.mobile-nav a:hover { color: var(--accent); }
.overlay {
  position: fixed; inset: 0; background: rgba(0,0,0,0.7);
  z-index: 1500; opacity: 0; pointer-events: none;
  transition: opacity 0.3s;
}
.overlay.active { opacity: 1; pointer-events: all; }

/* ===== RESPONSIVE HELPERS ===== */
.desktop-only { display: none; }
.mobile-only { display: flex; }
@media (min-width: 768px) {
  .desktop-only { display: flex; }
  .mobile-only { display: none; }
}
```

- [ ] **Step 3: 햄버거 JS를 `<script>` 블록에 추가**

```javascript
// Header scroll effect
window.addEventListener('scroll', () => {
  document.getElementById('header').classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile menu
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
const overlay = document.getElementById('overlay');
const mobileMenuClose = document.getElementById('mobileMenuClose');

hamburgerBtn.addEventListener('click', () => {
  mobileMenu.classList.add('open');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
});

mobileMenuClose.addEventListener('click', closeMobileMenu);

function closeMobileMenu() {
  mobileMenu.classList.remove('open');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}
```

- [ ] **Step 4: 브라우저에서 확인**
  - 헤더 고정, 배경 blur 확인
  - 모바일 크기(375px)로 줄여서 햄버거 메뉴 동작 확인
  - 스크롤 시 헤더 배경 진해지는지 확인

---

## Task 3: 히어로 섹션

**Files:**
- Modify: `index.html`

- [ ] **Step 1: 히어로 HTML을 헤더 바로 아래에 삽입**

```html
<!-- ===== HERO ===== -->
<section class="hero" id="home">
  <div class="hero-bg"></div>
  <div class="container hero-inner">
    <div class="hero-content">
      <p class="hero-eyebrow">— KGM과 함께, 새로운 가치를 경험하세요</p>
      <h1 class="hero-title">
        당신에게 맞는 <strong>KGM,</strong><br>
        정확하게 안내해드립니다
      </h1>
      <p class="hero-sub">실매물 안내 · 맞춤 상담 · 신뢰 있는 차량 추천</p>
      <div class="hero-cta">
        <a href="#vehicles" class="btn-primary"><i class="fa-solid fa-car"></i> 차량 보기</a>
        <a href="#consult" class="btn-outline"><i class="fa-solid fa-comment-dots"></i> 상담 신청</a>
      </div>
    </div>
    <div class="hero-image">
      <div class="img-placeholder hero-img-placeholder">
        <span>차량 이미지<br>(교체 예정)</span>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: 히어로 CSS 추가**

```css
/* ===== HERO ===== */
.hero {
  position: relative; min-height: 100svh;
  display: flex; align-items: center;
  padding-top: 64px; overflow: hidden;
}
.hero-bg {
  position: absolute; inset: 0;
  background: radial-gradient(ellipse at 70% 50%, rgba(74,124,63,0.12) 0%, transparent 60%),
              linear-gradient(180deg, #0d0d0d 0%, #111 100%);
}
.hero-inner {
  position: relative; z-index: 1;
  display: grid; grid-template-columns: 1fr;
  gap: 40px; padding-top: 40px; padding-bottom: 60px;
}
.hero-eyebrow { font-size: 0.85rem; color: var(--accent); font-weight: 500; margin-bottom: 12px; }
.hero-title {
  font-size: clamp(2rem, 6vw, 3.5rem);
  font-weight: 900; line-height: 1.2;
  letter-spacing: -1px; margin-bottom: 16px;
}
.hero-title strong { color: var(--accent); }
.hero-sub { font-size: 1rem; color: var(--text-secondary); margin-bottom: 32px; }
.hero-cta { display: flex; gap: 12px; flex-wrap: wrap; }
.hero-image { display: flex; align-items: center; justify-content: center; }
.hero-img-placeholder { width: 100%; aspect-ratio: 4/3; border-radius: var(--radius); }

@media (min-width: 768px) {
  .hero-inner { grid-template-columns: 1fr 1fr; align-items: center; }
  .hero-img-placeholder { aspect-ratio: 16/10; }
}
```

- [ ] **Step 3: 브라우저 확인** — 히어로 타이포그래피, 그린 강조, 버튼 2개 노출 확인

---

## Task 4: 담당자 소개 카드

**Files:**
- Modify: `index.html`

- [ ] **Step 1: 담당자 카드 HTML을 히어로 섹션 바로 아래 삽입**

```html
<!-- ===== PROFILE CARD ===== -->
<section class="profile-section">
  <div class="container">
    <div class="profile-card">
      <div class="profile-avatar img-placeholder">
        <i class="fa-solid fa-user" style="font-size:2rem;color:#555;"></i>
      </div>
      <div class="profile-info">
        <div class="profile-name-row">
          <span class="profile-name">이종랑</span>
          <span class="profile-divider">|</span>
          <span class="profile-dealer">KGM 일산중앙대리점</span>
        </div>
        <p class="profile-desc">고객님의 조건에 맞는 최적의 차량을 제안해드립니다.</p>
      </div>
      <div class="profile-badge">
        <i class="fa-solid fa-shield-halved"></i>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: 담당자 카드 CSS 추가**

```css
/* ===== PROFILE CARD ===== */
.profile-section { padding: 0 0 40px; }
.profile-card {
  display: flex; align-items: center; gap: 16px;
  background: var(--bg-card); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 20px 24px;
}
.profile-avatar {
  width: 60px; height: 60px; border-radius: 50%; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  overflow: hidden;
}
.profile-name-row { display: flex; align-items: center; gap: 8px; margin-bottom: 4px; }
.profile-name { font-size: 1.05rem; font-weight: 700; }
.profile-divider { color: var(--text-muted); }
.profile-dealer { font-size: 0.85rem; color: var(--text-secondary); }
.profile-desc { font-size: 0.85rem; color: var(--text-secondary); }
.profile-badge {
  margin-left: auto; flex-shrink: 0;
  width: 40px; height: 40px; border-radius: 50%;
  background: var(--accent-light); color: var(--accent);
  display: flex; align-items: center; justify-content: center;
  font-size: 1.1rem;
}
```

- [ ] **Step 3: 브라우저 확인** — 프로필 카드 가로 레이아웃, 아바타 원형, 뱃지 노출 확인

---

## Task 5: 차량 라인업 섹션

**Files:**
- Modify: `index.html`

- [ ] **Step 1: 차량 라인업 HTML 삽입 (프로필 카드 아래)**

```html
<!-- ===== VEHICLES ===== -->
<section class="vehicles-section" id="vehicles">
  <div class="container">
    <div class="section-header">
      <div>
        <p class="section-eyebrow">인기 차종</p>
        <h2 class="section-title">많은 고객이 선택한<br>KGM 인기 모델</h2>
      </div>
    </div>
    <div class="vehicles-grid" id="vehiclesGrid">

      <!-- 토레스 EVX -->
      <div class="vehicle-card" data-type="suv" data-fuel="ev" data-price="mid">
        <div class="vehicle-card-img img-placeholder">
          <span>토레스 EVX</span>
          <div class="vehicle-fuel-badge badge badge-green">EV</div>
        </div>
        <div class="vehicle-card-body">
          <div class="vehicle-title-row">
            <h3 class="vehicle-name">토레스 EVX</h3>
            <span class="badge badge-gray">전기 SUV</span>
          </div>
          <div class="vehicle-specs">
            <div class="spec-item">
              <i class="fa-solid fa-bolt"></i>
              <div><span class="spec-value">433km</span><span class="spec-label">1회 충전 주행거리</span></div>
            </div>
            <div class="spec-item">
              <i class="fa-solid fa-gauge-high"></i>
              <div><span class="spec-value">204ps</span><span class="spec-label">최고출력</span></div>
            </div>
          </div>
          <a href="tel:010-5335-8102" class="vehicle-cta">상담문의 <i class="fa-solid fa-chevron-right"></i></a>
        </div>
      </div>

      <!-- 렉스턴 아레나 -->
      <div class="vehicle-card" data-type="suv" data-fuel="diesel" data-price="high">
        <div class="vehicle-card-img img-placeholder">
          <span>렉스턴 아레나</span>
        </div>
        <div class="vehicle-card-body">
          <div class="vehicle-title-row">
            <h3 class="vehicle-name">렉스턴 아레나</h3>
            <span class="badge badge-gray">대형 SUV</span>
          </div>
          <div class="vehicle-specs">
            <div class="spec-item">
              <i class="fa-solid fa-engine"></i>
              <div><span class="spec-value">2,157cc</span><span class="spec-label">엔진 배기량</span></div>
            </div>
            <div class="spec-item">
              <i class="fa-solid fa-gauge-high"></i>
              <div><span class="spec-value">202ps</span><span class="spec-label">최고출력</span></div>
            </div>
          </div>
          <a href="tel:010-5335-8102" class="vehicle-cta">자세히 보기 <i class="fa-solid fa-chevron-right"></i></a>
        </div>
      </div>

      <!-- 무쏘 EV -->
      <div class="vehicle-card" data-type="pickup" data-fuel="ev" data-price="high">
        <div class="vehicle-card-img img-placeholder">
          <span>무쏘 EV</span>
          <div class="vehicle-fuel-badge badge badge-green">EV</div>
        </div>
        <div class="vehicle-card-body">
          <div class="vehicle-title-row">
            <h3 class="vehicle-name">무쏘 EV</h3>
            <span class="badge badge-gray">전기 픽업</span>
          </div>
          <div class="vehicle-specs">
            <div class="spec-item">
              <i class="fa-solid fa-bolt"></i>
              <div><span class="spec-value">401km</span><span class="spec-label">1회 충전 주행거리</span></div>
            </div>
            <div class="spec-item">
              <i class="fa-solid fa-gauge-high"></i>
              <div><span class="spec-value">207ps</span><span class="spec-label">최고출력</span></div>
            </div>
          </div>
          <a href="tel:010-5335-8102" class="vehicle-cta">상담문의 <i class="fa-solid fa-chevron-right"></i></a>
        </div>
      </div>

      <!-- 티볼리 -->
      <div class="vehicle-card" data-type="suv" data-fuel="gasoline" data-price="low">
        <div class="vehicle-card-img img-placeholder">
          <span>티볼리</span>
        </div>
        <div class="vehicle-card-body">
          <div class="vehicle-title-row">
            <h3 class="vehicle-name">티볼리</h3>
            <span class="badge badge-gray">소형 SUV</span>
          </div>
          <div class="vehicle-specs">
            <div class="spec-item">
              <i class="fa-solid fa-engine"></i>
              <div><span class="spec-value">1,497cc</span><span class="spec-label">엔진 배기량</span></div>
            </div>
            <div class="spec-item">
              <i class="fa-solid fa-gauge-high"></i>
              <div><span class="spec-value">163ps</span><span class="spec-label">최고출력</span></div>
            </div>
          </div>
          <a href="tel:010-5335-8102" class="vehicle-cta">상담문의 <i class="fa-solid fa-chevron-right"></i></a>
        </div>
      </div>

    </div><!-- /vehicles-grid -->
  </div>
</section>
```

- [ ] **Step 2: 차량 섹션 CSS 추가**

```css
/* ===== VEHICLES ===== */
.vehicles-section { padding: 60px 0; }
.section-header { margin-bottom: 32px; }
.section-eyebrow { font-size: 0.8rem; color: var(--accent); font-weight: 600; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 8px; }
.vehicles-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
@media (min-width: 768px) { .vehicles-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .vehicles-grid { grid-template-columns: repeat(4, 1fr); } }

.vehicle-card {
  background: var(--bg-card); border: 1px solid var(--border);
  border-radius: var(--radius); overflow: hidden;
  transition: transform var(--transition), box-shadow var(--transition);
}
.vehicle-card:hover { transform: translateY(-4px); box-shadow: var(--shadow); }
.vehicle-card.hidden { display: none; }

.vehicle-card-img {
  position: relative; aspect-ratio: 16/10;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.85rem; color: var(--text-muted);
}
.vehicle-fuel-badge { position: absolute; top: 12px; left: 12px; }
.vehicle-card-body { padding: 16px; }
.vehicle-title-row { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
.vehicle-name { font-size: 1.05rem; font-weight: 700; }
.vehicle-specs { display: flex; flex-direction: column; gap: 10px; margin-bottom: 16px; }
.spec-item { display: flex; align-items: center; gap: 10px; font-size: 0.85rem; color: var(--text-secondary); }
.spec-item i { color: var(--accent); width: 16px; flex-shrink: 0; }
.spec-value { display: block; font-size: 1rem; font-weight: 700; color: var(--text-primary); line-height: 1.2; }
.spec-label { font-size: 0.75rem; color: var(--text-muted); }
.vehicle-cta {
  display: flex; align-items: center; justify-content: space-between;
  width: 100%; padding: 12px 0 0;
  border-top: 1px solid var(--border);
  font-size: 0.9rem; font-weight: 600; color: var(--accent);
  transition: color var(--transition);
}
.vehicle-cta:hover { color: #fff; }
```

- [ ] **Step 3: 브라우저 확인** — 차량 카드 4개, 호버 효과, EV 배지 확인

---

## Task 6: 내 차 찾기 필터

**Files:**
- Modify: `index.html`

- [ ] **Step 1: 필터 HTML을 차량 섹션(`</section>`) 바로 아래 삽입**

```html
<!-- ===== CAR FINDER FILTER ===== -->
<section class="filter-section" id="promotion">
  <div class="container">
    <div class="filter-bar">
      <div class="filter-icon"><i class="fa-solid fa-magnifying-glass"></i></div>
      <div class="filter-label desktop-only">원하는 차량을<br>빠르게 찾아보세요</div>
      <div class="filter-selects">
        <select class="filter-select" id="filterType">
          <option value="">차종 전체</option>
          <option value="suv">SUV</option>
          <option value="pickup">픽업</option>
        </select>
        <select class="filter-select" id="filterFuel">
          <option value="">연료 전체</option>
          <option value="ev">전기</option>
          <option value="gasoline">가솔린</option>
          <option value="diesel">디젤</option>
        </select>
        <select class="filter-select" id="filterPrice">
          <option value="">가격대 전체</option>
          <option value="low">3천만원 이하</option>
          <option value="mid">3~5천만원</option>
          <option value="high">5천만원 이상</option>
        </select>
      </div>
      <button class="btn-primary filter-btn" id="filterBtn">
        내 차 찾기 <i class="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  </div>
</section>
```

- [ ] **Step 2: 필터 CSS 추가**

```css
/* ===== FILTER ===== */
.filter-section { padding: 0 0 60px; }
.filter-bar {
  display: flex; align-items: center; gap: 12px; flex-wrap: wrap;
  background: var(--bg-card); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 20px 24px;
}
.filter-icon {
  width: 44px; height: 44px; border-radius: 50%;
  background: var(--accent-light); color: var(--accent);
  display: flex; align-items: center; justify-content: center;
  font-size: 1.1rem; flex-shrink: 0;
}
.filter-label { font-size: 0.85rem; color: var(--text-secondary); line-height: 1.4; white-space: nowrap; }
.filter-selects { display: flex; gap: 10px; flex: 1; flex-wrap: wrap; }
.filter-select {
  flex: 1; min-width: 120px; background: #222; color: #fff;
  border: 1px solid var(--border); border-radius: var(--radius-sm);
  padding: 10px 12px; font-size: 0.9rem; font-family: inherit;
  appearance: none; cursor: pointer;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23888' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat; background-position: right 12px center;
  padding-right: 32px;
}
.filter-select:focus { outline: none; border-color: var(--accent); }
.filter-btn { white-space: nowrap; }
```

- [ ] **Step 3: 필터 JS를 `<script>` 블록에 추가**

```javascript
// Car Finder Filter
document.getElementById('filterBtn').addEventListener('click', () => {
  const type = document.getElementById('filterType').value;
  const fuel = document.getElementById('filterFuel').value;
  const price = document.getElementById('filterPrice').value;
  const cards = document.querySelectorAll('#vehiclesGrid .vehicle-card');

  cards.forEach(card => {
    const matchType = !type || card.dataset.type === type;
    const matchFuel = !fuel || card.dataset.fuel === fuel;
    const matchPrice = !price || card.dataset.price === price;
    card.classList.toggle('hidden', !(matchType && matchFuel && matchPrice));
  });

  document.getElementById('vehicles').scrollIntoView({ behavior: 'smooth' });
});
```

- [ ] **Step 4: 브라우저 확인** — 필터 드롭다운 3개, 내 차 찾기 클릭 시 카드 필터링 동작 확인

---

## Task 7: 서비스 특징 섹션

**Files:**
- Modify: `index.html`

- [ ] **Step 1: 서비스 특징 HTML을 필터 섹션 아래에 삽입**

```html
<!-- ===== FEATURES ===== -->
<section class="features-section">
  <div class="container">
    <div class="features-grid">
      <div class="feature-item">
        <div class="feature-icon"><i class="fa-solid fa-car-side"></i></div>
        <h3 class="feature-title">실차 중심 안내</h3>
        <p class="feature-desc">실매물 기반의 정확한 정보 제공</p>
      </div>
      <div class="feature-item">
        <div class="feature-icon"><i class="fa-solid fa-user-tie"></i></div>
        <h3 class="feature-title">풍부한 상담 경험</h3>
        <p class="feature-desc">다양한 출고 사례로 신뢰도 높은 상담</p>
      </div>
      <div class="feature-item">
        <div class="feature-icon"><i class="fa-solid fa-crosshairs"></i></div>
        <h3 class="feature-title">맞춤 상담</h3>
        <p class="feature-desc">고객님의 조건에 맞는 최적의 차량 제안</p>
      </div>
      <div class="feature-item">
        <div class="feature-icon"><i class="fa-solid fa-bolt"></i></div>
        <h3 class="feature-title">빠른 문의 응대</h3>
        <p class="feature-desc">전화·톡으로 신속하게 응대</p>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: 서비스 특징 CSS 추가**

```css
/* ===== FEATURES ===== */
.features-section { padding: 60px 0; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
.features-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px 16px; }
@media (min-width: 768px) { .features-grid { grid-template-columns: repeat(4, 1fr); } }
.feature-item { display: flex; flex-direction: column; align-items: center; text-align: center; gap: 12px; }
.feature-icon {
  width: 60px; height: 60px; border-radius: 50%;
  background: var(--accent-light); color: var(--accent);
  display: flex; align-items: center; justify-content: center;
  font-size: 1.4rem;
}
.feature-title { font-size: 0.95rem; font-weight: 700; }
.feature-desc { font-size: 0.8rem; color: var(--text-secondary); line-height: 1.5; }
```

- [ ] **Step 3: 브라우저 확인** — 아이콘 4개 그리드, 모바일 2열/데스크탑 4열 확인

---

## Task 8: 고객 후기 & 출고 사례

**Files:**
- Modify: `index.html`

- [ ] **Step 1: 후기 섹션 HTML을 서비스 특징 아래에 삽입**

```html
<!-- ===== REVIEWS ===== -->
<section class="reviews-section" id="reviews">
  <div class="container">
    <div class="section-header reviews-header">
      <h2 class="section-title">고객 후기 & 출고 사례</h2>
      <a href="https://blog.naver.com/kcmo07" target="_blank" rel="noopener" class="more-link">
        더보기 <i class="fa-solid fa-chevron-right"></i>
      </a>
    </div>
    <div class="reviews-grid">

      <div class="review-card">
        <div class="review-img img-placeholder"><span>출고 사진 1</span></div>
        <div class="review-body">
          <h4 class="review-title">토레스 EVX 출고 후기</h4>
          <p class="review-content">친절한 상담과 빠른 출고로 만족스럽습니다. 실차 보고 결정하길 잘했어요!</p>
          <div class="review-rating">
            <span class="stars">★★★★★</span>
            <span class="rating-score">5.0</span>
          </div>
        </div>
      </div>

      <div class="review-card">
        <div class="review-img img-placeholder"><span>출고 사진 2</span></div>
        <div class="review-body">
          <h4 class="review-title">렉스턴 아레나 출고 후기</h4>
          <p class="review-content">넓고 튼튼한 SUV를 찾고 있었는데 렉스턴 아레나가 최고네요.</p>
          <div class="review-rating">
            <span class="stars">★★★★★</span>
            <span class="rating-score">5.0</span>
          </div>
        </div>
      </div>

      <div class="review-card">
        <div class="review-img img-placeholder"><span>출고 사진 3</span></div>
        <div class="review-body">
          <h4 class="review-title">무쏘 EV 출고 후기</h4>
          <p class="review-content">전기 픽업이라 실용적이고, 주행거리도 만족합니다!</p>
          <div class="review-rating">
            <span class="stars">★★★★★</span>
            <span class="rating-score">5.0</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
```

- [ ] **Step 2: 후기 CSS 추가**

```css
/* ===== REVIEWS ===== */
.reviews-section { padding: 60px 0; }
.reviews-header { display: flex; align-items: center; justify-content: space-between; }
.more-link { font-size: 0.9rem; color: var(--text-secondary); display: flex; align-items: center; gap: 6px; transition: color var(--transition); }
.more-link:hover { color: var(--accent); }
.reviews-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
@media (min-width: 768px) { .reviews-grid { grid-template-columns: repeat(3, 1fr); } }
.review-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius); overflow: hidden; }
.review-img { aspect-ratio: 16/9; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--text-muted); }
.review-body { padding: 16px; }
.review-title { font-size: 0.95rem; font-weight: 700; margin-bottom: 8px; }
.review-content { font-size: 0.85rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 12px; }
.review-rating { display: flex; align-items: center; gap: 8px; }
.stars { color: #f5c518; font-size: 0.9rem; }
.rating-score { font-size: 0.9rem; font-weight: 700; color: var(--text-primary); }
```

- [ ] **Step 3: 브라우저 확인** — 후기 카드 3개, 별점, 더보기 링크 확인

---

## Task 9: 상담 신청 폼

**Files:**
- Modify: `index.html`

- [ ] **Step 1: 상담 신청 폼 HTML을 후기 섹션 아래에 삽입**

```html
<!-- ===== CONSULT FORM ===== -->
<section class="consult-section" id="consult">
  <div class="container">
    <div class="consult-card">
      <div class="consult-header">
        <h2 class="section-title" style="margin-bottom:8px;">상담 신청</h2>
        <p style="color:var(--text-secondary);font-size:0.9rem;">이름과 연락처를 남겨주시면 빠르게 연락드리겠습니다.</p>
      </div>
      <form class="consult-form" id="consultForm">
        <div class="form-group">
          <label class="form-label" for="consultName">이름</label>
          <input class="form-input" type="text" id="consultName" placeholder="성함을 입력해주세요" required />
        </div>
        <div class="form-group">
          <label class="form-label" for="consultPhone">연락처</label>
          <input class="form-input" type="tel" id="consultPhone" placeholder="010-0000-0000" required />
        </div>
        <button type="submit" class="kakao-btn">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 2C5.582 2 2 4.91 2 8.5c0 2.28 1.408 4.284 3.536 5.484L4.5 17l3.794-2.09A9.3 9.3 0 0010 15c4.418 0 8-2.91 8-6.5S14.418 2 10 2z" fill="#3A1D1D"/>
          </svg>
          카카오톡으로 상담하기
        </button>
      </form>
    </div>
  </div>
</section>
```

- [ ] **Step 2: 상담 폼 CSS 추가**

```css
/* ===== CONSULT FORM ===== */
.consult-section { padding: 60px 0; }
.consult-card {
  background: var(--bg-card); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 40px;
  max-width: 560px; margin: 0 auto;
}
.consult-header { margin-bottom: 28px; }
.consult-form { display: flex; flex-direction: column; gap: 20px; }
.form-group { display: flex; flex-direction: column; gap: 8px; }
.form-label { font-size: 0.9rem; font-weight: 600; color: var(--text-primary); }
.form-input {
  background: #222; color: #fff; border: 1px solid var(--border);
  border-radius: var(--radius-sm); padding: 14px 16px;
  font-size: 1rem; font-family: inherit;
  transition: border-color var(--transition);
}
.form-input:focus { outline: none; border-color: var(--accent); }
.form-input::placeholder { color: var(--text-muted); }
.kakao-btn {
  display: flex; align-items: center; justify-content: center; gap: 10px;
  background: #FEE500; color: #3A1D1D;
  padding: 16px 24px; border-radius: var(--radius-sm);
  font-size: 1rem; font-weight: 700; font-family: inherit;
  transition: background var(--transition); width: 100%;
}
.kakao-btn:hover { background: #fada00; }
```

- [ ] **Step 3: 상담 폼 JS 추가 (`<script>` 블록)**

```javascript
// Consult Form — KakaoTalk redirect
document.getElementById('consultForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('consultName').value.trim();
  const phone = document.getElementById('consultPhone').value.trim();
  if (!name || !phone) return;
  // 카카오톡 오픈채팅 링크로 이동 (추후 실제 URL로 교체)
  window.open('#', '_blank');
});
```

- [ ] **Step 4: 브라우저 확인** — 이름/전화번호 입력 폼, 카카오 노란 버튼 확인

---

## Task 10: CTA 배너 + 푸터

**Files:**
- Modify: `index.html`

- [ ] **Step 1: CTA 배너 HTML을 상담 폼 섹션 아래에 삽입**

```html
<!-- ===== CTA BANNER ===== -->
<section class="cta-banner">
  <div class="container cta-inner">
    <div class="cta-content">
      <h2 class="cta-title">지금 상담하고 가장 잘 맞는<br>차량을 만나보세요</h2>
      <p class="cta-sub">상담부터 출고까지, 이종랑이 책임지고 함께하겠습니다.</p>
      <a href="tel:010-5335-8102" class="cta-phone-btn">
        <i class="fa-solid fa-phone"></i>
        이종랑 상담 &nbsp; 010-5335-8102
      </a>
    </div>
    <div class="cta-image img-placeholder">
      <span>차량 이미지</span>
    </div>
  </div>
</section>

<!-- ===== FOOTER ===== -->
<footer class="footer">
  <div class="container footer-inner">
    <div class="footer-brand">
      <div class="footer-logo">
        <span class="logo-kgm">KGM</span>
        <span class="logo-sub">일산중앙대리점</span>
      </div>
      <p class="footer-name">이종랑</p>
    </div>
    <div class="footer-info">
      <p>경기도 고양시 일산서구 경의로 790</p>
      <p>(푸르지오 아파트 상가 1층) KGM 일산중앙대리점</p>
    </div>
    <div class="footer-contact">
      <p>문의 <strong>010-5335-8102</strong></p>
      <p>상담시간 09:00 ~ 20:00 (연중무휴)</p>
      <div class="footer-sns">
        <a href="tel:010-5335-8102" class="sns-icon" aria-label="전화"><i class="fa-solid fa-phone"></i></a>
        <a href="#" class="sns-icon kakao-icon" aria-label="카카오톡"><i class="fa-brands fa-square-kakao"></i></a>
        <a href="https://blog.naver.com/kcmo07" target="_blank" rel="noopener" class="sns-icon naver-icon" aria-label="네이버 블로그"><i class="fa-solid fa-n"></i></a>
        <a href="https://www.youtube.com/@KGM이종랑" target="_blank" rel="noopener" class="sns-icon youtube-icon" aria-label="유튜브"><i class="fa-brands fa-youtube"></i></a>
      </div>
    </div>
  </div>
  <div class="footer-copy">
    <div class="container">
      <p>© 2026 KGM 일산중앙대리점 이종랑. All rights reserved.</p>
    </div>
  </div>
</footer>

<!-- ===== MOBILE BOTTOM BAR ===== -->
<div class="bottom-bar mobile-only">
  <a href="tel:010-5335-8102" class="bottom-bar-btn">
    <i class="fa-solid fa-phone"></i>
    <span>전화상담</span>
  </a>
  <a href="#" class="bottom-bar-btn bottom-bar-kakao">
    <i class="fa-brands fa-square-kakao"></i>
    <span>카카오톡</span>
  </a>
  <a href="#vehicles" class="bottom-bar-btn">
    <i class="fa-solid fa-car"></i>
    <span>차량보기</span>
  </a>
</div>
```

- [ ] **Step 2: CTA + 푸터 + 하단 바 CSS 추가**

```css
/* ===== CTA BANNER ===== */
.cta-banner {
  background: linear-gradient(135deg, #1a2e17, #1e3a1a);
  border-top: 1px solid rgba(74,124,63,0.3);
  border-bottom: 1px solid rgba(74,124,63,0.3);
  padding: 60px 0;
}
.cta-inner {
  display: flex; align-items: center; justify-content: space-between;
  gap: 40px; flex-wrap: wrap;
}
.cta-content { flex: 1; min-width: 280px; }
.cta-title { font-size: clamp(1.4rem, 3vw, 2rem); font-weight: 800; line-height: 1.3; margin-bottom: 12px; }
.cta-sub { color: rgba(255,255,255,0.7); margin-bottom: 28px; font-size: 0.95rem; }
.cta-phone-btn {
  display: inline-flex; align-items: center; gap: 12px;
  background: #fff; color: #111;
  padding: 16px 28px; border-radius: var(--radius-sm);
  font-size: 1.05rem; font-weight: 700;
  transition: background var(--transition);
}
.cta-phone-btn:hover { background: #eee; }
.cta-image {
  width: 260px; aspect-ratio: 4/3; border-radius: var(--radius);
  font-size: 0.85rem; color: var(--text-muted);
  display: flex; align-items: center; justify-content: center;
}
@media (max-width: 767px) { .cta-image { display: none; } }

/* ===== FOOTER ===== */
.footer { background: #0a0a0a; padding: 48px 0 0; }
.footer-inner {
  display: grid; grid-template-columns: 1fr;
  gap: 32px; padding-bottom: 48px;
  border-bottom: 1px solid var(--border);
}
@media (min-width: 768px) { .footer-inner { grid-template-columns: 1fr 2fr 1fr; } }
.footer-logo { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; }
.footer-name { font-size: 1rem; font-weight: 700; color: var(--text-secondary); }
.footer-info p { font-size: 0.85rem; color: var(--text-muted); line-height: 1.8; }
.footer-contact p { font-size: 0.85rem; color: var(--text-secondary); line-height: 1.8; }
.footer-contact strong { color: var(--text-primary); }
.footer-sns { display: flex; gap: 10px; margin-top: 16px; }
.sns-icon {
  width: 36px; height: 36px; border-radius: 50%;
  background: var(--bg-card); border: 1px solid var(--border);
  display: flex; align-items: center; justify-content: center;
  font-size: 0.9rem; color: var(--text-secondary);
  transition: background var(--transition), color var(--transition);
}
.sns-icon:hover { background: var(--accent); color: #fff; border-color: var(--accent); }
.kakao-icon:hover { background: #FEE500; color: #3A1D1D; border-color: #FEE500; }
.youtube-icon:hover { background: #FF0000; color: #fff; border-color: #FF0000; }
.footer-copy { padding: 20px 0; }
.footer-copy p { font-size: 0.8rem; color: var(--text-muted); text-align: center; }

/* ===== MOBILE BOTTOM BAR ===== */
.bottom-bar {
  position: fixed; bottom: 0; left: 0; right: 0; z-index: 999;
  background: #1a1a1a; border-top: 1px solid var(--border);
  display: grid; grid-template-columns: repeat(3, 1fr);
}
.bottom-bar-btn {
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 4px; padding: 12px 0;
  font-size: 0.7rem; font-weight: 600; color: var(--text-secondary);
  transition: color var(--transition);
}
.bottom-bar-btn i { font-size: 1.2rem; }
.bottom-bar-btn:hover, .bottom-bar-btn:active { color: var(--accent); }
.bottom-bar-kakao { background: #FEE500; color: #3A1D1D; }
.bottom-bar-kakao:hover { color: #3A1D1D; background: #fada00; }

/* 모바일 하단 바 공간 확보 */
@media (max-width: 767px) {
  body { padding-bottom: 68px; }
}
```

- [ ] **Step 3: 브라우저 확인**
  - CTA 배너 — 그린 배경, 전화 버튼 흰색
  - 푸터 — 주소, 영업시간, SNS 아이콘 4개
  - 모바일 — 하단 3버튼 고정 바 (전화상담·카카오톡·차량보기)

---

## Task 11: 최종 점검 & 반응형 테스트

**Files:**
- Modify: `index.html` — 필요시 CSS 미세 조정

- [ ] **Step 1: 모바일 (375px) 전체 스크롤 확인**
  - 헤더 고정 OK
  - 히어로 타이포 OK
  - 차량 카드 1열 OK
  - 필터 드롭다운 가로 배치 OK
  - 후기 카드 1열 OK
  - 상담 폼 OK
  - 하단 고정 바 OK

- [ ] **Step 2: 태블릿 (768px) 확인**
  - 차량 카드 2열 OK
  - 후기 카드 3열 OK
  - 데스크탑 헤더 메뉴 노출 OK

- [ ] **Step 3: 데스크탑 (1200px) 확인**
  - 차량 카드 4열 OK
  - 히어로 2열 레이아웃 OK
  - 하단 고정 바 숨김 OK

- [ ] **Step 4: 링크 동작 확인**
  - `tel:010-5335-8102` 링크 OK
  - `#vehicles`, `#consult` 앵커 스크롤 OK
  - 블로그/유튜브 링크 새 탭으로 열림 OK

- [ ] **Step 5: 완료**

홈페이지 완성. 이후 작업:
- 이미지 파일 실제 사진으로 교체 (`img-placeholder` 클래스 제거 후 `<img src="...">` 교체)
- 카카오톡 오픈채팅 URL 확보 후 `window.open('#', '_blank')` 부분의 `'#'` 교체
