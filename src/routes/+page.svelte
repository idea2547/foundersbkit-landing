<svelte:head>
  <title>Founder SB Kit | V.O.I.C.E™ Framework — Positioning System ที่ตลาดเลือกคุณ</title>
  <meta name="description" content="V.O.I.C.E™ Framework — จาก 'ขายอะไรก็ได้ให้คนไหนก็ได้' สู่ระบบที่ตลาดเลือกคุณ — ระบบเดียวกับที่พา 30K users, Shark Tank deal, และ $100K+ ติดตั้งให้ธุรกิจคุณ 7 วัน" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif&family=Noto+Sans+Thai:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <meta property="og:title" content="Founder SB Kit — V.O.I.C.E™ Framework สำหรับ Solo Founder" />
  <meta property="og:description" content="5 Pillars จาก 'ไม่มีใครรู้จัก' สู่ 'ตลาดเลือกคุณ' — 7 วันติดตั้ง 30 วันรับประกัน" />
  <meta property="og:image" content="https://celesti.app/og-foundersb.jpg" />
</svelte:head>

<script lang="ts">
  import { onMount } from 'svelte';
  import { t } from '$lib/i18n';
  import { buildPromptPayPayload, PRICES, PROMPTPAY_ID, STRIPE_LINKS } from '$lib/promptpay';
  import type { Lang } from '$lib/i18n';
  
  let lang: Lang = 'th';
  let showCheckout = false;
  let checkoutTier = '';
  let checkoutQrUrl = '';
  let openFaq: number | null = 0;
  let scrolled = false;

  onMount(() => {
    const saved = localStorage.getItem('foundersb-lang');
    if (saved === 'th' || saved === 'en') lang = saved;
    
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('checkout') === 'success') {
      alert(lang === 'th' ? 'ชำระเงินสำเร็จ! ขอบคุณครับ' : 'Payment successful! Thank you!');
      window.history.replaceState({}, '', '/');
    }

    const onScroll = () => { scrolled = window.scrollY > 40; };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  });

  function toggleLang() {
    lang = lang === 'en' ? 'th' : 'en';
    localStorage.setItem('foundersb-lang', lang);
  }

  function toggleFaq(i: number) {
    openFaq = openFaq === i ? null : i;
  }

  function openCheckoutModal(tier: string) {
    checkoutTier = tier;
    checkoutQrUrl = '';
    const amountThb = PRICES[tier as keyof typeof PRICES]?.thb || 0;
    const payload = buildPromptPayPayload(PROMPTPAY_ID, amountThb);
    checkoutQrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=${encodeURIComponent(payload)}&bgcolor=ffffff&color=000000&margin=8`;
    showCheckout = true;
  }

  function closeCheckout() {
    showCheckout = false;
    checkoutTier = '';
  }

  async function checkoutStripe() {
    const link = STRIPE_LINKS[checkoutTier];
    if (link) {
      window.open(link, '_blank', 'noopener');
    } else {
      alert(lang === 'th' ? 'กรุณาติดต่อเราเพื่อชำระเงิน tier นี้' : 'Please contact us to purchase this tier.');
    }
  }

  const faqItems = [
    { qKey: 'faq.1.q', aKey: 'faq.1.a' },
    { qKey: 'faq.2.q', aKey: 'faq.2.a' },
    { qKey: 'faq.3.q', aKey: 'faq.3.a' },
    { qKey: 'faq.4.q', aKey: 'faq.4.a' },
    { qKey: 'faq.5.q', aKey: 'faq.5.a' },
    { qKey: 'faq.6.q', aKey: 'faq.6.a' },
    { qKey: 'faq.7.q', aKey: 'faq.7.a' },
    { qKey: 'faq.8.q', aKey: 'faq.8.a' },
    { qKey: 'faq.9.q', aKey: 'faq.9.a' },
    { qKey: 'faq.10.q', aKey: 'faq.10.a' },
    { qKey: 'faq.11.q', aKey: 'faq.11.a' },
  ];

  $: isThai = lang === 'th';
  $: checkoutThb = PRICES[checkoutTier as keyof typeof PRICES]?.thb.toLocaleString() || '0';
</script>

<div class="page" class:thai={isThai}>

  <!-- NAVIGATION -->
  <nav class:scrolled>
    <a class="logo" href="/">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="14" fill="#D4F53C"/>
        <path d="M11 16h10M16 11v10" stroke="#161616" stroke-width="2.5" stroke-linecap="round"/>
      </svg>
      <span>Founder SB<span>Kit</span></span>
    </a>
    <div class="nav-links">
      <a href="#framework">{t(lang, 'nav.framework')}</a>
      <a href="#compare">{t(lang, 'nav.ai-agent')}</a>
      <a href="#pricing">{t(lang, 'nav.pricing')}</a>
      <a href="#faq">{t(lang, 'nav.faq')}</a>
      <a href="#about">{t(lang, 'nav.about')}</a>
    </div>
    <div class="nav-right">
      <button class="lang-toggle" on:click={toggleLang}>{t(lang, 'nav.lang')}</button>
      <a class="nav-cta" href="#pricing">{t(lang, 'nav.cta')}</a>
    </div>
  </nav>

  <!-- HERO — Positioning-first + bilingual -->
  <section class="hero">
    <div class="hero-inner">
      <p class="eyebrow">{t(lang, 'hero.eyebrow')}</p>
      <h1>{@html t(lang, 'hero.h1')}</h1>
      <p class="hero-sub">{t(lang, 'hero.sub')}</p>
      <p class="hero-sub-en">{t(lang, 'hero.sub-en')}</p>
      <div class="hero-cta-row">
        <a class="btn-primary" href="#pricing">{t(lang, 'hero.cta')}</a>
        <a class="btn-secondary" href="#about">{t(lang, 'hero.watch')}</a>
      </div>

      <div class="trust-pill">
        <span class="avatars">
          {#each [1,2,3,4,5] as i}
            <img src="https://i.pravatar.cc/48?img={i + 10}" alt="" width="32" height="32"/>
          {/each}
        </span>
        <span>{@html t(lang, 'hero.trust')}</span>
      </div>

      <div class="proof-strip">
        <div class="proof-item">
          <span class="proof-num">1M+</span>
          <span class="proof-label">Views</span>
        </div>
        <div class="proof-item">
          <span class="proof-num">30K</span>
          <span class="proof-label">Users</span>
        </div>
        <div class="proof-item">
          <span class="proof-num">90%</span>
          <span class="proof-label">{#if isThai}กำไร{:else}Margin{/if}</span>
        </div>
        <div class="proof-item">
          <span class="proof-num">฿0</span>
          <span class="proof-label">{#if isThai}ค่าโฆษณา{:else}Ad Spend{/if}</span>
        </div>
        <div class="proof-item shark">
          <span class="proof-num">Shark Tank</span>
          <span class="proof-label">TH SS6</span>
        </div>
      </div>
    </div>
  </section>

  <!-- DIFFERENTIATION — Positioning focus -->
  <section class="differentiation">
    <div class="section-header">
      <h2>{@html t(lang, 'diff.h2')}</h2>
      <p>{t(lang, 'diff.sub')}</p>
    </div>
    <div class="diff-grid">
      <div class="diff-card">
        <div class="icon">❌</div>
        <h4>{t(lang, 'diff.not1.title')}</h4>
        <p>{t(lang, 'diff.not1.desc')}</p>
      </div>
      <div class="diff-card">
        <div class="icon">❌</div>
        <h4>{t(lang, 'diff.not2.title')}</h4>
        <p>{t(lang, 'diff.not2.desc')}</p>
      </div>
      <div class="diff-card">
        <div class="icon">❌</div>
        <h4>{t(lang, 'diff.not3.title')}</h4>
        <p>{t(lang, 'diff.not3.desc')}</p>
      </div>
      <div class="diff-card yes">
        <div class="icon">✅</div>
        <h4>{t(lang, 'diff.yes.title')}</h4>
        <p>{t(lang, 'diff.yes.desc')}</p>
      </div>
    </div>
  </section>

  <!-- V.O.I.C.E.™ FRAMEWORK — 5 Pillars -->
  <section class="framework" id="framework">
    <div class="section-header">
      <p class="eyebrow-dark">{t(lang, 'voice.eyebrow')}</p>
      <h2>{@html t(lang, 'voice.h2')}</h2>
    </div>
    <div class="voice-grid">
      {#each [
        { letter: 'V', letterKey: 'voice.v.letter', titleKey: 'voice.v.title', descKey: 'voice.v.desc' },
        { letter: 'O', letterKey: 'voice.o.letter', titleKey: 'voice.o.title', descKey: 'voice.o.desc' },
        { letter: 'I', letterKey: 'voice.i.letter', titleKey: 'voice.i.title', descKey: 'voice.i.desc' },
        { letter: 'C', letterKey: 'voice.c.letter', titleKey: 'voice.c.title', descKey: 'voice.c.desc' },
        { letter: 'E', letterKey: 'voice.e.letter', titleKey: 'voice.e.title', descKey: 'voice.e.desc' },
      ] as pillar, i}
        <div class="voice-card" class:voice-card-first={i === 0}>
          <div class="voice-letter">{pillar.letter}</div>
          <h4>{t(lang, pillar.titleKey)}</h4>
          <p>{t(lang, pillar.descKey)}</p>
        </div>
      {/each}
    </div>
    <div class="voice-connector">
      <span class="voice-word">
        <span class="voice-char">V</span><span class="voice-dot">·</span><span class="voice-char">O</span><span class="voice-dot">·</span><span class="voice-char">I</span><span class="voice-dot">·</span><span class="voice-char">C</span><span class="voice-dot">·</span><span class="voice-char">E</span><span class="voice-tm">™</span>
      </span>
      <span class="voice-tagline">{#if isThai}5 ตัวอักษร = 5 เสาหลัก = ระบบเดียวที่คุณต้องการ{:else}5 letters = 5 pillars = the only system you need{/if}</span>
    </div>
  </section>

  <!-- AUTOMATED REVENUE PROOF -->
  <section class="auto-revenue">
    <div class="section-header">
      <p class="eyebrow-dark">{t(lang, 'auto.eyebrow')}</p>
      <h2>{@html t(lang, 'auto.h2')}</h2>
      <p>{t(lang, 'auto.sub')}</p>
    </div>
    <div class="auto-grid">
      <div class="auto-card">
        <div class="auto-value">{t(lang, 'auto.1.value')}</div>
        <div class="auto-label">{t(lang, 'auto.1.label')}</div>
        <p class="auto-desc">{t(lang, 'auto.1.desc')}</p>
      </div>
      <div class="auto-card">
        <div class="auto-value">{t(lang, 'auto.2.value')}</div>
        <div class="auto-label">{t(lang, 'auto.2.label')}</div>
        <p class="auto-desc">{t(lang, 'auto.2.desc')}</p>
      </div>
      <div class="auto-card">
        <div class="auto-value">{t(lang, 'auto.3.value')}</div>
        <div class="auto-label">{t(lang, 'auto.3.label')}</div>
        <p class="auto-desc">{t(lang, 'auto.3.desc')}</p>
      </div>
      <div class="auto-card">
        <div class="auto-value">{t(lang, 'auto.4.value')}</div>
        <div class="auto-label">{t(lang, 'auto.4.label')}</div>
        <p class="auto-desc">{t(lang, 'auto.4.desc')}</p>
      </div>
    </div>
  </section>

  <!-- WHY SEA SECTION -->
  <section class="sea-section">
    <div class="section-header">
      <p class="eyebrow-dark">{t(lang, 'sea.eyebrow')}</p>
      <h2>{@html t(lang, 'sea.h2')}</h2>
      <p>{t(lang, 'sea.sub')}</p>
    </div>
    <div class="sea-grid">
      <div class="sea-card">
        <h4>{t(lang, 'sea.1.title')}</h4>
        <p>{t(lang, 'sea.1.desc')}</p>
      </div>
      <div class="sea-card">
        <h4>{t(lang, 'sea.2.title')}</h4>
        <p>{t(lang, 'sea.2.desc')}</p>
      </div>
      <div class="sea-card">
        <h4>{t(lang, 'sea.3.title')}</h4>
        <p>{t(lang, 'sea.3.desc')}</p>
      </div>
      <div class="sea-card">
        <h4>{t(lang, 'sea.4.title')}</h4>
        <p>{t(lang, 'sea.4.desc')}</p>
      </div>
    </div>
  </section>

  <!-- ORGANIC vs PAID COMPARISON -->
  <section class="comparison" id="compare">
    <div class="section-header">
      <p class="eyebrow-dark">{t(lang, 'compare.eyebrow')}</p>
      <h2>{@html t(lang, 'compare.h2')}</h2>
      <p>{t(lang, 'compare.sub')}</p>
    </div>
    <div class="compare-grid">
      <div class="compare-col agency">
        <h3>{t(lang, 'compare.col1.h')}</h3>
        <ul>
          <li class="bad">{t(lang, 'compare.col1.1')}</li>
          <li class="bad">{t(lang, 'compare.col1.2')}</li>
          <li class="bad">{t(lang, 'compare.col1.3')}</li>
          <li class="bad">{t(lang, 'compare.col1.4')}</li>
          <li class="bad">{t(lang, 'compare.col1.5')}</li>
        </ul>
      </div>
      <div class="compare-col kit">
        <h3>{t(lang, 'compare.col2.h')}</h3>
        <ul>
          <li class="good">{t(lang, 'compare.col2.1')}</li>
          <li class="good">{t(lang, 'compare.col2.2')}</li>
          <li class="good">{t(lang, 'compare.col2.3')}</li>
          <li class="good">{t(lang, 'compare.col2.4')}</li>
          <li class="good accent">{t(lang, 'compare.col2.5')}</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- PROOF / TIMELINE -->
  <section class="proof" id="proof">
    <div class="section-header">
      <p class="eyebrow-dark">{t(lang, 'proof.eyebrow')}</p>
      <h2>{@html t(lang, 'proof.h2')}</h2>
    </div>
    <div class="timeline">
      <div class="tl-node">
        <span class="tl-time">{t(lang, 'proof.t1.time')}</span>
        <h4>{t(lang, 'proof.t1.title')}</h4>
        <p>{t(lang, 'proof.t1.desc')}</p>
      </div>
      <div class="tl-node">
        <span class="tl-time">{t(lang, 'proof.t2.time')}</span>
        <h4>{t(lang, 'proof.t2.title')}</h4>
        <p>{t(lang, 'proof.t2.desc')}</p>
      </div>
      <div class="tl-node pivot">
        <span class="tl-time">{t(lang, 'proof.t3.time')}</span>
        <h4>{t(lang, 'proof.t3.title')}</h4>
        <p>{t(lang, 'proof.t3.desc')}</p>
      </div>
      <div class="tl-node">
        <h4>{t(lang, 'proof.t4.title')}</h4>
      </div>
      <div class="tl-node success">
        <h4>{t(lang, 'proof.t5.title')}</h4>
      </div>
    </div>
  </section>

  <!-- TESTIMONIALS -->
  <section class="testimonials">
    <div class="section-header">
      <p class="eyebrow-dark">{t(lang, 'testimonials.eyebrow')}</p>
      <h2>{t(lang, 'testimonials.h2')}</h2>
    </div>
    <div class="testimonial-grid">
      <div class="t-card">
        <p class="t-quote">{t(lang, 't1.quote')}</p>
        <div class="t-meta">
          <img src="https://i.pravatar.cc/48?img=11" alt="" width="36" height="36"/>
          <span>{t(lang, 't1.name')}</span>
        </div>
      </div>
      <div class="t-card">
        <p class="t-quote">{t(lang, 't2.quote')}</p>
        <div class="t-meta">
          <img src="https://i.pravatar.cc/48?img=15" alt="" width="36" height="36"/>
          <span>{t(lang, 't2.name')}</span>
        </div>
      </div>
      <div class="t-card">
        <p class="t-quote">{t(lang, 't3.quote')}</p>
        <div class="t-meta">
          <img src="https://i.pravatar.cc/48?img=33" alt="" width="36" height="36"/>
          <span>{t(lang, 't3.name')}</span>
        </div>
      </div>
    </div>
    <p class="disclaimer">{t(lang, 'testimonials.disclaimer')}</p>
  </section>

  <!-- AI AGENT -->
  <section class="ai-agent" id="ai-agent">
    <div class="section-header">
      <p class="eyebrow-dark">{t(lang, 'ai.eyebrow')}</p>
      <h2>{t(lang, 'ai.h2')}</h2>
      <p class="sub">{t(lang, 'ai.sub')}</p>
    </div>
    <div class="ai-demo">
      <div class="terminal">
        <div class="terminal-header">
          <span class="dot r"></span><span class="dot y"></span><span class="dot g"></span>
          <span class="terminal-title">hermes agent</span>
        </div>
        <div class="terminal-body">
          <p class="prompt you">{t(lang, 'ai.example1.you')}</p>
          <p class="prompt agent">{t(lang, 'ai.example1.agent')}</p>
          <p class="prompt you">{t(lang, 'ai.example2.you')}</p>
          <p class="prompt agent">{t(lang, 'ai.example2.agent')}</p>
        </div>
      </div>
    </div>
    <div class="ai-features">
      <div class="ai-f"><h4>{t(lang, 'ai.f1.title')}</h4><p>{t(lang, 'ai.f1.desc')}</p></div>
      <div class="ai-f"><h4>{t(lang, 'ai.f2.title')}</h4><p>{t(lang, 'ai.f2.desc')}</p></div>
      <div class="ai-f"><h4>{t(lang, 'ai.f3.title')}</h4><p>{t(lang, 'ai.f3.desc')}</p></div>
      <div class="ai-f"><h4>{t(lang, 'ai.f4.title')}</h4><p>{t(lang, 'ai.f4.desc')}</p></div>
    </div>
    <a class="btn-primary" href="#pricing">{t(lang, 'nav.cta')}</a>
  </section>

  <!-- LIMITED OFFER — Founding Member -->
  <section class="limited-offer" id="limited-offer">
    <div class="limited-offer-inner">
      <div class="limited-offer-badge">{t(lang, 'limited.badge')}</div>
      <h2>{@html t(lang, 'limited.h2')}</h2>
      <p class="limited-offer-sub">{t(lang, 'limited.sub')}</p>
      <div class="limited-offer-card">
        <div class="limited-offer-pricing">
          <div class="limited-price-tag">
            <span class="limited-old-price">{t(lang, 'pricing.founding.original')}</span>
            <span class="limited-new-price">{t(lang, 'pricing.founding.price')}</span>
            <span class="limited-save-badge">{t(lang, 'limited.save')}</span>
          </div>
          <p class="limited-price-note">{t(lang, 'limited.note')}</p>
        </div>
        <div class="limited-offer-details">
          <div class="limited-spots-bar">
            <div class="limited-spots-fill" style="width: 46%;"></div>
          </div>
          <p class="limited-spots-text">{@html t(lang, 'limited.spots')}</p>
          <button class="btn-primary huge limited-cta" on:click={() => openCheckoutModal('founding')}>{t(lang, 'limited.cta')}</button>
          <p class="limited-timer">{@html t(lang, 'limited.timer')}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- PRICING — TWO DOORS -->
  <section class="pricing" id="pricing">
    <div class="section-header">
      <p class="eyebrow-dark">{t(lang, 'pricing.eyebrow')}</p>
      <h2>{@html t(lang, 'pricing.h2')}</h2>
    </div>
    <div class="pricing-grid two-doors">
      <!-- DOOR 1: START HERE -->
      <div class="price-card door-start">
        <h3>{t(lang, 'pricing.light')}</h3>
        <div class="price-tag">
          <span class="thb">{t(lang, 'pricing.light.price')}</span>
          <span class="price-sub">{t(lang, 'pricing.light.sub')}</span>
        </div>
        <p class="price-desc">{t(lang, 'pricing.light.desc')}</p>
        <ul>
          <li>{t(lang, 'pricing.light.f1')}</li>
          <li>{t(lang, 'pricing.light.f2')}</li>
          <li>{t(lang, 'pricing.light.f3')}</li>
          <li>{t(lang, 'pricing.light.f4')}</li>
          <li class="disabled">{t(lang, 'pricing.light.f5')}</li>
          <li class="disabled">{t(lang, 'pricing.light.f6')}</li>
          <li class="disabled">{t(lang, 'pricing.light.f7')}</li>
        </ul>
        <button class="btn-secondary wide" on:click={() => openCheckoutModal('light')}>{t(lang, 'pricing.light.cta')}</button>
      </div>
      <!-- DOOR 2: GO DEEP (featured) -->
      <div class="price-card popular">
        <div class="popular-badge">{t(lang, 'pricing.founding.popular')}</div>
        <h3>{t(lang, 'pricing.founding')}</h3>
        <div class="price-tag">
          <span class="price-original">{t(lang, 'pricing.founding.original')}</span>
          <span class="thb">{t(lang, 'pricing.founding.price')}</span>
          <span class="price-sub">{t(lang, 'pricing.founding.sub')}</span>
        </div>
        <p class="price-desc">{t(lang, 'pricing.founding.desc')}</p>
        <ul>
          <li>{t(lang, 'pricing.founding.f1')}</li>
          <li class="highlight">{t(lang, 'pricing.founding.f2')}</li>
          <li class="highlight">{t(lang, 'pricing.founding.f3')}</li>
          <li>{t(lang, 'pricing.founding.f4')}</li>
          <li>{t(lang, 'pricing.founding.f5')}</li>
          <li>{t(lang, 'pricing.founding.f6')}</li>
          <li>{t(lang, 'pricing.founding.f7')}</li>
          <li>{t(lang, 'pricing.founding.f8')}</li>
          <li class="guarantee-li">{t(lang, 'pricing.founding.f9')}</li>
        </ul>
        <button class="btn-primary wide" on:click={() => openCheckoutModal('founding')}>{t(lang, 'pricing.founding.cta')}</button>
      </div>
    </div>
    <p class="guarantee-badge">
      <span>🔒</span>
      {@html t(lang, 'pricing.guarantee')}
    </p>
  </section>

  <!-- FAQ — 11 objection killers -->
  <section class="faq" id="faq">
    <div class="section-header">
      <p class="eyebrow-dark">{t(lang, 'faq.eyebrow')}</p>
      <h2>{@html t(lang, 'faq.h2')}</h2>
    </div>
    <div class="faq-list">
      {#each faqItems as faq, i}
        <div class="faq-item" class:open={openFaq === i}>
          <button on:click={() => toggleFaq(i)}>
            <span>{t(lang, faq.qKey)}</span>
            <span class="icon">{openFaq === i ? '−' : '+'}</span>
          </button>
          {#if openFaq === i}
            <div class="faq-answer">{t(lang, faq.aKey)}</div>
          {/if}
        </div>
      {/each}
    </div>
  </section>

  <!-- ABOUT -->
  <section class="about" id="about">
    <div class="about-inner">
      <div class="about-text">
        <p class="eyebrow-dark">{t(lang, 'about.eyebrow')}</p>
        <h2>{@html t(lang, 'about.h2')}</h2>
        <p>{@html t(lang, 'about.p1')}</p>
        <p>{@html t(lang, 'about.p2')}</p>
        <p>{@html t(lang, 'about.p3')}</p>
        <p>{@html t(lang, 'about.p4')}</p>
        <button class="btn-primary" on:click={() => openCheckoutModal('founding')}>{t(lang, 'about.cta')}</button>
      </div>

    </div>
  </section>

  <!-- FINAL CTA -->
  <section class="final-cta">
    <div class="final-cta-inner">
      <h2>{@html t(lang, 'final.h2')}</h2>
      <p>{t(lang, 'final.p')}</p>
      <button class="btn-primary huge" on:click={() => openCheckoutModal('light')}>{t(lang, 'final.cta')}</button>
      <p class="final-note">{t(lang, 'final.note')}</p>
    </div>
  </section>

  <!-- FOOTER -->
  <footer>
    <div class="footer-inner">
      <div class="footer-brand">
        <a class="logo" href="/">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="14" fill="#D4F53C"/>
            <path d="M11 16h10M16 11v10" stroke="#161616" stroke-width="2.5" stroke-linecap="round"/>
          </svg>
          <span>Founder SB<span>Kit</span></span>
        </a>
        <p>{#if isThai}ระบบ V.O.I.C.E™ สำหรับ Solo Founder — สร้างในไทย ใช้ได้ทั่วโลก{:else}V.O.I.C.E™ system for solo founders — built in Thailand, works globally{/if}</p>
      </div>
      <div class="footer-links">
        <div>
          <h5>{t(lang, 'footer.product')}</h5>
          <a href="#framework">{t(lang, 'nav.framework')}</a>
          <a href="/distribution">Distribution Sprint</a>
          <a href="#pricing">{t(lang, 'nav.pricing')}</a>
          <a href="#faq">{t(lang, 'nav.faq')}</a>
        </div>
        <div>
          <h5>{t(lang, 'footer.company')}</h5>
          <a href="#about">{t(lang, 'nav.about')}</a>
          <a href="mailto:support@foundersbkit.com">{#if isThai}ติดต่อ{:else}Contact{/if}</a>
        </div>
        <div>
          <h5>{t(lang, 'footer.legal')}</h5>
          <a href="/terms">{t(lang, 'footer.terms')}</a>
          <a href="/privacy">{t(lang, 'footer.privacy')}</a>
          <a href="/refund">{t(lang, 'footer.refund')}</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>{t(lang, 'footer.copy')}</p>
        <p class="small">{t(lang, 'footer.disclaimer')}</p>
      </div>
    </div>
  </footer>
</div>

<!-- CHECKOUT MODAL -->
{#if showCheckout}
  <div class="checkout-overlay" on:click={closeCheckout} on:keydown={(e) => e.key === 'Escape' && closeCheckout()}>
    <div class="checkout-modal" on:click|stopPropagation>
      <button class="checkout-close" on:click={closeCheckout}>✕</button>
      <h3>{#if isThai}ชำระเงิน{:else}Checkout{/if}</h3>
      <p class="checkout-tier">
        {#if checkoutTier === 'light'}Starter — {#if isThai}฿1,490{:else}$67{/if}{:else if checkoutTier === 'founding'}Founding Kit — {#if isThai}฿16,900{:else}$497{/if}{:else}Velocity{/if}
      </p>
      <div class="checkout-options">
        <button class="checkout-option" on:click={checkoutStripe}>
          <div class="checkout-option-icon">💳</div>
          <div class="checkout-option-info">
            <strong>{#if isThai}บัตรเครดิต/เดบิต{:else}Card Payment{/if}</strong>
            <p>{#if isThai}จ่ายผ่าน Stripe ปลอดภัย{:else}Secure checkout via Stripe{/if}</p>
          </div>
        </button>
        <button class="checkout-option" on:click={() => { /* QR is shown below */ }}>
          <div class="checkout-option-icon">📱</div>
          <div class="checkout-option-info">
            <strong>PromptPay QR</strong>
            <p>{#if isThai}แสกนด้วยแอปธนาคาร{:else}Scan with banking app{/if}</p>
          </div>
        </button>
      </div>
      {#if checkoutQrUrl}
        <div class="qr-section">
          <img src={checkoutQrUrl} alt="PromptPay QR" class="qr-img" />
          <p class="qr-amount">{#if isThai}จำนวนเงิน:{:else}Amount:{/if} ฿{checkoutThb}</p>
          <p class="qr-note">{#if isThai}แสกน QR code ด้วยแอปธนาคาร ส่งหลักฐานการโอนมาที่ support@foundersbkit.com{:else}Scan QR code with your banking app, then send payment confirmation to support@foundersbkit.com{/if}</p>
        </div>
      {/if}
    </div>
  </div>
{/if}

<style>
  :global(*) { box-sizing: border-box; margin: 0; }
  :global(html) { scroll-behavior: smooth; }
  :global(body) { font-family: 'Poppins', 'Noto Sans Thai', sans-serif; background: #0d0d0d; color: #fff; -webkit-font-smoothing: antialiased; }
  .thai :global(body), .thai { font-family: 'Noto Sans Thai', 'Poppins', sans-serif; }
  .accent { color: #D4F53C; }

  /* NAV */
  nav { position: fixed; top: 0; width: 100%; z-index: 100; display: flex; justify-content: space-between; align-items: center; padding: 16px 32px; background: rgba(13,13,13,0.85); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(255,255,255,0.04); transition: background 0.3s; }
  nav.scrolled { background: rgba(13,13,13,0.95); }
  .logo { display: flex; align-items: center; gap: 10px; text-decoration: none; font-weight: 700; font-size: 16px; color: #fff; }
  .logo span { color: rgba(255,255,255,0.5); }
  .logo svg { flex-shrink: 0; }
  .nav-links { display: flex; gap: 24px; }
  .nav-links a { color: rgba(255,255,255,0.65); text-decoration: none; font-size: 13.5px; font-weight: 500; transition: color 0.2s; }
  .nav-links a:hover { color: #fff; }
  .nav-right { display: flex; align-items: center; gap: 12px; }
  .lang-toggle { background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12); color: rgba(255,255,255,0.6); font-size: 12px; font-weight: 600; padding: 6px 14px; border-radius: 8px; cursor: pointer; transition: all 0.2s; }
  .lang-toggle:hover { background: rgba(212,245,60,0.1); color: #D4F53C; border-color: rgba(212,245,60,0.3); }
  .nav-cta { background: #D4F53C; color: #0d0d0d; font-size: 13px; font-weight: 700; padding: 10px 20px; border-radius: 10px; text-decoration: none; transition: transform 0.2s, box-shadow 0.2s; }
  .nav-cta:hover { transform: translateY(-1px); box-shadow: 0 4px 16px rgba(212,245,60,0.25); }

  /* HERO */
  .hero { padding: 140px 32px 80px; text-align: center; position: relative; overflow: hidden; }
  .hero::before { content: ''; position: absolute; top: -20%; right: -10%; width: 500px; height: 500px; background: radial-gradient(circle, rgba(212,245,60,0.06) 0%, transparent 70%); border-radius: 50%; pointer-events: none; }
  .hero-inner { max-width: 780px; margin: 0 auto; }
  .eyebrow { text-transform: uppercase; font-size: 12px; font-weight: 700; letter-spacing: 2.5px; color: #D4F53C; margin-bottom: 20px; }
  h1 { font-family: 'Instrument Serif', 'Noto Sans Thai', Georgia, serif; font-size: clamp(34px, 6vw, 68px); font-weight: 600; line-height: 1.06; letter-spacing: -2px; margin-bottom: 24px; }
  .thai h1 { font-family: 'Noto Sans Thai', 'Instrument Serif', Georgia, serif; letter-spacing: -0.5px; }
  .hero-sub { font-size: 17px; color: rgba(255,255,255,0.6); line-height: 1.7; margin-bottom: 12px; max-width: 640px; margin-left: auto; margin-right: auto; }
  .hero-sub-en { font-size: 15px; color: rgba(212,245,60,0.6); font-weight: 500; margin-bottom: 36px; letter-spacing: 0.3px; }
  .hero-cta-row { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; margin-bottom: 40px; }
  .btn-primary { display: inline-block; background: #D4F53C; color: #0d0d0d; font-size: 15px; font-weight: 700; padding: 16px 28px; border-radius: 12px; text-decoration: none; border: none; cursor: pointer; transition: transform 0.2s, box-shadow 0.2s; font-family: inherit; }
  .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(212,245,60,0.25); }
  .btn-primary.huge { padding: 20px 48px; font-size: 18px; }
  .btn-primary.wide { width: 100%; text-align: center; }
  .btn-secondary { display: inline-block; background: transparent; color: #fff; font-size: 15px; font-weight: 600; padding: 16px 28px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.15); text-decoration: none; cursor: pointer; transition: background 0.2s; font-family: inherit; }
  .btn-secondary:hover { background: rgba(255,255,255,0.05); }
  .btn-secondary.wide { width: 100%; text-align: center; }
  .trust-pill { display: flex; align-items: center; gap: 12px; justify-content: center; font-size: 13px; color: rgba(255,255,255,0.5); margin-bottom: 40px; }
  .avatars { display: flex; }
  .avatars img { width: 32px; height: 32px; border-radius: 50%; border: 2px solid #0d0d0d; margin-left: -8px; }
  .avatars img:first-child { margin-left: 0; }
  .proof-strip { display: flex; justify-content: center; gap: 32px; flex-wrap: wrap; padding: 24px 0; border-top: 1px solid rgba(255,255,255,0.06); }
  .proof-item { text-align: center; }
  .proof-num { display: block; font-size: 20px; font-weight: 800; color: #D4F53C; }
  .proof-label { display: block; font-size: 11px; color: rgba(255,255,255,0.4); text-transform: uppercase; letter-spacing: 0.5px; }
  .proof-item.shark .proof-num { font-size: 14px; letter-spacing: 0.5px; }

  /* SECTIONS */
  .section-header { text-align: center; max-width: 720px; margin: 0 auto 56px; padding: 0 24px; }
  .section-header h2 { font-family: 'Instrument Serif', 'Noto Sans Thai', Georgia, serif; font-size: clamp(32px, 4.5vw, 52px); font-weight: 600; letter-spacing: -1.5px; line-height: 1.12; margin: 0 0 12px; }
  .section-header p { font-size: 17px; color: rgba(255,255,255,0.55); line-height: 1.6; }
  .section-header p.sub { margin-top: 12px; }
  .eyebrow-dark { display: inline-block; background: rgba(212,245,60,0.08); color: #D4F53C; padding: 6px 16px; border-radius: 999px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px; }

  /* DIFFERENTIATION */
  .differentiation { padding: 100px 24px; }
  .diff-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; max-width: 1200px; margin: 0 auto; }
  .diff-card { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 28px; transition: transform 0.2s; }
  .diff-card:hover { transform: translateY(-2px); }
  .diff-card .icon { font-size: 24px; margin-bottom: 12px; }
  .diff-card h4 { font-size: 18px; font-weight: 700; margin-bottom: 8px; }
  .diff-card p { font-size: 14px; color: rgba(255,255,255,0.55); line-height: 1.65; }
  .diff-card.yes { border-color: rgba(212,245,60,0.2); background: rgba(212,245,60,0.03); }

  /* V.O.I.C.E.™ FRAMEWORK */
  .framework { padding: 100px 24px; }
  .voice-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 16px; max-width: 1200px; margin: 0 auto 48px; }
  .voice-card { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 28px 20px; text-align: center; transition: transform 0.2s, border-color 0.2s; position: relative; overflow: hidden; }
  .voice-card:hover { transform: translateY(-4px); border-color: rgba(212,245,60,0.25); }
  .voice-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, transparent, #D4F53C, transparent); opacity: 0; transition: opacity 0.3s; }
  .voice-card:hover::before { opacity: 1; }
  .voice-letter { font-size: 64px; font-weight: 900; color: #D4F53C; line-height: 1; margin-bottom: 12px; opacity: 0.7; }
  .voice-card h4 { font-size: 13px; font-weight: 700; color: #D4F53C; letter-spacing: 1.5px; margin-bottom: 8px; text-transform: uppercase; }
  .voice-card p { font-size: 13px; color: rgba(255,255,255,0.55); line-height: 1.5; }
  .voice-connector { text-align: center; padding: 20px 0; }
  .voice-word { display: inline-block; }
  .voice-char { font-size: 40px; font-weight: 900; color: #D4F53C; letter-spacing: 2px; }
  .voice-dot { font-size: 28px; color: rgba(212,245,60,0.3); margin: 0 2px; }
  .voice-tm { font-size: 14px; color: #D4F53C; vertical-align: super; margin-left: 2px; }
  .voice-tagline { display: block; font-size: 14px; color: rgba(255,255,255,0.4); margin-top: 8px; }

  /* AUTOMATED REVENUE */
  .auto-revenue { background: #111; padding: 100px 24px; }
  .auto-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; max-width: 1000px; margin: 0 auto; }
  .auto-card { background: rgba(212,245,60,0.03); border: 1px solid rgba(212,245,60,0.1); border-radius: 16px; padding: 32px 20px; text-align: center; transition: transform 0.2s; }
  .auto-card:hover { transform: translateY(-3px); }
  .auto-value { font-size: 48px; font-weight: 900; color: #D4F53C; line-height: 1; margin-bottom: 4px; }
  .auto-label { font-size: 13px; font-weight: 600; color: rgba(255,255,255,0.6); margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.5px; }
  .auto-desc { font-size: 12px; color: rgba(255,255,255,0.4); line-height: 1.5; }

  /* WHY SEA */
  .sea-section { padding: 100px 24px; }
  .sea-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; max-width: 900px; margin: 0 auto; }
  .sea-card { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 24px; transition: transform 0.2s; }
  .sea-card:hover { transform: translateY(-2px); }
  .sea-card h4 { font-size: 16px; font-weight: 700; margin-bottom: 8px; }
  .sea-card p { font-size: 14px; color: rgba(255,255,255,0.55); line-height: 1.6; }

  /* COMPARISON */
  .comparison { background: #111; padding: 100px 24px; }
  .compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; max-width: 900px; margin: 0 auto; }
  .compare-col { border-radius: 16px; padding: 32px; }
  .compare-col.agency { background: rgba(255,80,80,0.04); border: 1px solid rgba(255,80,80,0.12); }
  .compare-col.kit { background: rgba(212,245,60,0.04); border: 1px solid rgba(212,245,60,0.15); }
  .compare-col h3 { font-size: 20px; font-weight: 700; margin-bottom: 20px; }
  .compare-col ul { list-style: none; padding: 0; }
  .compare-col li { font-size: 14px; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.04); line-height: 1.5; }
  .compare-col li:last-child { border-bottom: none; }
  .compare-col li.bad { color: rgba(255,255,255,0.5); }
  .compare-col li.bad::before { content: '❌ '; }
  .compare-col li.good { color: rgba(255,255,255,0.8); }
  .compare-col li.good::before { content: '✅ '; }
  .compare-col li.good.accent { color: #D4F53C; font-weight: 600; }

  /* PROOF */
  .proof { padding: 100px 24px; }
  .timeline { max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 0; }
  .tl-node { padding: 24px 0 24px 28px; border-left: 2px solid rgba(255,255,255,0.08); position: relative; }
  .tl-node::before { content: ''; position: absolute; left: -6px; top: 28px; width: 10px; height: 10px; border-radius: 50%; background: rgba(255,255,255,0.2); }
  .tl-node.pivot::before { background: #D4F53C; box-shadow: 0 0 12px rgba(212,245,60,0.4); }
  .tl-node.pivot { border-left-color: rgba(212,245,60,0.3); }
  .tl-node.success h4 { color: #D4F53C; font-size: 22px; }
  .tl-time { font-size: 11px; font-weight: 700; color: rgba(255,255,255,0.3); text-transform: uppercase; letter-spacing: 1px; }
  .tl-node h4 { font-size: 17px; font-weight: 600; margin: 4px 0 6px; }
  .tl-node p { font-size: 14px; color: rgba(255,255,255,0.55); line-height: 1.6; }

  /* TESTIMONIALS */
  .testimonials { background: #111; padding: 100px 24px; }
  .testimonial-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; max-width: 1100px; margin: 0 auto; }
  .t-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 28px; }
  .t-quote { font-size: 15px; color: rgba(255,255,255,0.8); line-height: 1.65; margin-bottom: 20px; font-style: italic; }
  .t-meta { display: flex; align-items: center; gap: 12px; font-size: 13px; color: rgba(255,255,255,0.45); }
  .t-meta img { border-radius: 50%; }
  .disclaimer { text-align: center; font-size: 12px; color: rgba(255,255,255,0.3); margin-top: 32px; }

  /* AI AGENT */
  .ai-agent { background: #111; padding: 100px 24px; text-align: center; }
  .ai-demo { max-width: 640px; margin: 0 auto 40px; }
  .terminal { background: #1a1a2e; border-radius: 12px; overflow: hidden; text-align: left; }
  .terminal-header { display: flex; align-items: center; gap: 6px; padding: 12px 16px; background: rgba(0,0,0,0.3); }
  .dot { width: 10px; height: 10px; border-radius: 50%; }
  .dot.r { background: #ff5f56; }
  .dot.y { background: #ffbd2e; }
  .dot.g { background: #27c93f; }
  .terminal-title { margin-left: 8px; font-size: 12px; color: rgba(255,255,255,0.4); }
  .terminal-body { padding: 20px; }
  .prompt { font-size: 13px; line-height: 1.7; margin-bottom: 12px; font-family: 'SF Mono', 'Fira Code', monospace; }
  .prompt.you { color: rgba(255,255,255,0.7); }
  .prompt.you::before { content: '> '; color: #D4F53C; }
  .prompt.agent { color: rgba(212,245,60,0.8); padding-left: 20px; }
  .prompt.agent::before { content: '⟶ '; }
  .ai-features { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; max-width: 1000px; margin: 0 auto 32px; }
  .ai-f { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 20px; text-align: left; }
  .ai-f h4 { font-size: 15px; font-weight: 600; margin-bottom: 4px; }
  .ai-f p { font-size: 13px; color: rgba(255,255,255,0.5); }

  /* LIMITED OFFER */
  .limited-offer { background: linear-gradient(180deg, #0d0d0d 0%, #1a1a0d 100%); padding: 100px 24px; text-align: center; }
  .limited-offer-inner { max-width: 640px; margin: 0 auto; }
  .limited-offer-badge { display: inline-block; background: rgba(212,245,60,0.12); color: #D4F53C; font-size: 14px; font-weight: 700; padding: 8px 20px; border-radius: 999px; margin-bottom: 20px; }
  .limited-offer h2 { font-family: 'Instrument Serif', 'Noto Sans Thai', Georgia, serif; font-size: 36px; font-weight: 600; margin-bottom: 8px; }
  .limited-offer-sub { font-size: 16px; color: rgba(255,255,255,0.5); margin-bottom: 32px; }
  .limited-offer-card { background: rgba(212,245,60,0.04); border: 1px solid rgba(212,245,60,0.15); border-radius: 20px; padding: 40px; text-align: center; }
  .limited-price-tag { margin-bottom: 8px; }
  .limited-old-price { font-size: 20px; color: rgba(255,255,255,0.3); text-decoration: line-through; margin-right: 12px; }
  .limited-new-price { font-size: 40px; font-weight: 900; color: #D4F53C; }
  .limited-save-badge { display: inline-block; background: #D4F53C; color: #0d0d0d; font-size: 12px; font-weight: 700; padding: 4px 12px; border-radius: 999px; margin-left: 8px; vertical-align: middle; }
  .limited-price-note { font-size: 14px; color: rgba(255,255,255,0.45); }
  .limited-spots-bar { height: 6px; background: rgba(255,255,255,0.08); border-radius: 3px; margin: 16px 0 8px; overflow: hidden; }
  .limited-spots-fill { height: 100%; background: #D4F53C; border-radius: 3px; }
  .limited-spots-text { font-size: 14px; color: rgba(255,255,255,0.5); margin-bottom: 20px; }
  .limited-timer { font-size: 13px; color: rgba(255,255,255,0.35); margin-top: 12px; }
  .limited-cta { margin-top: 4px; }

  /* PRICING — TWO DOORS */
  .pricing { padding: 100px 24px; }
  .pricing-grid.two-doors { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; max-width: 900px; margin: 0 auto 40px; }
  .price-card { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 20px; padding: 36px; position: relative; }
  .price-card.door-start { border-color: rgba(255,255,255,0.08); }
  .price-card.popular { border-color: rgba(212,245,60,0.25); background: rgba(212,245,60,0.03); }
  .popular-badge { position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: #D4F53C; color: #0d0d0d; font-size: 11px; font-weight: 700; padding: 4px 14px; border-radius: 999px; }
  .price-card h3 { font-size: 24px; font-weight: 700; margin-bottom: 12px; }
  .price-tag { margin-bottom: 12px; }
  .price-tag .thb { font-size: 40px; font-weight: 900; color: #fff; display: block; }
  .price-tag .price-original { font-size: 18px; color: rgba(255,255,255,0.3); text-decoration: line-through; margin-right: 8px; }
  .price-tag .price-sub { font-size: 13px; color: rgba(255,255,255,0.4); display: block; }
  .price-desc { font-size: 14px; color: rgba(255,255,255,0.5); line-height: 1.6; margin-bottom: 20px; }
  .price-card ul { list-style: none; padding: 0; margin: 0 0 24px; }
  .price-card li { font-size: 13px; padding: 7px 0; color: rgba(255,255,255,0.65); border-bottom: 1px solid rgba(255,255,255,0.03); line-height: 1.5; }
  .price-card li.disabled { color: rgba(255,255,255,0.25); }
  .price-card li.highlight { color: #D4F53C; font-weight: 600; }
  .price-card li.guarantee-li { color: #D4F53C; font-weight: 600; border-bottom: none; }
  .guarantee-badge { text-align: center; font-size: 15px; color: rgba(255,255,255,0.6); max-width: 680px; margin: 0 auto; line-height: 1.7; }
  .guarantee-badge strong { color: #D4F53C; }

  /* FAQ */
  .faq { background: #111; padding: 100px 24px; }
  .faq-list { max-width: 780px; margin: 0 auto; }
  .faq-item { border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; margin-bottom: 8px; overflow: hidden; background: rgba(255,255,255,0.02); }
  .faq-item.open { border-color: rgba(212,245,60,0.15); background: rgba(212,245,60,0.03); }
  .faq-item button { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 18px 20px; background: none; border: none; color: #fff; font-size: 15px; font-weight: 600; cursor: pointer; text-align: left; font-family: inherit; }
  .faq-item .icon { font-size: 20px; color: rgba(255,255,255,0.3); flex-shrink: 0; margin-left: 12px; }
  .faq-answer { padding: 0 20px 18px; font-size: 14px; color: rgba(255,255,255,0.6); line-height: 1.7; }

  /* ABOUT */
  .about { padding: 100px 24px; }
  .about-inner { max-width: 720px; margin: 0 auto; }
  .about-text h2 { font-family: 'Instrument Serif', 'Noto Sans Thai', Georgia, serif; font-size: 36px; font-weight: 600; letter-spacing: -1px; margin-bottom: 20px; }
  .about-text p { font-size: 15px; color: rgba(255,255,255,0.6); line-height: 1.7; margin-bottom: 16px; }
  .about-text .btn-primary { margin-top: 12px; }


  /* FINAL CTA */
  .final-cta { background: linear-gradient(180deg, #0d0d0d 0%, #1a1a1a 100%); padding: 100px 24px; text-align: center; }
  .final-cta-inner { max-width: 640px; margin: 0 auto; }
  .final-cta h2 { font-family: 'Instrument Serif', 'Noto Sans Thai', Georgia, serif; font-size: clamp(32px, 4.5vw, 48px); font-weight: 600; letter-spacing: -1.5px; line-height: 1.12; margin-bottom: 12px; }
  .final-cta > .final-cta-inner > p { font-size: 15px; color: rgba(255,255,255,0.5); margin-bottom: 32px; }
  .final-note { font-size: 13px; color: rgba(255,255,255,0.35); margin-top: 16px; }

  /* FOOTER */
  footer { background: #0a0a0a; border-top: 1px solid rgba(255,255,255,0.04); padding: 60px 32px 32px; }
  .footer-inner { max-width: 1100px; margin: 0 auto; }
  .footer-brand { margin-bottom: 40px; }
  .footer-brand .logo { margin-bottom: 12px; }
  .footer-brand p { font-size: 14px; color: rgba(255,255,255,0.35); max-width: 360px; }
  .footer-links { display: flex; gap: 48px; margin-bottom: 40px; flex-wrap: wrap; }
  .footer-links h5 { font-size: 11px; font-weight: 700; color: rgba(255,255,255,0.2); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px; }
  .footer-links a { display: block; font-size: 14px; color: rgba(255,255,255,0.45); text-decoration: none; padding: 4px 0; transition: color 0.2s; }
  .footer-links a:hover { color: #fff; }
  .footer-bottom p { font-size: 13px; color: rgba(255,255,255,0.25); margin-bottom: 4px; }
  .footer-bottom .small { font-size: 11px; color: rgba(255,255,255,0.15); }

  /* CHECKOUT MODAL */
  .checkout-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.7); display: flex; align-items: center; justify-content: center; z-index: 200; backdrop-filter: blur(4px); }
  .checkout-modal { background: #1a1a1a; border: 1px solid rgba(255,255,255,0.1); border-radius: 20px; padding: 36px; max-width: 480px; width: 90%; position: relative; }
  .checkout-close { position: absolute; top: 12px; right: 16px; background: none; border: none; color: rgba(255,255,255,0.4); font-size: 20px; cursor: pointer; }
  .checkout-modal h3 { font-size: 22px; font-weight: 700; margin-bottom: 4px; }
  .checkout-tier { font-size: 18px; color: #D4F53C; font-weight: 600; margin-bottom: 24px; }
  .checkout-options { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 24px; }
  .checkout-option { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 16px; cursor: pointer; text-align: center; transition: all 0.2s; font-family: inherit; color: #fff; }
  .checkout-option:hover { background: rgba(212,245,60,0.06); border-color: rgba(212,245,60,0.2); }
  .checkout-option-icon { font-size: 28px; margin-bottom: 8px; }
  .checkout-option-info strong { display: block; font-size: 14px; margin-bottom: 2px; }
  .checkout-option-info p { font-size: 12px; color: rgba(255,255,255,0.4); margin: 0; }
  .qr-section { text-align: center; padding: 20px 0 0; border-top: 1px solid rgba(255,255,255,0.06); }
  .qr-img { width: 220px; height: 220px; border-radius: 12px; margin-bottom: 12px; }
  .qr-amount { font-size: 20px; font-weight: 800; color: #D4F53C; margin-bottom: 4px; }
  .qr-note { font-size: 12px; color: rgba(255,255,255,0.4); line-height: 1.5; }

  /* RESPONSIVE */
  @media (max-width: 768px) {
    .pricing-grid.two-doors { grid-template-columns: 1fr; max-width: 420px; }
    .voice-grid { grid-template-columns: 1fr; max-width: 400px; }
    .auto-grid { grid-template-columns: 1fr 1fr; }
    .sea-grid { grid-template-columns: 1fr; }
    .compare-grid { grid-template-columns: 1fr; }
    .nav-links { display: none; }
    nav { padding: 12px 16px; }
    .hero { padding: 120px 20px 60px; }
    .proof-strip { gap: 20px; }
    .voice-letter { font-size: 48px; }
    .voice-char { font-size: 28px; }
    .auto-value { font-size: 36px; }
  }
</style>
