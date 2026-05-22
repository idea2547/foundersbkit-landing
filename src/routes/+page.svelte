<svelte:head>
  <title>Founder SB Kit | The System That Built $100K+ Revenue</title>
  <meta name="description" content="The exact system behind a 30,000-user SaaS, Shark Tank deal, and $100K+ revenue — installed into your business with your voice, your offer, your systems." />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <meta property="og:title" content="Founder SB Kit — Built for Serious Solopreneurs" />
  <meta property="og:description" content="From $0 to $100K+ in 12 months. 100+ assets. 7-stage framework. 30-day installation." />
  <meta property="og:image" content="https://celesti.app/og-foundersb.jpg" />
</svelte:head>

<script lang="ts">
  import { onMount } from 'svelte';
  
  let showLightbox = false;
  let lightboxImage = '';
  let openFaq: number | null = 0;
  let scrolled = false;

  onMount(() => {
    const onScroll = () => { scrolled = window.scrollY > 40; };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  });

  function toggleFaq(i: number) {
    openFaq = openFaq === i ? null : i;
  }
</script>

<div class="page">

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
      <a href="#framework">Framework</a>
      <a href="#pricing">Pricing</a>
      <a href="#faq">FAQ</a>
      <a href="#about">About</a>
    </div>
    <a class="nav-cta" href="#pricing">Get The Kit</a>
  </nav>

  <!-- HERO -->
  <section class="hero">
    <div class="hero-inner">
      <p class="eyebrow">For solopreneurs doing $0/month to $10K+/month</p>
      <h1>
        The System That Built<br>$100K+ Revenue From<br>One TikTok Video
      </h1>
      <p class="hero-sub">
        The exact system behind a 30,000-user SaaS, Shark Tank Thailand deal, and $100K+ revenue — installed into your business with your voice, your offer, your brand.
      </p>
      <div class="hero-cta-row">
        <a class="btn-primary" href="https://buy.stripe.com/dRm8wO8f8a6P4Bka0z4ow0k" target="_blank" rel="noopener">Get Founder SB Kit — $997</a>
        <a class="btn-secondary" href="#about">Watch the Story</a>
      </div>

      <div class="trust-pill">
        <span class="avatars">
          {#each [1,2,3,4,5] as i}
            <img src="https://i.pravatar.cc/48?img={i + 10}" alt="" width="32" height="32"/>
          {/each}
        </span>
        <span>Trusted by <strong>30,000+</strong> founders building systemized businesses</span>
      </div>

      <div class="logo-carousel">
        <div class="logo-track">
          {#each ['tiktok','youtube','facebook','stripe','pocketbase','svelte','vercel','cloudflare'] as name}
            <span class="logo-tag">{name}</span>
          {/each}
          {#each ['tiktok','youtube','facebook','stripe','pocketbase','svelte','vercel','cloudflare'] as name}
            <span class="logo-tag">{name}</span>
          {/each}
        </div>
      </div>
    </div>
  </section>

  <!-- NOT A... DIFFERENTIATION -->
  <section class="differentiation">
    <div class="section-header">
      <h2>Not something you watch.<br>Not something you rent.</h2>
      <p>This is the system I built after burning through every course, tool, and call. It actually runs without me in the room.</p>
    </div>
    <div class="diff-grid">
      <div class="diff-card">
        <div class="diff-img" style="background: linear-gradient(135deg,#667eea,#764ba2);">
          <span style="font-size:48px;">&#128214;</span>
        </div>
        <h4>Not Another Course</h4>
        <p>I bought 12 courses before building this. I kept watching, kept learning, kept stuck. What I needed was <strong>something I could install</strong> — not something else to study.</p>
      </div>
      <div class="diff-card">
        <div class="diff-img" style="background: linear-gradient(135deg,#f093fb,#f5576c);">
          <span style="font-size:48px;">&#128736;</span>
        </div>
        <h4>Not Another SaaS</h4>
        <p>I had Airtable, Notion, and 7 other subscriptions. They were empty. What worked was <strong>one system with everything wired together</strong> — not another login to manage.</p>
      </div>
      <div class="diff-card">
        <div class="diff-img" style="background: linear-gradient(135deg,#4facfe,#00f2fe);">
          <span style="font-size:48px;">&#128239;</span>
        </div>
        <h4>Not Another Call</h4>
        <p>I spent $3,000 on a strategy call. Got amazing advice. Did nothing with it. What I needed was <strong>30 days of real execution</strong> with someone checking my work — not one hour of inspiration.</p>
      </div>
      <div class="diff-card">
        <div class="diff-img" style="background: linear-gradient(135deg,#43e97b,#38f9d7);">
          <span style="font-size:48px;">&#9989;</span>
        </div>
        <h4>Step-by-step guidance</h4>
        <p>I built every piece so you can install them yourself. You own everything. Your team runs it. It keeps working after we are done. <strong>100+ done-for-you assets</strong> included.</p>
      </div>
    </div>
    <div class="diff-cta-row">
      <a class="btn-primary" href="https://buy.stripe.com/dRm8wO8f8a6P4Bka0z4ow0k" target="_blank" rel="noopener">Get the framework — $997</a>
    </div>
  </section>

  <!-- PROOF — TIMELINE -->
  <section class="proof">
    <div class="section-header">
      <p class="eyebrow-dark">Real results from the exact system</p>
      <h2>From $100 to $100K+<br>in 12 months.</h2>
    </div>
    <div class="timeline">
      <div class="timeline-item">
        <div class="tl-dot"></div>
        <div class="tl-content">
          <span class="tl-label">Month 0-6</span>
          <h4>TikTok viral. Zero revenue.</h4>
          <p>Built niche AI voice tool. TikTok went viral (1M views). <strong>30,000 users.</strong> But only <strong>$100 revenue</strong>. I was building for viewers, not buyers.</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="tl-dot"></div>
        <div class="tl-content">
          <span class="tl-label">Month 6</span>
          <h4>Hit rock bottom.</h4>
          <p>Out of money. About to give up. Realized I had an <strong>implementation problem</strong>, not a knowledge problem. Needed systems, not more content.</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="tl-dot highlight"></div>
        <div class="tl-content">
          <span class="tl-label">Month 7</span>
          <h4>The pivot.</h4>
          <p>Joined 5 Facebook groups where <strong>buyers</strong> hang out. Read 100+ posts. Posted ONE message addressing real pain. Result: <strong>$300+ in 4 days</strong>.</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="tl-dot highlight"></div>
        <div class="tl-content">
          <span class="tl-label">Month 9-10</span>
          <h4>Lifetime deal launch.</h4>
          <p>Launched Lifetime Plan ($300+). Immediate cash injection. Systems started compounding. Clear offer, clear system, clear buyer.</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="tl-dot highlight"></div>
        <div class="tl-content">
          <span class="tl-label">Month 12+</span>
          <h4>$100K+. Shark Tank Thailand.</h4>
          <p>First $3,000<span class="arrows"> &#8594; </span>$6,000+. <strong>30,000+ users. 90% profit margin.</strong> Featured on Shark Tank Thailand Season 6. All from solopreneur systems.</p>
        </div>
      </div>
    </div>
    <blockquote class="quote-block">
      <span class="quote-mark">&#8220;</span>
      <p>Go where buyers are. Not where viewers are. Build systems, not content.</p>
      <cite>&#8212; Phakpaphon (Idea RC), Founder</cite>
    </blockquote>
  </section>

  <!-- TESTIMONIALS -->
  <section class="testimonials">
    <div class="section-header">
      <p class="eyebrow-dark">What founders are saying</p>
      <h2>Real founders.<br>Real systems. Real results.</h2>
    </div>
    <div class="testi-grid">
      <div class="testi-card">
        <div class="testi-header">
          <img src="https://i.pravatar.cc/64?img=12" alt="" width="48" height="48"/>
          <div>
            <strong>Somchai R.</strong>
            <span>Content Creator, Bangkok</span>
          </div>
        </div>
        <p>&#8220;The Solopreneur GPS framework changed how I think about building. No more random tactics &#8212; just systematic execution. Went from &#3647;0 to &#3647;180K in 90 days.&#8221;</p>
      </div>
      <div class="testi-card">
        <div class="testi-header">
          <img src="https://i.pravatar.cc/64?img=33" alt="" width="48" height="48"/>
          <div>
            <strong>James T.</strong>
            <span>SaaS Founder, Singapore</span>
          </div>
        </div>
        <p>&#8220;I was skeptical about another 'course'. But this is different &#8212; it's actual systems with templates I could use immediately. Closed my first $5K client in Week 3.&#8221;</p>
      </div>
      <div class="testi-card">
        <div class="testi-header">
          <img src="https://i.pravatar.cc/64?img=59" alt="" width="48" height="48"/>
          <div>
            <strong>Maria K.</strong>
            <span>Agency Owner, Malaysia</span>
          </div>
        </div>
        <p>&#8220;The Voice Funnel alone is worth 10x the price. My AI voice agent qualifies leads 24/7 while I sleep. I've never had a lead gen system this hands-off.&#8221;</p>
      </div>
    </div>
    <p class="disclaimer">
      <em>*IMPORTANT: Earnings and Income Disclaimer</em> &#8212; While all testimonials are from real founders, results are not typical. Your results will vary based on your skills, experience, and execution.
    </p>
  </section>

  <!-- FRAMEWORK -->
  <section class="framework" id="framework">
    <div class="section-header">
      <p class="eyebrow-dark">Inside the Kit</p>
      <h2>The Solopreneur GPS&trade;<br>Framework in 30 days.</h2>
      <p class="sub">7 stages. 100+ done-for-you assets. One system that works.</p>
    </div>
    <div class="framework-grid">
      {#each [
        { n:'1', title:'POSITIONING', desc:'Find Your Unfair Advantage', items:['Unfair Advantage Worksheet','ICP Persona Template','Competitive Analysis Grid','One-Liner Generator'] },
        { n:'2', title:'VALIDATION', desc:'Test Before You Build', items:['Validation Test Script','Pain Point Framework','Buyer Signal Detection','$0 Validation Methods'] },
        { n:'3', title:'BUILD', desc:'Ship in 7 Days', items:['SvelteKit + PocketBase Starter','AI Coding Prompts (20+)','Payment Integration Guide','Deployment Checklist'] },
        { n:'4', title:'TRAFFIC', desc:'Go Where Buyers Are', items:['Content Repurposing Engine','Viral Format Research','Facebook Group Scripts','Multi-Channel Distribution'] },
        { n:'5', title:'CONVERSION', desc:'Voice Funnel Sales System', items:['Voice Funnel Scripts (5 variants)','Lead Qualification Flow','Async Voice DM Templates','Booking Automation'] },
        { n:'6', title:'REVENUE', desc:'Monetization Architecture', items:['Lifetime Deal Launch Playbook','Pricing Calculator','Cash Flow Survival Sheet','Subscription Tier Design'] },
        { n:'7', title:'SCALE', desc:'Systems That Work Without You', items:['Team Member Track SOPs','Delegation Framework','Analytics Dashboard Setup','90-Day Scale Plan'] }
      ] as stage}
        <div class="fw-card">
          <div class="fw-number">{stage.n}</div>
          <h4>{stage.title}</h4>
          <p class="fw-desc">{stage.desc}</p>
          <ul>
            {#each stage.items as item}
              <li>{item}</li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </section>

  <!-- PRICING -->
  <section class="pricing" id="pricing">
    <div class="section-header">
      <p class="eyebrow-dark">Choose Your Tier</p>
      <h2>For founders who build<br>with code, not just likes.</h2>
    </div>
    <div class="pricing-grid">
      <!-- LIGHT -->
      <div class="price-card">
        <h3>Light</h3>
        <div class="price-tag">
          <span class="usd">$197</span>
          <span class="thb">&#3647;6,900</span>
        </div>
        <p class="price-desc">The framework that changed everything. Start here.</p>
        <ul class="price-features">
          <li>&#9989; <strong>Solopreneur GPS&#8482; Framework</strong> — The 7-stage system that took me from $0 to $100K+. You'll know exactly where you are and what to do next.</li>
          <li>&#9989; <strong>10 Ready-to-Use Templates</strong> — Positioning canvas, validation checklist, launch checklist, pricing worksheet, and 6 more. Fill in the blanks, never start from a blank page.</li>
          <li>&#9989; <strong>30-Day Action Plan (PDF)</strong> — Day-by-day instructions. No guessing. Open it, do today's task, close it. Repeat for 30 days.</li>
          <li>&#9989; <strong>Offer Clarity Worksheet</strong> — Define who you serve, what pain you solve, and why you're different in under 60 minutes.</li>
          <li>&#9989; <strong>Revenue Path Map</strong> — Pick your monetization lane: SaaS, service, productized, or community. No more "shiny object" jumping.</li>
          <li class="muted">&#10060; Voice Funnel Setup &amp; Scripts</li>
          <li class="muted">&#10060; 100+ Asset Library &amp; Starter Repo</li>
          <li class="muted">&#10060; Loom Walkthroughs &amp; AI Prompts</li>
        </ul>
        <a class="btn-secondary wide" href="https://buy.stripe.com/28E5kCfHAgvd6Js7Sr4ow0j" target="_blank" rel="noopener">Get Light — $197</a>
      </div>
      <!-- KIT -->
      <div class="price-card popular">
        <div class="popular-badge">Most Popular</div>
        <h3>Kit</h3>
        <div class="price-tag">
          <span class="usd">$997</span>
          <span class="thb">&#3647;34,900</span>
        </div>
        <p class="price-desc">Full system. 100+ assets. 30-day installation.</p>
        <ul class="price-features">
          <li>&#9989; <strong>Full 7-Stage GPS Framework</strong> — Deep-dive playbooks for every stage, not just the overview.</li>
          <li>&#9989; <strong>100+ Done-For-You Assets</strong> — Templates, scripts, SOPs, prompts, checklists. Everything you need, nothing you don't.</li>
          <li>&#9989; <strong>Voice Funnel Scripts (5 variants)</strong> — AI voice agent scripts that qualify leads 24/7 while you sleep. Worth 10x the price alone.</li>
          <li>&#9989; <strong>SvelteKit + PocketBase Starter Repo</strong> — Production-ready codebase. Deploy your SaaS in a weekend, not months.</li>
          <li>&#9989; <strong>AI Coding Prompts (20+)</strong> — Vibe-code your product with Claude, GPT, or Cursor. Copy-paste, build, ship.</li>
          <li>&#9989; <strong>Loom Walkthroughs (3 videos)</strong> — Watch me install each system in real-time. Pause, copy, repeat.</li>
          <li>&#9989; <strong>Payment Integration Guides</strong> — Stripe setup, Thai QR (PromptPay), checkout flows. Start collecting money immediately.</li>
          <li>&#9989; <strong>14-Day "Install &amp; Implement" Guarantee</strong></li>
        </ul>
        <a class="btn-primary wide" href="https://buy.stripe.com/dRm8wO8f8a6P4Bka0z4ow0k" target="_blank" rel="noopener">Get Kit — $997</a>
      </div>
      <!-- VELOCITY -->
      <div class="price-card">
        <h3>Velocity</h3>
        <div class="price-tag">
          <span class="usd">$3,500</span>
          <span class="thb">&#3647;122,500</span>
        </div>
        <p class="price-desc">Done-with-you. 1-on-1 support. 90 days.</p>
        <ul class="price-features">
          <li>&#9989; <strong>Everything in Kit</strong> — All 100+ assets, scripts, prompts, and walkthroughs included.</li>
          <li>&#9989; <strong>1-on-1 Onboarding (90 min)</strong> — We map your exact 90-day plan together. No generic advice.</li>
          <li>&#9989; <strong>Private Slack Support (90 days)</strong> — Ask anything, anytime. I reply within 24 hours.</li>
          <li>&#9989; <strong>Custom Voice Funnel Build</strong> — I build your AI voice agent for your specific niche and market.</li>
          <li>&#9989; <strong>Weekly Strategy Calls (4)</strong> — 45-minute deep dives on your toughest problems.</li>
          <li>&#9989; <strong>Custom Integrations</strong> — Need Zapier, Make, or custom API work? I handle it.</li>
        </ul>
        <a class="btn-secondary wide" href="https://buy.stripe.com/14AaEW52W5Qz0l41u34ow0l" target="_blank" rel="noopener">Get Velocity — $3,500</a>
      </div>
    </div>
    <p class="guarantee-badge">
      <span>&#128274;</span>
      <strong>14-day "Install &amp; Implement" Guarantee</strong> &#8212; Complete the checklists. If you don't feel it's the most actionable system you've ever purchased, we refund every penny.
    </p>
  </section>

  <!-- FAQ -->
  <section class="faq" id="faq">
    <div class="section-header">
      <p class="eyebrow-dark">Questions</p>
      <h2>What founders ask<br>before joining.</h2>
    </div>
    <div class="faq-list">
      {#each [
        { q: 'How is this different from other courses?', a: 'This is not a course. It is a system installation. Most courses give you knowledge. We give you installed systems with done-for-you templates, scripts, and SOPs. You implement in 30 days, not 90.' },
        { q: 'Do I need coding experience?', a: 'No. We use AI vibe coding (Claude, Qwen, GLM) + a simple stack (SvelteKit + PocketBase). If you can copy/paste and follow checklists, you can do this.' },
        { q: 'What if I am not in Thailand?', a: 'This works globally. We have templates for Stripe (international) and PromptPay (Thailand). The payment integration guide covers both. Founders from Singapore, Malaysia, Philippines already use this.' },
        { q: 'How much time do I need per day?', a: '1-2 hours/day for 30 days. The action plan is designed for busy founders who have day jobs or existing businesses. Consistency beats intensity.' },
        { q: 'What if I do not hit $100K in 30 days?', a: 'The 30-day goal is to install systems and hit your first $1K-$10K. $100K is the 90-day target for Velocity tier clients. Results vary based on your offer, market, and execution.' },
        { q: 'Do you offer refunds?', a: 'Yes. 14-day refund if you complete all checklists and do not feel it delivered value. Email support@foundersbkit.com with completed checklists.' }
      ] as faq, i}
        <div class="faq-item" class:open={openFaq === i}>
          <button on:click={() => toggleFaq(i)}>
            <span>{faq.q}</span>
            <span class="icon">{openFaq === i ? '&#8722;' : '&#43;'}</span>
          </button>
          {#if openFaq === i}
            <div class="faq-answer">{faq.a}</div>
          {/if}
        </div>
      {/each}
    </div>
  </section>

  <!-- ABOUT -->
  <section class="about" id="about">
    <div class="about-inner">
      <div class="about-text">
        <p class="eyebrow-dark">Hey, I am Phakpaphon.</p>
        <h2>From almost-giving-up to<br>Shark Tank Thailand.</h2>
        <p>Two years ago I had 1M views on TikTok, 30,000 users, and <strong>$100 in revenue</strong>. I was out of money. Month 6 was my lowest point.</p>
        <p>Then I built the system. Not another course. Not another tool. A <strong>system</strong> that installed my offer, my voice, and my brand into a machine that works without me.</p>
        <p>Result: $100K+ revenue. 90% profit margin. Shark Tank Thailand Season 6. And now I'm helping 10,000 solopreneurs do the same.</p>
        <p><strong>This is that system.</strong></p>
        <a class="btn-primary" href="https://buy.stripe.com/dRm8wO8f8a6P4Bka0z4ow0k" target="_blank" rel="noopener">Get the Kit — $997</a>
      </div>
      <div class="about-visual">
        <div class="video-embed">
          <div style="width:100%;height:100%;background:linear-gradient(135deg,#667eea,#764ba2);display:flex;align-items:center;justify-content:center;border-radius:16px;">
            <span style="font-size:64px;cursor:pointer;">&#9654;</span>
          </div>
        </div>
        <p class="about-caption">Watch: The full story behind $0 to $100K+ (8 min)</p>
      </div>
    </div>
  </section>

  <!-- FINAL CTA -->
  <section class="final-cta">
    <div class="final-cta-inner">
      <h2>Ready to install your<br>Solopreneur OS?</h2>
      <p>Choose your tier. Start building systems that work without you.</p>
      <a class="btn-primary huge" href="https://buy.stripe.com/dRm8wO8f8a6P4Bka0z4ow0k" target="_blank" rel="noopener">Get Founder SB Kit — $997</a>
      <p class="final-note">&#128274; 14-day guarantee. No risk. Cancel anytime.</p>
      <div class="final-logo-carousel">
        <div class="logo-track">
          {#each ['pocketbase','svelte','vercel','stripe','tiktok','youtube','facebook','cloudflare','pocketbase','svelte','vercel','stripe'] as name}
            <span class="logo-tag">{name}</span>
          {/each}
        </div>
      </div>
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
        <p>The solopreneur operating system. Built by a founder, for founders.</p>
      </div>
      <div class="footer-links">
        <div>
          <h5>Product</h5>
          <a href="#framework">Framework</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </div>
        <div>
          <h5>Company</h5>
          <a href="/about">About</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
        </div>
        <div>
          <h5>Legal</h5>
          <a href="/terms">Terms of Service</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/refund">Refund Policy</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&#169; 2026 Founder SB Kit. All rights reserved.</p>
        <p class="small">Earnings Disclaimer: This system is for educational purposes only. Results vary based on your skills, experience, and market conditions. We do not guarantee any specific revenue outcomes.</p>
      </div>
    </div>
  </footer>
</div>

<style>
  :global(body) {
    margin: 0;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: #FAF9F6;
    color: #161616;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* ===== NAV ===== */
  nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 32px;
    background: rgba(250,249,246,0);
    backdrop-filter: blur(0px);
    transition: background 0.3s, backdrop-filter 0.3s, box-shadow 0.3s;
    border-bottom: 1px solid transparent;
  }
  nav.scrolled {
    background: rgba(250,249,246,0.92);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(22,22,22,0.06);
  }
  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: #161616;
    font-weight: 700;
    font-size: 18px;
    letter-spacing: -0.5px;
  }
  .logo span span { color: #667eea; }
  .nav-links { display: flex; gap: 28px; }
  .nav-links a {
    text-decoration: none;
    color: #161616;
    font-size: 14px;
    font-weight: 500;
    opacity: 0.7;
    transition: opacity 0.2s;
  }
  .nav-links a:hover { opacity: 1; }
  .nav-cta {
    background: #D4F53C;
    color: #161616;
    padding: 10px 24px;
    border-radius: 999px;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .nav-cta:hover { transform: translateY(-1px); box-shadow: 0 4px 16px rgba(212,245,60,0.35); }

  /* ===== BUTTONS ===== */
  .btn-primary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #D4F53C;
    color: #161616;
    border: none;
    padding: 14px 32px;
    border-radius: 999px;
    font-family: inherit;
    font-size: 15px;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 2px 12px rgba(212,245,60,0.25);
  }
  .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 6px 24px rgba(212,245,60,0.4); }
  .btn-primary.huge { padding: 18px 48px; font-size: 18px; }
  .btn-primary.wide { width: 100%; }

  .btn-secondary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    color: #161616;
    border: 1.5px solid rgba(22,22,22,0.15);
    padding: 14px 32px;
    border-radius: 999px;
    font-family: inherit;
    font-size: 15px;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.2s;
  }
  .btn-secondary:hover { background: rgba(22,22,22,0.04); border-color: rgba(22,22,22,0.25); }
  .btn-secondary.wide { width: 100%; }

  /* ===== SECTIONS ===== */
  .section-header {
    text-align: center;
    max-width: 720px;
    margin: 0 auto 64px;
    padding: 0 24px;
  }
  .section-header p.sub {
    font-size: 18px;
    color: #666;
    margin-top: 12px;
  }
  .eyebrow {
    display: inline-block;
    background: rgba(102,126,234,0.08);
    color: #667eea;
    padding: 6px 16px;
    border-radius: 999px;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 20px;
  }
  .eyebrow-dark {
    display: inline-block;
    background: rgba(255,255,255,0.08);
    color: #D4F53C;
    padding: 6px 16px;
    border-radius: 999px;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 20px;
  }

  /* ===== HERO ===== */
  .hero {
    padding: 160px 24px 80px;
    text-align: center;
  }
  .hero-inner { max-width: 880px; margin: 0 auto; }
  .hero h1 {
    font-size: clamp(42px, 6vw, 72px);
    font-weight: 800;
    line-height: 1.08;
    letter-spacing: -2px;
    margin: 0 0 24px;
    color: #1a1a1a;
  }
  .hero-sub {
    font-size: 18px;
    color: #555;
    max-width: 640px;
    margin: 0 auto 32px;
    line-height: 1.6;
  }
  .hero-cta-row {
    display: flex;
    gap: 12px;
    justify-content: center;
    margin-bottom: 48px;
    flex-wrap: wrap;
  }
  .trust-pill {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: rgba(22,22,22,0.04);
    border: 1px solid rgba(22,22,22,0.06);
    padding: 8px 20px 8px 10px;
    border-radius: 999px;
    font-size: 14px;
    color: #555;
    margin-bottom: 48px;
  }
  .avatars { display: flex; }
  .avatars img {
    width: 32px; height: 32px;
    border-radius: 50%;
    border: 2px solid #FAF9F6;
    margin-left: -10px;
    object-fit: cover;
  }
  .avatars img:first-child { margin-left: 0; }

  /* Logo Carousel */
  .logo-carousel, .final-logo-carousel {
    overflow: hidden;
    mask-image: linear-gradient(90deg, transparent, black 15%, black 85%, transparent);
    -webkit-mask-image: linear-gradient(90deg, transparent, black 15%, black 85%, transparent);
    padding: 8px 0;
  }
  .logo-track {
    display: flex;
    gap: 32px;
    animation: scroll 30s linear infinite;
    width: max-content;
  }
  .final-logo-carousel .logo-track { animation: scroll 25s linear infinite; }
  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .logo-tag {
    display: inline-flex;
    align-items: center;
    padding: 8px 20px;
    background: rgba(22,22,22,0.03);
    border: 1px solid rgba(22,22,22,0.06);
    border-radius: 999px;
    font-size: 13px;
    font-weight: 500;
    color: #555;
    text-transform: capitalize;
    white-space: nowrap;
  }

  /* ===== DIFFERENTIATION ===== */
  .differentiation {
    padding: 100px 24px;
    max-width: 1200px;
    margin: 0 auto;
  }
  .differentiation h2 {
    font-size: clamp(32px, 4.5vw, 52px);
    font-weight: 700;
    letter-spacing: -1.5px;
    margin: 0 0 8px;
    line-height: 1.15;
  }
  .section-header > p {
    font-size: 18px;
    color: #666;
    margin: 0;
  }
  .diff-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 20px;
    margin-bottom: 40px;
  }
  .diff-card {
    background: #fff;
    border: 1px solid rgba(22,22,22,0.06);
    border-radius: 16px;
    padding: 28px;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .diff-card:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(0,0,0,0.06); }
  .diff-img {
    width: 72px; height: 72px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }
  .diff-card h4 { font-size: 18px; font-weight: 700; margin: 0 0 8px; }
  .diff-card p { font-size: 14.5px; color: #555; line-height: 1.6; margin: 0; }
  .diff-cta-row { text-align: center; }

  /* ===== PROOF / TIMELINE ===== */
  .proof {
    background: #161616;
    color: #fff;
    padding: 100px 24px;
  }
  .proof .section-header { margin-bottom: 56px; }
  .proof h2 {
    font-size: clamp(32px, 4.5vw, 52px);
    font-weight: 700;
    letter-spacing: -1.5px;
    line-height: 1.15;
    margin: 0;
    color: #fff;
  }
  .timeline {
    max-width: 720px;
    margin: 0 auto 48px;
    position: relative;
    padding-left: 28px;
  }
  .timeline::before {
    content: '';
    position: absolute;
    left: 6px; top: 0; bottom: 0;
    width: 2px;
    background: rgba(255,255,255,0.1);
  }
  .timeline-item {
    position: relative;
    padding-bottom: 36px;
    padding-left: 28px;
  }
  .tl-dot {
    position: absolute;
    left: -28px; top: 4px;
    width: 14px; height: 14px;
    border-radius: 50%;
    background: rgba(255,255,255,0.15);
    border: 2px solid rgba(255,255,255,0.3);
  }
  .tl-dot.highlight {
    background: #D4F53C;
    border-color: #D4F53C;
  }
  .tl-label {
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #D4F53C;
    margin-bottom: 4px;
    display: block;
  }
  .tl-content h4 { font-size: 20px; font-weight: 600; margin: 0 0 6px; color: #fff; }
  .tl-content p { font-size: 15px; color: rgba(255,255,255,0.65); line-height: 1.6; margin: 0; }
  .tl-content .arrows { color: #D4F53C; }
  .quote-block {
    max-width: 640px;
    margin: 0 auto;
    text-align: center;
    padding: 48px 24px;
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 20px;
    background: rgba(255,255,255,0.02);
  }
  .quote-mark {
    font-size: 64px;
    line-height: 1;
    color: #D4F53C;
    display: block;
    margin-bottom: 8px;
  }
  .quote-block p {
    font-size: 22px;
    font-weight: 500;
    font-style: italic;
    line-height: 1.5;
    margin: 0 0 16px;
    color: #fff;
  }
  .quote-block cite {
    font-size: 14px;
    color: rgba(255,255,255,0.5);
    font-style: normal;
  }

  /* ===== TESTIMONIALS ===== */
  .testimonials {
    padding: 100px 24px;
    max-width: 1200px;
    margin: 0 auto;
  }
  .testimonials h2 {
    font-size: clamp(32px, 4.5vw, 52px);
    font-weight: 700;
    letter-spacing: -1.5px;
    line-height: 1.15;
    margin: 0;
  }
  .testi-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 20px;
  }
  .testi-card {
    background: #fff;
    border: 1px solid rgba(22,22,22,0.06);
    border-radius: 16px;
    padding: 28px;
    transition: transform 0.2s;
  }
  .testi-card:hover { transform: translateY(-2px); }
  .testi-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
  }
  .testi-header img { border-radius: 50%; object-fit: cover; }
  .testi-header strong { display: block; font-size: 15px; font-weight: 600; }
  .testi-header span { font-size: 13px; color: #888; }
  .testi-card > p { font-size: 15px; line-height: 1.65; color: #444; margin: 0; }
  .disclaimer {
    text-align: center;
    font-size: 13px;
    color: #888;
    max-width: 680px;
    margin: 40px auto 0;
    line-height: 1.6;
  }

  /* ===== FRAMEWORK ===== */
  .framework {
    padding: 100px 24px;
    max-width: 1200px;
    margin: 0 auto;
  }
  .framework h2 {
    font-size: clamp(32px, 4.5vw, 52px);
    font-weight: 700;
    letter-spacing: -1.5px;
    line-height: 1.15;
    margin: 0;
  }
  .framework-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 16px;
  }
  .fw-card {
    background: #fff;
    border: 1px solid rgba(22,22,22,0.06);
    border-radius: 16px;
    padding: 28px;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .fw-card:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(0,0,0,0.06); }
  .fw-number {
    width: 36px; height: 36px;
    background: #161616;
    color: #D4F53C;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-weight: 700;
    margin-bottom: 14px;
  }
  .fw-card h4 { font-size: 16px; font-weight: 700; margin: 0 0 4px; letter-spacing: -0.3px; }
  .fw-desc { font-size: 14px; color: #888; margin: 0 0 14px; }
  .fw-card ul { list-style: none; padding: 0; margin: 0; }
  .fw-card li {
    font-size: 13.5px;
    color: #555;
    padding: 6px 0;
    border-bottom: 1px solid rgba(22,22,22,0.04);
    position: relative;
    padding-left: 18px;
  }
  .fw-card li::before {
    content: '&#8226;';
    position: absolute; left: 0;
    color: #D4F53C;
    font-size: 18px; line-height: 1;
  }
  .fw-card li:last-child { border-bottom: none; }

  /* ===== PRICING ===== */
  .pricing {
    padding: 100px 24px;
    max-width: 1100px;
    margin: 0 auto;
  }
  .pricing h2 {
    font-size: clamp(32px, 4.5vw, 52px);
    font-weight: 700;
    letter-spacing: -1.5px;
    line-height: 1.15;
    margin: 0;
  }
  .pricing-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-bottom: 32px;
  }
  .price-card {
    background: #fff;
    border: 1px solid rgba(22,22,22,0.08);
    border-radius: 20px;
    padding: 36px 28px;
    position: relative;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .price-card:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(0,0,0,0.06); }
  .price-card.popular { border: 2px solid #D4F53C; }
  .popular-badge {
    position: absolute;
    top: -12px; left: 50%;
    transform: translateX(-50%);
    background: #D4F53C;
    color: #161616;
    padding: 6px 18px;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  .price-card h3 { font-size: 20px; font-weight: 700; margin: 0 0 12px; }
  .price-tag { margin-bottom: 8px; }
  .price-tag .usd { font-size: 48px; font-weight: 800; letter-spacing: -2px; }
  .price-tag .thb { display: block; font-size: 15px; color: #888; margin-top: 2px; }
  .price-desc { font-size: 14.5px; color: #666; margin: 0 0 24px; }
  .price-card ul { list-style: none; padding: 0; margin: 0 0 24px; }
  .price-card li { font-size: 14px; padding: 7px 0; border-bottom: 1px solid rgba(22,22,22,0.05); }
  .price-card li:last-child { border-bottom: none; }
  .price-features li { font-size: 13.5px; line-height: 1.55; padding: 8px 0; }
  .price-features li strong { font-weight: 600; color: #161616; }
  .price-features li.muted { color: #aaa; font-size: 13px; }
  .guarantee-badge {
    text-align: center;
    background: rgba(102,126,234,0.04);
    border: 1px solid rgba(102,126,234,0.1);
    border-radius: 16px;
    padding: 20px 28px;
    max-width: 720px;
    margin: 0 auto;
    font-size: 14px;
    color: #555;
    line-height: 1.6;
  }
  .guarantee-badge span { font-size: 20px; margin-right: 6px; vertical-align: middle; }

  /* ===== FAQ ===== */
  .faq {
    padding: 100px 24px;
    max-width: 720px;
    margin: 0 auto;
  }
  .faq h2 {
    font-size: clamp(32px, 4.5vw, 52px);
    font-weight: 700;
    letter-spacing: -1.5px;
    line-height: 1.15;
    margin: 0;
  }
  .faq-list { border-top: 1px solid rgba(22,22,22,0.08); }
  .faq-item { border-bottom: 1px solid rgba(22,22,22,0.08); }
  .faq-item button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 22px 0;
    background: none; border: none;
    font-family: inherit;
    font-size: 17px;
    font-weight: 600;
    color: #161616;
    cursor: pointer;
    text-align: left;
  }
  .faq-item button .icon {
    font-size: 24px;
    color: #667eea;
    flex-shrink: 0;
    margin-left: 16px;
  }
  .faq-answer {
    font-size: 15px;
    color: #555;
    line-height: 1.7;
    padding: 0 0 22px;
  }

  /* ===== ABOUT ===== */
  .about {
    padding: 100px 24px;
    background: #FAF9F6;
  }
  .about-inner {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    align-items: center;
  }
  .about-text h2 {
    font-size: clamp(28px, 4vw, 42px);
    font-weight: 700;
    letter-spacing: -1.5px;
    line-height: 1.15;
    margin: 0 0 20px;
  }
  .about-text p { font-size: 16px; color: #555; line-height: 1.7; margin: 0 0 16px; }
  .about-text .btn-primary { margin-top: 8px; }
  .about-visual { text-align: center; }
  .video-embed {
    width: 100%;
    aspect-ratio: 16/10;
    border-radius: 16px;
    overflow: hidden;
    margin-bottom: 16px;
  }
  .about-caption { font-size: 14px; color: #888; margin: 0; }

  /* ===== FINAL CTA ===== */
  .final-cta {
    background: #161616;
    padding: 100px 24px;
    text-align: center;
  }
  .final-cta-inner { max-width: 720px; margin: 0 auto; }
  .final-cta h2 {
    font-size: clamp(32px, 5vw, 56px);
    font-weight: 800;
    letter-spacing: -2px;
    line-height: 1.1;
    color: #fff;
    margin: 0 0 16px;
  }
  .final-cta p { font-size: 18px; color: rgba(255,255,255,0.55); margin: 0 0 32px; }
  .final-note { font-size: 14px !important; color: rgba(255,255,255,0.35) !important; margin-top: 16px !important; }
  .final-logo-carousel { margin-top: 48px; }
  .final-logo-carousel .logo-tag { background: rgba(255,255,255,0.06); border-color: rgba(255,255,255,0.08); color: rgba(255,255,255,0.4); }

  /* ===== FOOTER ===== */
  footer {
    background: #0f0f0f;
    color: #fff;
    padding: 64px 24px 32px;
  }
  .footer-inner { max-width: 1100px; margin: 0 auto; }
  .footer-inner > .logo { margin-bottom: 12px; color: #fff; }
  .footer-brand { margin-bottom: 48px; }
  .footer-brand p { font-size: 14px; color: rgba(255,255,255,0.45); max-width: 320px; margin: 0; }
  .footer-links {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 32px;
    margin-bottom: 48px;
  }
  .footer-links h5 { font-size: 14px; font-weight: 600; margin: 0 0 16px; color: rgba(255,255,255,0.35); text-transform: uppercase; letter-spacing: 0.5px; }
  .footer-links a { display: block; font-size: 14px; color: rgba(255,255,255,0.55); text-decoration: none; margin-bottom: 10px; transition: color 0.2s; }
  .footer-links a:hover { color: #D4F53C; }
  .footer-bottom { border-top: 1px solid rgba(255,255,255,0.06); padding-top: 24px; }
  .footer-bottom p { font-size: 13px; color: rgba(255,255,255,0.3); margin: 0; }
  .footer-bottom .small { font-size: 11px; margin-top: 8px; line-height: 1.5; }

  /* ===== SERIF HEADLINES ===== */
  .hero h1, .section-header h2, .final-cta h2, .about-text h2 {
    font-family: 'Instrument Serif', Georgia, 'Times New Roman', serif;
    font-weight: 400;
  }
  .hero h1 { font-weight: 700; }

  /* ===== RESPONSIVE ===== */
  /* Tablet */
  @media (max-width: 1024px) {
    .about-inner { grid-template-columns: 1fr; gap: 48px; }
    .about-text { order: 2; }
    .about-visual { order: 1; }
  }
  /* Mobile */
  @media (max-width: 768px) {
    nav { padding: 12px 16px; }
    .nav-links { display: none; }
    .nav-cta { padding: 8px 16px; font-size: 13px; }
    .hero { padding: 120px 16px 60px; }
    .hero h1 { font-size: clamp(28px, 9vw, 48px); letter-spacing: -1px; }
    .hero-sub { font-size: 16px; }
    .hero-cta-row { flex-direction: column; align-items: center; }
    .btn-primary, .btn-secondary { width: 100%; max-width: 320px; }
    .trust-pill { flex-direction: column; text-align: center; padding: 12px 16px; }
    .differentiation, .testimonials, .framework, .pricing, .faq, .about { padding: 64px 16px; }
    .section-header { margin-bottom: 40px; }
    .about-inner { grid-template-columns: 1fr; gap: 32px; }
    .pricing-grid { grid-template-columns: 1fr; }
    .diff-grid, .testi-grid, .framework-grid { grid-template-columns: 1fr; }
    .section-header h2 { font-size: clamp(26px, 8vw, 40px); }
    .final-cta h2 { font-size: clamp(28px, 9vw, 48px); }
    .footer-links { grid-template-columns: repeat(2, 1fr); }
    .timeline { padding-left: 20px; }
    .timeline-item { padding-left: 20px; }
    .tl-dot { left: -20px; }
    .quote-block p { font-size: 18px; }
    .faq-item button { font-size: 15px; }
    .price-card .price-tag .usd { font-size: 40px; }
    .about-text h2 { font-size: clamp(24px, 7vw, 36px); }
  }
  /* Small Mobile */
  @media (max-width: 480px) {
    .hero { padding: 100px 12px 48px; }
    .hero h1 { font-size: clamp(26px, 10vw, 40px); letter-spacing: -0.5px; }
    .hero-sub { font-size: 15px; }
    .footer-links { grid-template-columns: 1fr; gap: 24px; }
    .diff-grid { grid-template-columns: 1fr; }
    .framework-grid { grid-template-columns: 1fr; }
    .price-card { padding: 28px 20px; }
    .timeline { padding-left: 16px; }
    .tl-dot { width: 12px; height: 12px; }
    .section-header h2 { letter-spacing: -0.5px; }
    .diff-card { padding: 20px; }
    .testi-card { padding: 20px; }
    .fw-card { padding: 22px; }
    .guarantee-badge { padding: 16px 20px; }
    .btn-primary.huge { padding: 14px 32px; font-size: 16px; }
    .eyebrow { font-size: 11px; padding: 5px 12px; }
    nav .logo { font-size: 16px; }
    nav .logo svg { width: 28px; height: 28px; }
    .faq-item button { padding: 16px 0; font-size: 14px; }
    .faq-answer { font-size: 14px; }
    .about-caption { font-size: 13px; }
    .quote-mark { font-size: 48px; }
    .quote-block { padding: 32px 16px; }
  }
</style>