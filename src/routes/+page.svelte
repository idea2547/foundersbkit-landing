<svelte:head>
  <title>Founder SB Kit | The System That Built $100K+ Revenue</title>
  <meta name="description" content="The exact system behind a 30,000-user SaaS, Shark Tank deal, and $100K+ revenue — installed into your business with your voice, your offer, your systems." />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Poppins:wght@300;400;500;600;700;800&family=Noto+Sans+Thai:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <meta property="og:title" content="Founder SB Kit — Built for Serious Solopreneurs" />
  <meta property="og:description" content="From $0 to $100K+ in 12 months. 100+ assets. 7-stage framework. 30-day installation." />
  <meta property="og:image" content="https://celesti.app/og-foundersb.jpg" />
</svelte:head>

<script lang="ts">
  import { onMount } from 'svelte';
  
  let lang_main = 'en';
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
      {#if lang_main === 'th'}
        <a href="#framework">หลักการ</a>
        <a href="#ai-agent">AI Agent</a>
        <a href="#pricing">ราคา</a>
        <a href="#faq">FAQ</a>
        <a href="#about">เกี่ยวกับ</a>
      {:else}
        <a href="#framework">Framework</a>
        <a href="#ai-agent">AI Agent</a>
        <a href="#pricing">Pricing</a>
        <a href="#faq">FAQ</a>
        <a href="#about">About</a>
      {/if}
      <div class="lang-toggle">
        <button class:active={lang_main === 'en'} on:click={() => lang_main = 'en'}>EN</button>
        <button class:active={lang_main === 'th'} on:click={() => lang_main = 'th'}>TH</button>
      </div>
    </div>
    {#if lang_main === 'th'}
      <a class="nav-cta" href="#pricing">สั่งซื้อ Founder SB Kit</a>
    {:else}
      <a class="nav-cta" href="#pricing">Get The Kit</a>
    {/if}
  </nav>

  <!-- HERO -->
  <section class="hero">
    <div class="hero-inner" class:thai={lang_main === 'th'}>
      {#if lang_main === 'th'}
        <p class="eyebrow">สำหรับโซโลพรีเนอร์ในไทยที่เริ่มต้นจาก 0 ถึง $10K+/เดือน</p>
        <h1>
          ระบบที่สร้างกำไร<br>100K+ แรก จาก<br>แค่ Short-form เป็น Software Startup
        </h1>
        <p class="hero-sub">
          ระบบเบื้องหลัง SaaS 30,000 ผู้ใช้ ดีล Shark Tank Thailand และกำไร 90% — พร้อมติดตั้งในธุรกิจของคุณ ด้วยเสียงคุณ ข้อเสนอคุณ แบรนด์คุณ
        </p>
        <div class="hero-cta-row">
          <a class="btn-primary" href="https://buy.stripe.com/dRm8wO8f8a6P4Bka0z4ow0k" target="_blank" rel="noopener">ซื้อ Founder SB Kit — ฿34,900</a>
          <a class="btn-secondary" href="#about">ชมเรื่องราว</a>
        </div>
        <div class="trust-pill">
          <span class="avatars">
            {#each [1,2,3,4,5] as i}
              <img src="https://i.pravatar.cc/48?img={i + 10}" alt="" width="32" height="32"/>
            {/each}
          </span>
          <span>ไว้วางใจโดย <strong>30,000+</strong> ผู้ก่อตั้งที่สร้างธุรกิจด้วยระบบ</span>
        </div>
      {:else}
        <p class="eyebrow">For solopreneurs in Thailand doing $0/month to $10K+/month</p>
        <h1>
          The System That Built<br>$100K+ Revenue in Thailand From<br>One TikTok Video
        </h1>
        <p class="hero-sub">
          The exact system behind a 30,000-user SaaS, a Shark Tank Thailand deal, and $100K+ revenue — ready to be installed in your business with your voice, your offer, your brand.
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
      {/if}
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
    <div class="section-header" class:thai={lang_main === 'th'}>
      {#if lang_main === 'th'}
        <h2>ไม่ใช่อะไรที่ต้องดู<br>ไม่ใช่อะไรที่ต้องเช่า</h2>
        <p>นี่คือระบบที่ผมสร้าง หลังจากลองมาทุกคอร์ส เครื่องมือ และที่ปรึกษา มันทำงานเองได้ แม้ไม่มีผมอยู่ในห้อง</p>
      {:else}
        <h2>Not something you watch.<br>Not something you rent.</h2>
        <p>This is the system I built after burning through every course, tool, and call. It actually runs without me in the room.</p>
      {/if}
    </div>
    {#if lang_main === 'th'}
      <div class="diff-grid">
        <div class="diff-card">
          <div class="diff-img" style="background: linear-gradient(135deg,#667eea,#764ba2);">
            <span style="font-size:48px;">&#128214;</span>
          </div>
          <h4>ไม่ใช่อีกคอร์ส</h4>
          <p>ผมเคยซื้อคอร์สเสียไปหลายหมื่นบาท คอร์สก่อนสร้างระบบนี้ ดูไปเรื่อย เรียนไปเรื่อย ยังติดอยู่กับที่ สิ่งที่ต้องการคือ <strong>ระบบที่ติดตั้งได้ทันที</strong> — ไม่ใช่อะไรให้ศึกษาอีก</p>
        </div>
        <div class="diff-card">
          <div class="diff-img" style="background: linear-gradient(135deg,#f093fb,#f5576c);">
            <span style="font-size:48px;">&#128736;</span>
          </div>
          <h4>ไม่ใช่ ซอฟต์แวร์/Subscription</h4>
          <p>ผมมี เครื่องมือไว้เปล่าๆ สิ่งที่เวิร์คคือ <strong>ระบบเดียวที่ทุกอย่างเชื่อมกัน</strong> — ไม่ใช่แค่ Login เพิ่ม</p>
        </div>
        <div class="diff-card">
          <div class="diff-img" style="background: linear-gradient(135deg,#4facfe,#00f2fe);">
            <span style="font-size:48px;">&#128239;</span>
          </div>
          <h4>ไม่ใช่อีกการโทรปรึกษา</h4>
          <p>ผมเคยเสีย $3,000 กับการโทร Strategy Advice ได้คำแนะนำดีมาก แต่ไม่ได้นำไปใช้ สิ่งที่ผมต้องการคือ <strong>30 วันของการลงมือจริง</strong> พร้อมคนคอยตรวจงาน — ไม่ใช่ 1 ชั่วโมงแห่งแรงบันดาลใจ</p>
        </div>
        <div class="diff-card">
          <div class="diff-img" style="background: linear-gradient(135deg,#43e97b,#38f9d7);">
            <span style="font-size:48px;">&#9989;</span>
          </div>
          <h4>สอนเป็นขั้นตอน</h4>
          <p>ผมสร้างทุกส่วนให้คุณติดตั้งได้เอง คุณเป็นเจ้าของ 100% ทีมคุณดูแลได้ งานก็เดินต่อได้เมื่อจบงาน <strong>100+ แอสเซ็ตพร้อมใช้</strong> รวมอยู่ในนี้</p>
        </div>
      </div>
      <div class="diff-cta-row">
        <a class="btn-primary" href="https://buy.stripe.com/dRm8wO8f8a6P4Bka0z4ow0k" target="_blank" rel="noopener">ซื้อ Framework — ฿34,900</a>
      </div>
    {:else}
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
    {/if}
  </section>

  <!-- PROOF — TIMELINE -->
  <section class="proof">
    <div class="section-header">
      {#if lang_main === 'th'}
        <p class="eyebrow-dark">ตัวอย่างผลลัพธ์จากระบบนี้จริง</p>
        <h2>จาก $100 สู่ $100K+<br>ภายใน 12 เดือน</h2>
      {:else}
        <p class="eyebrow-dark">Real results from the exact system</p>
        <h2>From $100 to $100K+<br>in 12 months.</h2>
      {/if}
    </div>
    <div class="timeline">
      {#if lang_main === 'th'}
        <div class="timeline-item">
          <div class="tl-dot"></div>
          <div class="tl-content">
            <span class="tl-label">เดือน 0-6</span>
            <h4>TikTok ไวรัล ยอดผู้ใช้พุ่ง แต่รายได้ 0</h4>
            <p>สร้าง AI Voice Tool เฉพาะกลุ่ม TikTok ยอดวิว 1 ล้านคน <strong>30,000 ผู้ใช้</strong> แต่ได้เงินแค่ <strong>$100</strong> เพราะสร้างเพื่อคนดู ไม่ใช่คนซื้อ</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="tl-dot"></div>
          <div class="tl-content">
            <span class="tl-label">เดือน 6</span>
            <h4>ถึงจุดต่ำสุด</h4>
            <p>เงินหมด เกือบถอดใจ รู้ตัวว่าติดปัญหาเรื่อง <strong>ลงมือสร้างระบบ</strong> ไม่ใช่ขาดความรู้ ต้องการ "ระบบจริง" ไม่ใช่ "เนื้อหาเพิ่ม"</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="tl-dot highlight"></div>
          <div class="tl-content">
            <span class="tl-label">เดือน 7</span>
            <h4>จุดเปลี่ยน</h4>
            <p>เข้า Facebook Group ผู้ซื้อ 5 กลุ่ม อ่านโพสต์ 100+ โพสต์ แล้วโพสต์ขายแค่ 1 โพสต์ แก้ปัญหาแท้จริง ได้เงิน <strong>$300+ ใน 4 วัน</strong></p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="tl-dot highlight"></div>
          <div class="tl-content">
            <span class="tl-label">เดือน 9-10</span>
            <h4>เปิดขาย Lifetime Deal</h4>
            <p>เปิดแผนขาย Lifetime ($300+) เงินเข้าไว ระบบเริ่มต่อยอดได้ มีข้อเสนอและกลุ่มเป้าหมายชัดเจน</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="tl-dot highlight"></div>
          <div class="tl-content">
            <span class="tl-label">เดือน 12+</span>
            <h4>ทะลุ $100K+ Shark Tank Thailand</h4>
            <p>เงินก้อนแรก $3,000<span class="arrows"> &#8594; </span>$6,000+ <strong>30,000+ ผู้ใช้ กำไร 90%</strong> ออกรายการ Shark Tank Thailand ซีซั่น 6 ทุกอย่างนี้เกิดจากระบบของโซโลพรีเนอร์</p>
          </div>
        </div>
      {:else}
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
      {/if}
    </div>
    <blockquote class="quote-block">
      <span class="quote-mark">&#8220;</span>
      {#if lang_main === 'th'}
        <p>ไปหาคนที่เป็น "ผู้ซื้อ" ไม่ใช่ "ผู้ชม" สร้าง "ระบบ" ไม่ใช่ "เนื้อหา"</p>
        <cite>&#8212; ภัคภพพล (Idea RC), ผู้ก่อตั้ง</cite>
      {:else}
        <p>Go where buyers are. Not where viewers are. Build systems, not content.</p>
        <cite>&#8212; Phakpaphon (Idea RC), Founder</cite>
      {/if}
    </blockquote>
  </section>

  <!-- TESTIMONIALS -->
  <section class="testimonials">
    <div class="section-header">
      {#if lang_main === 'th'}
        <p class="eyebrow-dark">เสียงจากผู้ก่อตั้งตัวจริง</p>
        <h2>Founder จริง<br>ระบบจริง ผลลัพธ์จริง</h2>
      {:else}
        <p class="eyebrow-dark">What founders are saying</p>
        <h2>Real founders.<br>Real systems. Real results.</h2>
      {/if}
    </div>
    <div class="testi-grid">
      <div class="testi-card">
        <div class="testi-header">
          <img src="https://i.pravatar.cc/64?img=12" alt="" width="48" height="48"/>
          <div>
            <strong>Somchai R.</strong>
            <span>{lang_main === 'th' ? "ครีเอเตอร์เนื้อหา, กรุงเทพฯ" : "Content Creator, Bangkok"}</span>
          </div>
        </div>
        <p>
          {#if lang_main === 'th'}
            &#8220;Framework Solopreneur GPS เปลี่ยนวิธีคิดของผมเรื่องการสร้างธุรกิจ ไม่ต้องพึ่งเทคนิคสุ่มๆ อีกต่อไป — แค่ลงมืออย่างเป็นระบบ จาก 0 ถึง 180,000 บาทใน 90 วัน&#8221;
          {:else}
            &#8220;The Solopreneur GPS framework changed how I think about building. No more random tactics &#8212; just systematic execution. Went from &#3647;0 to &#3647;180K in 90 days.&#8221;
          {/if}
        </p>
      </div>
      <div class="testi-card">
        <div class="testi-header">
          <img src="https://i.pravatar.cc/64?img=33" alt="" width="48" height="48"/>
          <div>
            <strong>James T.</strong>
            <span>{lang_main === 'th' ? "ผู้ก่อตั้ง SaaS, สิงคโปร์" : "SaaS Founder, Singapore"}</span>
          </div>
        </div>
        <p>
          {#if lang_main === 'th'}
            &#8220;ตอนแรกคิดว่าเป็นอีก 'คอร์ส' ธรรมดา แต่จริงๆ ไม่ใช่ — คือระบบจริงพร้อมเทมเพลตและไฟล์ที่ใช้ได้ทันที ปิดลูกค้ารายแรก $5K ได้ในสัปดาห์ที่ 3 เลย&#8221;
          {:else}
            &#8220;I was skeptical about another 'course'. But this is different &#8212; it's actual systems with templates I could use immediately. Closed my first $5K client in Week 3.&#8221;
          {/if}
        </p>
      </div>
      <div class="testi-card">
        <div class="testi-header">
          <img src="https://i.pravatar.cc/64?img=59" alt="" width="48" height="48"/>
          <div>
            <strong>Maria K.</strong>
            <span>{lang_main === 'th' ? "เจ้าของเอเจนซี่, มาเลเซีย" : "Agency Owner, Malaysia"}</span>
          </div>
        </div>
        <p>
          {#if lang_main === 'th'}
            &#8220;แค่ Voice Funnel ก็คุ้มเกินราคาหลายเท่า เอเจนต์เสียง AI คัดกรองลูกค้าให้อัตโนมัติ 24/7 ของจริง ไม่เคยเจอระบบหาลูกค้าอัตโนมัติที่แฮนด์ออฟขนาดนี้&#8221;
          {:else}
            &#8220;The Voice Funnel alone is worth 10x the price. My AI voice agent qualifies leads 24/7 while I sleep. I've never had a lead gen system this hands-off.&#8221;
          {/if}
        </p>
      </div>
    </div>
    <p class="disclaimer">
      <em>{lang_main === 'th' ? "*สำคัญ: ข้อจำกัดผลลัพธ์ทางรายได้" : "*IMPORTANT: Earnings and Income Disclaimer"}</em>
      &#8212; {lang_main === 'th'
        ? "ข้อความทั้งหมดนี้เป็นความคิดเห็นจริงจากผู้ก่อตั้งแต่ละท่าน ผลลัพธ์ขึ้นอยู่กับทักษะ ประสบการณ์ และการลงมือทำของแต่ละคน"
        : "While all testimonials are from real founders, results are not typical. Your results will vary based on your skills, experience, and execution."
      }
    </p>
  </section>

  <!-- FRAMEWORK -->
  <section class="framework" id="framework">
    <div class="section-header">
      {#if lang_main === 'th'}
        <p class="eyebrow-dark">ใน Kit มีอะไรบ้าง</p>
        <h2>Framework Solopreneur GPS&trade;<br>จบครบใน 30 วัน</h2>
        <p class="sub">7 ขั้นตอน 100+ แอสเซ็ตพร้อมใช้ ระบบเดียวที่ได้ผลจริง</p>
      {:else}
        <p class="eyebrow-dark">Inside the Kit</p>
        <h2>The Solopreneur GPS&trade;<br>Framework in 30 days.</h2>
        <p class="sub">7 stages. 100+ done-for-you assets. One system that works.</p>
      {/if}
    </div>
    <div class="framework-grid">
      {#if lang_main === 'th'}
        {#each [
          { n:'1', title:'วางจุดยืน', desc:'หาข้อได้เปรียบเฉพาะตัว', items:['แบบฝึก Unfair Advantage','เทมเพลต ICP Persona','ตารางเปรียบเทียบคู่แข่ง','ตัวช่วยเขียน one-liner'] },
          { n:'2', title:'พิสูจน์', desc:'ทดสอบก่อนสร้าง', items:['สคริปต์พิสูจน์ตลาด','กรอบ Pain Point','จับสัญญาณผู้ซื้อ','วิธี Validation โดยไม่ใช้เงิน'] },
          { n:'3', title:'สร้าง', desc:'เปิดตัวใน 7 วัน', items:['สตาร์ทเตอร์ SvelteKit + PocketBase','AI Coding Prompt กว่า 20 ชิ้น','คู่มือเชื่อมจ่ายเงิน','เช็กลิสต์ Deploy'] },
          { n:'4', title:'หาทราฟฟิก', desc:'ไปหาผู้ซื้อ', items:['เครื่องมือ Repurpose คอนเทนต์','วิธีหา Format ไวรัล','สคริปต์ Facebook Group','แจกคอนเทนต์ข้ามช่องทาง'] },
          { n:'5', title:'ปิดยอด', desc:'Voice Funnel ขายอัตโนมัติ', items:['Voice Funnel Script 5 แบบ','Flow คัดลูกค้า','เทมเพลต Voice DM','ระบบจองนัดหมายอัตโนมัติ'] },
          { n:'6', title:'สร้างรายได้', desc:'สถาปัตยกรรมรายได้', items:['Playbook ขาย lifetime deal','เครื่องคิดราคาที่ยืดหยุ่น','เช็กลิสต์เอาตัวรอด','ออกแบบ Tier Subscription'] },
          { n:'7', title:'ขยายทีม', desc:'ระบบที่เดินต่อเอง', items:['SOP ติดตามงานทีม','กรอบแบ่งงาน/มอบหมาย','แดชบอร์ดวัดผล','แผนขยาย 90 วัน'] }
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
      {:else}
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
      {/if}
    </div>
  </section>

  <!-- AI AGENT -->
  <section class="ai-agent" id="ai-agent">
    <div class="section-header">
      {#if lang_main === 'th'}
        <p class="eyebrow-dark">ติดตั้ง AI Agent เข้าธุรกิจคุณ</p>
        <h2>ติดตั้ง AI Agent<br>เข้าสู่ธุรกิจของคุณ</h2>
        <p class="sub">พูดคุยกับ AI แล้วให้มันสร้างผลลัพธ์ที่คุณต้องการ รันบนเซิร์ฟเวอร์หรือคอมคุณก็ได้ พร้อมใช้งานทันที</p>
      {:else}
        <p class="eyebrow-dark">Install an AI Agent into your business</p>
        <h2>Install an AI Agent<br>Into Your Business</h2>
        <p class="sub">Chat with it. Let it build the outcome you want. Runs on your server or your computer. Ready to install for your workflow.</p>
      {/if}
    </div>
    <div class="ai-agent-grid">
      <div class="terminal-mockup">
        <div class="terminal-bar">
          <span class="dot red"></span>
          <span class="dot yellow"></span>
          <span class="dot green"></span>
          <span class="terminal-title">{lang_main === 'th' ? 'เอเจนต์ — เทอร์มินัล' : 'agent — terminal'}</span>
        </div>
        <div class="terminal-body">
          {#if lang_main === 'th'}
            <p class="term-line"><span class="prompt">$</span> ติดตั้ง foundersbkit-agent</p>
            <p class="term-out">✓ Agent พร้อมทำงานแล้ว</p>
            <p class="term-line"><span class="prompt">$</span> สร้าง landing page สำหรับขายคอร์สของฉัน</p>
            <p class="term-out">✓ สร้างหน้าเพจ + ช่องจ่ายเงินเสร็จแล้ว</p>
            <p class="term-out">✓ Deploy ไปยัง celesti.app แล้ว</p>
            <p class="term-line"><span class="prompt">$</span> วิเคราะห์ยอดขายเดือนนี้</p>
            <p class="term-out">✓ รายได้ $12,400 — เพิ่ม 34% จากเดือนก่อน</p>
            <p class="term-out blink">▍</p>
          {:else}
            <p class="term-line"><span class="prompt">$</span> install foundersbkit-agent</p>
            <p class="term-out">✓ Agent ready and listening</p>
            <p class="term-line"><span class="prompt">$</span> build landing page for my course</p>
            <p class="term-out">✓ Page created + payment flow wired</p>
            <p class="term-out">✓ Deployed to celesti.app</p>
            <p class="term-line"><span class="prompt">$</span> analyze sales this month</p>
            <p class="term-out">✓ Revenue $12,400 — up 34% from last month</p>
            <p class="term-out blink">▍</p>
          {/if}
        </div>
      </div>
      <div class="ai-features">
        {#if lang_main === 'th'}
          <div class="ai-feat-card">
            <div class="ai-feat-icon">&#128187;</div>
            <h4>รันบนเซิร์ฟเวอร์หรือคอมคุณ</h4>
            <p>ไม่ต้องพึ่ง Cloud แพงๆ — รันบนเครื่องคุณเอง หรือเซิร์ฟเวอร์ที่คุณเลือก ข้อมูลอยู่กับคุณ 100%</p>
          </div>
          <div class="ai-feat-card">
            <div class="ai-feat-icon">&#128172;</div>
            <h4>พูดคุย แล้วให้ AI สร้าง</h4>
            <p>บอกสิ่งที่ต้องการเป็นคำพูด AI เขียนโค้ด สร้างหน้าเพจ ดึงข้อมูล จัดการ workflow — ทุกอย่างจากแชท</p>
          </div>
          <div class="ai-feat-card">
            <div class="ai-feat-icon">&#9889;</div>
            <h4>พร้อมติดตั้งทันที</h4>
            <p>คำสั่งเดียวก็ใช้ได้ ไม่ต้องตั้งค่ายุ่งยาก ติดตั้งเสร็จใน 5 นาที เข้ากับ workflow ที่มีอยู่แล้ว</p>
          </div>
          <div class="ai-feat-card">
            <div class="ai-feat-icon">&#128564;</div>
            <h4>ทำงานต่อให้ขณะคุณนอน</h4>
            <p>ตั้ง task ให้ Agent แล้วปล่อย คัดลูกค้า ส่งอีเมล อัปเดตข้อมูล — ทำงานอัตโนมัติ 24/7</p>
          </div>
        {:else}
          <div class="ai-feat-card">
            <div class="ai-feat-icon">&#128187;</div>
            <h4>Runs Locally or on Server</h4>
            <p>No expensive cloud required. Run it on your own machine or any server you choose. Your data stays yours.</p>
          </div>
          <div class="ai-feat-card">
            <div class="ai-feat-icon">&#128172;</div>
            <h4>Chat to Build</h4>
            <p>Tell it what you want in plain language. It writes code, creates pages, pulls data, manages workflows — all from chat.</p>
          </div>
          <div class="ai-feat-card">
            <div class="ai-feat-icon">&#9889;</div>
            <h4>Ready to Install</h4>
            <p>One command and it's running. No complex setup. Install in 5 minutes. Works with your existing workflow.</p>
          </div>
          <div class="ai-feat-card">
            <div class="ai-feat-icon">&#128564;</div>
            <h4>Works While You Sleep</h4>
            <p>Set a task and walk away. It qualifies leads, sends emails, updates data — running 24/7 on autopilot.</p>
          </div>
        {/if}
      </div>
    </div>
    <div class="ai-cta-row">
      <a class="btn-primary" href="https://buy.stripe.com/dRm8wO8f8a6P4Bka0z4ow0k" target="_blank" rel="noopener">{lang_main === 'th' ? 'ติดตั้ง AI Agent — ฿34,900' : 'Install AI Agent — Get Kit $997'}</a>
    </div>
  </section>

  <!-- SOCIAL PROOF -->
  <section class="social-proof">
    <div class="section-header">
      {#if lang_main === 'th'}
        <p class="eyebrow-dark">ผลลัพธ์จริง ไม่ใช่ทฤษฎี</p>
        <h2>ยืนยันแล้ว<br>ไม่ใช่แค่คำพูด</h2>
      {:else}
        <p class="eyebrow-dark">Real results, not theory</p>
        <h2>Verified.<br>Not Theoretical.</h2>
      {/if}
    </div>
    <div class="proof-grid">
      <div class="proof-card">
        <img src="/images/sharktank-celestiai.jpg" alt="Shark Tank Thailand" loading="lazy" />
        <div class="proof-label">
          <strong>{lang_main === 'th' ? 'Shark Tank Thailand ซีซั่น 6' : 'Shark Tank Thailand S6'}</strong>
          <span>{lang_main === 'th' ? 'ดีลจริงจากรายการ' : 'Real deal from the show'}</span>
        </div>
      </div>
      <div class="proof-card">
        <img src="/images/celestiai-homepage.png" alt="CelestiAI 30K+ users" loading="lazy" />
        <div class="proof-label">
          <strong>Celesti AI — 30,000+ {lang_main === 'th' ? 'ผู้ใช้' : 'Users'}</strong>
          <span>{lang_main === 'th' ? 'SaaS จริง ผู้ใช้จริง' : 'Real SaaS. Real users.'}</span>
        </div>
      </div>
      <div class="proof-card">
        <img src="/images/package-3d-mockup.png" alt="100+ assets" loading="lazy" />
        <div class="proof-label">
          <strong>100+ {lang_main === 'th' ? 'แอสเซ็ตพร้อมใช้' : 'Done-For-You Assets'}</strong>
          <span>{lang_main === 'th' ? 'เทมเพลต สคริปต์ Prompt ครบ' : 'Templates, scripts, prompts included.'}</span>
        </div>
      </div>
    </div>
  </section>

  <!-- PRICING -->
  <section class="pricing" id="pricing">
    <div class="section-header" class:thai={lang_main === 'th'}>
      {#if lang_main === 'th'}
        <p class="eyebrow-dark">เลือก Tier ที่เหมาะกับคุณ</p>
        <h2>สำหรับ Founder ที่สร้างด้วยโค้ด<br>ไม่ใช่แค่ปั๊ม Like</h2>
      {:else}
        <p class="eyebrow-dark">Choose Your Tier</p>
        <h2>For founders who build<br>with code, not just likes.</h2>
      {/if}
    </div>
    <div class="pricing-grid">
      <!-- LIGHT -->
      <div class="price-card">
        <h3>{lang_main === 'th' ? 'Light (เบื้องต้น)' : 'Light'}</h3>
        <div class="price-tag">
          <span class="usd">$197</span>
          <span class="thb">&#3647;6,900</span>
        </div>
        <p class="price-desc">
          {lang_main === 'th'
            ? 'เฟรมเวิร์กที่เปลี่ยนทุกอย่าง เหมาะสำหรับเริ่มต้น'
            : 'The framework that changed everything. Start here.'}
        </p>
        <ul class="price-features">
          <li>&#9989; <strong>Solopreneur GPS&#8482; Framework</strong> — {lang_main === 'th' ? '7 ขั้นตอนเปลี่ยนคุณจาก 0 สู่ $100K+ รู้ว่าอยู่ตรงไหนและจะไปต่อยังไง' : "The 7-stage system that took me from $0 to $100K+. You'll know exactly where you are and what to do next."}</li>
          <li>&#9989; <strong>{lang_main === 'th' ? 'เทมเพลตพร้อมใช้ 10 ชุด' : '10 Ready-to-Use Templates'}</strong> — {lang_main === 'th' ? 'Canvas วางจุดยืน, เช็กลิสต์พิสูจน์, Guide เปิดตัว, เวิร์กชีตราคาขายฯลฯ กรอกตาม ไม่ต้องเริ่มจากศูนย์' : 'Positioning canvas, validation checklist, launch checklist, pricing worksheet, and 6 more. Fill in the blanks, never start from a blank page.'}</li>
          <li>&#9989; <strong>{lang_main === 'th' ? 'แผนปฏิบัติ 30 วัน (PDF)' : '30-Day Action Plan (PDF)'}</strong> — {lang_main === 'th' ? 'ทำตามวัน ไม่ต้องเดา เปิด-ทำ-จบซ้ำ 30 วัน' : "Day-by-day instructions. No guessing. Open it, do today's task, close it. Repeat for 30 days."}</li>
          <li>&#9989; <strong>{lang_main === 'th' ? 'Offer Clarity Worksheet' : 'Offer Clarity Worksheet'}</strong> — {lang_main === 'th' ? 'กำหนดว่าใครเป็นกลุ่มเป้าหมาย แก้ปัญหาอะไร แตกต่างยังไง จบใน 60 นาที' : "Define who you serve, what pain you solve, and why you're different in under 60 minutes."}</li>
          <li>&#9989; <strong>{lang_main === 'th' ? 'Revenue Path Map' : 'Revenue Path Map'}</strong> — {lang_main === 'th' ? 'เลือกเส้นทางรายได้ SaaS, บริการ, ขายกล่อง, คอมมูนิตี้ ไม่สับสนอีก' : "Pick your monetization lane: SaaS, service, productized, or community. No more \"shiny object\" jumping."}</li>
          <li class="muted">&#10060; {lang_main === 'th' ? 'Voice Funnel ขั้นสูง &amp; Script' : 'Voice Funnel Setup &amp; Scripts'}</li>
          <li class="muted">&#10060; {lang_main === 'th' ? 'Asset Library 100+ ไฟล์ &amp; Starter Repo' : '100+ Asset Library &amp; Starter Repo'}</li>
          <li class="muted">&#10060; {lang_main === 'th' ? 'Loom Walkthrough &amp; AI Prompts' : 'Loom Walkthroughs &amp; AI Prompts'}</li>
        </ul>
        <a class="btn-secondary wide" href="https://buy.stripe.com/28E5kCfHAgvd6Js7Sr4ow0j" target="_blank" rel="noopener">{#if lang_main === 'th'}ซื้อ Light — ฿6,900{:else}Get Light — $197{/if}</a>
      </div>
      <!-- KIT -->
      <div class="price-card popular">
        <div class="popular-badge">{lang_main === 'th' ? 'แนะนำที่สุด' : 'Most Popular'}</div>
        <h3>{lang_main === 'th' ? 'Kit (ครบระบบ)' : 'Kit'}</h3>
        <div class="price-tag">
          <span class="usd">$997</span>
          <span class="thb">&#3647;34,900</span>
        </div>
        <p class="price-desc">{lang_main === 'th' ? 'ระบบเต็ม 100+ แอสเซ็ต ติดตั้งใน 30 วัน' : 'Full system. 100+ assets. 30-day installation.'}</p>
        <ul class="price-features">
          <li>&#9989; <strong>{lang_main === 'th' ? 'GPS Framework ครบ 7 สเตจ' : 'Full 7-Stage GPS Framework'}</strong> — {lang_main === 'th' ? 'Playbook เจาะลึกแต่ละสเตจ ไม่ใช่แค่ภาพรวม' : 'Deep-dive playbooks for every stage, not just the overview.'}</li>
          <li>&#9989; <strong>{lang_main === 'th' ? '100+ แอสเซ็ตพร้อมใช้' : '100+ Done-For-You Assets'}</strong> — {lang_main === 'th' ? 'Template, Script, SOP, Prompt, เช็กลิสต์ มีครบ จบในที่เดียว' : "Templates, scripts, SOPs, prompts, checklists. Everything you need, nothing you don't."}</li>
          <li>&#9989; <strong>{lang_main === 'th' ? 'Voice Funnel Script (5 เวอร์ชั่น)' : 'Voice Funnel Scripts (5 variants)'}</strong> — {lang_main === 'th' ? 'สคริปต์เอเย่นต์เสียง AI คัดลูกค้าให้อัตโนมัติ คุ้มเกิน 10 เท่า' : 'AI voice agent scripts that qualify leads 24/7 while you sleep. Worth 10x the price alone.'}</li>
          <li>&#9989; <strong>{lang_main === 'th' ? 'SvelteKit + PocketBase Starter Repo' : 'SvelteKit + PocketBase Starter Repo'}</strong> — {lang_main === 'th' ? 'โค้ดเวิร์กจริงพร้อมผลิตออนไลน์ สร้าง SaaS ได้ในสุดสัปดาห์' : 'Production-ready codebase. Deploy your SaaS in a weekend, not months.'}</li>
          <li>&#9989; <strong>{lang_main === 'th' ? 'AI Coding Prompt (20+)' : 'AI Coding Prompts (20+)'}</strong> — {lang_main === 'th' ? 'ใส่ไอเดียลงใน Claude, GPT, หรือ Cursor ได้เลย สร้าง-คัดลอก-ปล่อย' : 'Vibe-code your product with Claude, GPT, or Cursor. Copy-paste, build, ship.'}</li>
          <li>&#9989; <strong>{lang_main === 'th' ? 'วิดีโอ Loom (3 คลิป)' : 'Loom Walkthroughs (3 videos)'}</strong> — {lang_main === 'th' ? 'เห็นการติดตั้งระบบจริงสดๆ หยุด-ย้อน-ลอกได้เลย' : 'Watch me install each system in real-time. Pause, copy, repeat.'}</li>
          <li>&#9989; <strong>{lang_main === 'th' ? 'คู่มือเชื่อมจ่ายเงิน' : 'Payment Integration Guides'}</strong> — {lang_main === 'th' ? 'สอนเชื่อม Stripe, PromptPay, สร้าง Checkout ขายใช้เงินทันที' : 'Stripe setup, Thai QR (PromptPay), checkout flows. Start collecting money immediately.'}</li>
          <li>&#9989; <strong>AI Agent Setup</strong> — {lang_main === 'th' ? 'ติดตั้ง AI Agent รันบนเซิร์ฟเวอร์หรือคอมคุณ พูดคุยแล้วให้ AI สร้างผลลัพธ์' : 'Runs locally or on server. Chat and let it build the outcome you want.'}</li>
          <li>&#9989; <strong>14-Day "{lang_main === 'th' ? 'รับประกันติดตั้งสำเร็จ' : 'Install &amp; Implement'}" Guarantee</strong></li>
        </ul>
        <a class="btn-primary wide" href="https://buy.stripe.com/dRm8wO8f8a6P4Bka0z4ow0k" target="_blank" rel="noopener">{#if lang_main === 'th'}ซื้อ Kit — ฿34,900{:else}Get Kit — $997{/if}</a>
      </div>
      <!-- VELOCITY -->
      <div class="price-card">
        <h3>{lang_main === 'th' ? 'Velocity (จับมือทำ)' : 'Velocity'}</h3>
        <div class="price-tag">
          <span class="usd">$3,500</span>
          <span class="thb">&#3647;122,500</span>
        </div>
        <p class="price-desc">{lang_main === 'th' ? 'จับมือทำแบบตัวต่อตัว 90 วัน' : 'Done-with-you. 1-on-1 support. 90 days.'}</p>
        <ul class="price-features">
          <li>&#9989; <strong>{lang_main === 'th' ? 'ทุกอย่างใน Kit' : 'Everything in Kit'}</strong> — {lang_main === 'th' ? 'แอสเซ็ต, สคริปต์, Prompt, วิดีโอ ครบ' : 'All 100+ assets, scripts, prompts, and walkthroughs included.'}</li>
          <li>&#9989; <strong>{lang_main === 'th' ? 'Onboarding ตัวต่อตัว 90 นาที' : '1-on-1 Onboarding (90 min)'}</strong> — {lang_main === 'th' ? 'ช่วยวางแผน 90 วันให้คุณส่วนตัว' : 'We map your exact 90-day plan together. No generic advice.'}</li>
          <li>&#9989; <strong>{lang_main === 'th' ? 'Support ส่วนตัวผ่าน Slack 90 วัน' : 'Private Slack Support (90 days)'}</strong> — {lang_main === 'th' ? 'ถาม-ตอบได้ทุกเมื่อ มีคำตอบใน 24 ชม.' : 'Ask anything, anytime. I reply within 24 hours.'}</li>
          <li>&#9989; <strong>{lang_main === 'th' ? 'สร้าง Voice Funnel ตามกลุ่มเป้าหมายคุณ' : 'Custom Voice Funnel Build'}</strong> — {lang_main === 'th' ? 'สร้างระบบ voice agent เฉพาะสำหรับกลุ่มตลาดคุณ' : 'I build your AI voice agent for your specific niche and market.'}</li>
          <li>&#9989; <strong>{lang_main === 'th' ? 'Consult รายสัปดาห์ (4 ครั้ง)' : 'Weekly Strategy Calls (4)'}</strong> — {lang_main === 'th' ? 'เจาะปัญหาหนักของคุณครั้งละ 45 นาที' : '45-minute deep dives on your toughest problems.'}</li>
          <li>&#9989; <strong>{lang_main === 'th' ? 'Integrate ระบบตามต้องการ' : 'Custom Integrations'}</strong> — {lang_main === 'th' ? 'ต้องการเชื่อม Zapier, Make, API? จัดให้' : 'Need Zapier, Make, or custom API work? I handle it.'}</li>
          <li>&#9989; <strong>{lang_main === 'th' ? 'ตั้งค่า AI Agent เฉพาะธุรกิจ' : 'Custom AI Agent Configuration'}</strong> — {lang_main === 'th' ? 'ตั้งค่า AI Agent ให้เข้ากับ workflow ธุรกิจคุณโดยเฉพาะ' : 'I configure the AI Agent specifically for your business workflow.'}</li>
        </ul>
        <a class="btn-secondary wide" href="https://buy.stripe.com/14AaEW52W5Qz0l41u34ow0l" target="_blank" rel="noopener">{#if lang_main === 'th'}ซื้อ Velocity — ฿122,500{:else}Get Velocity — $3,500{/if}</a>
      </div>
    </div>
    <p class="guarantee-badge">
      <span>&#128274;</span>
      <strong>14 วัน"{lang_main === 'th' ? 'ติดตั้งและใช้งานได้จริง' : 'Install &amp; Implement'}" Guarantee</strong>
      &#8212; {lang_main === 'th'
        ? 'ทำเช็กลิสต์จนครบ ถ้าคุณไม่รู้สึกว่าเป็นระบบที่นำไปใช้จริงได้ทันที ขอเงินคืนได้เต็มจำนวน'
        : "Complete the checklists. If you don't feel it's the most actionable system you've ever purchased, we refund every penny."
      }
    </p>
  </section>

  <!-- FAQ -->
  <section class="faq" id="faq">
    <div class="section-header">
      {#if lang_main === 'th'}
        <p class="eyebrow-dark">คำถามที่พบบ่อย</p>
        <h2>Founder หลายคนถาม<br>ก่อนสมัคร</h2>
      {:else}
        <p class="eyebrow-dark">Questions</p>
        <h2>What founders ask<br>before joining.</h2>
      {/if}
    </div>
    <div class="faq-list">
      {#if lang_main === 'th'}
        {#each [
          { q: 'ระบบนี้ต่างจากคอร์สอื่นยังไง?', a: 'นี่ไม่ใช่คอร์ส แต่คือระบบจริงที่ติดตั้งได้ คอร์สให้แค่ความรู้ เราให้ระบบพร้อมใช้—ติดตั้งเสร็จใน 30 วัน ไม่ต้องรอ 90 วัน' },
          { q: 'ต้องมีพื้นฐานเขียนโค้ดไหม?', a: 'ไม่ต้อง เราใช้ AI coding (Claude, Qwen, GLM) + stack ที่ใช้ง่าย (SvelteKit + PocketBase) แค่ copy/paste+ทำตามคู่มือ ทุกคนติดตั้งได้' },
          { q: 'ถ้าไม่ได้อยู่ไทย ใช้ได้ไหม?', a: 'ใช้ได้ทุกที่ เรามีเทมเพลต Stripe (สากล) กับ PromptPay (ไทย) คู่มือจ่ายเงินครอบคลุมหมด Founder จากสิงคโปร์ มาเลเซีย ฟิลิปปินส์ ใช้แล้ว' },
          { q: 'ต้องใช้เวลาต่อวันเท่าไร?', a: 'วันละ 1-2 ชม. 30 วัน คู่มือจัดให้รายวันสำหรับคนมีเวลาน้อยหรือมีธุรกิจอื่น เน้นสม่ำเสมอไม่ต้องหนักก็ได้' },
          { q: 'ถ้าไม่ถึง $100K ใน 30 วันล่ะ?', a: 'เป้าหมาย 30 วันไว้ติดตั้งระบบกับรับเงิน $1K-$10K เป้าหมาย $100K เหมาะกับสาย Velocity 90 วัน ขึ้นกับข้อเสนอ ตลาด และความขยัน' },
          { q: 'รับประกันคืนเงินไหม?', a: 'มี รับคืนเงิน 14 วัน ถ้าทำเช็กลิสต์ครบแล้วยังไม่รู้สึกได้ Value ขอคืนเงินเต็มจำนวน ส่งเช็กลิสต์ที่ support@foundersbkit.com' }
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
      {:else}
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
      {/if}
    </div>
  </section>

  <!-- ABOUT -->
  <section class="about" id="about">
    <div class="about-inner">
      <div class="about-text">
        <p class="eyebrow-dark">{lang_main === 'th' ? 'สวัสดี ผมภัคภพพล' : 'Hey, I am Phakpaphon.'}</p>
        <h2>
          {lang_main === 'th'
            ? 'จากเกือบล้มเลิก\nสู่ Shark Tank Thailand'
            : 'From almost-giving-up to<br>Shark Tank Thailand.'}
        </h2>
        <p>
          {lang_main === 'th'
            ? 'สองปีก่อน TikTok 1 ล้านวิว, 30,000 ผู้ใช้ แต่รายได้ $100 เงินหมด เดือนที่ 6 เหมือนโลกแตก'
            : 'Two years ago I had 1M views on TikTok, 30,000 users, and <strong>$100 in revenue</strong>. I was out of money. Month 6 was my lowest point.'}
        </p>
        <p>
          {lang_main === 'th'
            ? 'ผมจึงสร้าง “ระบบ” ไม่ใช่คอร์ส ไม่ใช่เครื่องมือ แต่คือระบบที่เอาตัวเอง-ข้อเสนอ-แบรนด์ ใส่ลงไปในกลไกเดินงานจบเอง'
            : 'Then I built the system. Not another course. Not another tool. A <strong>system</strong> that installed my offer, my voice, and my brand into a machine that works without me.'}
        </p>
        <p>
          {lang_main === 'th'
            ? 'ผลลัพธ์: รายได้ $100K+ กำไร 90% ได้ออกรายการ Shark Tank Thailand ซีซั่น 6 — วันนี้ผมช่วยให้โซโลพรีเนอร์อีกกว่า 10,000 คน ได้ระบบแบบเดียวกัน'
            : "Result: $100K+ revenue. 90% profit margin. Shark Tank Thailand Season 6. And now I'm helping 10,000 solopreneurs do the same."}
        </p>
        <p>
          <strong>{lang_main === 'th' ? 'นี่แหละ...ระบบนั้นเอง' : 'This is that system.'}</strong>
        </p>
        <a class="btn-primary" href="https://buy.stripe.com/dRm8wO8f8a6P4Bka0z4ow0k" target="_blank" rel="noopener">{lang_main === 'th' ? 'ซื้อ Kit — ฿34,900' : 'Get the Kit — $997'}</a>
      </div>
      <div class="about-visual">
        <div class="about-image-stack">
          <img class="about-main-img" src="/images/sharktank-video-page.png" alt="Shark Tank Thailand appearance" loading="lazy" />
          <img class="about-float-img" src="/images/celestiai-homepage.png" alt="Celesti AI homepage" loading="lazy" />
        </div>
        <p class="about-caption">{lang_main === 'th' ? 'Shark Tank Thailand ซีซั่น 6 · Celesti AI · 30,000+ ผู้ใช้' : 'Shark Tank Thailand S6 · Celesti AI · 30K+ users'}</p>
      </div>
    </div>
  </section>

  <!-- FINAL CTA -->
  <section class="final-cta">
    <div class="final-cta-inner" class:thai={lang_main === 'th'}>
      {#if lang_main === 'th'}
        <h2>พร้อมติดตั้งระบบ<br>ที่ทำงานเองโดยไม่ต้องมีคุณ?</h2>
        <p>เลือก Tier ของคุณ แล้วเริ่มสร้างระบบที่ทำงานแทนคุณ</p>
        <a class="btn-primary huge" href="https://buy.stripe.com/dRm8wO8f8a6P4Bka0z4ow0k" target="_blank" rel="noopener">ซื้อ Founder SB Kit — ฿34,900</a>
        <p class="final-note">&#128274; รับประกัน 14 วัน ไม่มีความเสี่ยง ยกเลิกได้ตลอด</p>
      {:else}
        <h2>Ready to install your<br>system that works without you?</h2>
        <p>Choose your tier. Start building systems that work without you.</p>
        <a class="btn-primary huge" href="https://buy.stripe.com/dRm8wO8f8a6P4Bka0z4ow0k" target="_blank" rel="noopener">Get Founder SB Kit — $997</a>
        <p class="final-note">&#128274; 14-day guarantee. No risk. Cancel anytime.</p>
      {/if}
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
        {#if lang_main === 'th'}<p>ระบบที่สร้างรายได้ $100K+ แบ่งปันกับ Founder ที่อยากสำเร็จเหมือนกัน</p>{:else}<p>The solopreneur operating system. Built by a founder, for founders.</p>{/if}
      </div>
      <div class="footer-links">
        <div>
          <h5>{lang_main === 'th' ? 'สินค้า' : 'Product'}</h5>
          <a href="#framework">{lang_main === 'th' ? 'Framework' : 'Framework'}</a>
          <a href="#pricing">{lang_main === 'th' ? 'ราคา' : 'Pricing'}</a>
          <a href="#faq">FAQ</a>
        </div>
        <div>
          <h5>{lang_main === 'th' ? 'บริษัท' : 'Company'}</h5>
          <a href="/about">{lang_main === 'th' ? 'เกี่ยวกับเรา' : 'About'}</a>
          <a href="/blog">Blog</a>
          <a href="/contact">{lang_main === 'th' ? 'ติดต่อ' : 'Contact'}</a>
        </div>
        <div>
          <h5>{lang_main === 'th' ? 'กฎหมาย' : 'Legal'}</h5>
          <a href="/terms">{lang_main === 'th' ? 'ข้อกำหนดบริการ' : 'Terms of Service'}</a>
          <a href="/privacy">{lang_main === 'th' ? 'นโยบายความเป็นส่วนตัว' : 'Privacy Policy'}</a>
          <a href="/refund">{lang_main === 'th' ? 'นโยบายคืนเงิน' : 'Refund Policy'}</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&#169; 2026 Founder SB Kit. All rights reserved.</p>
        <p class="small">{lang_main === 'th'
          ? 'ข้อจำกัดความรับผิด: ระบบนี้เพื่อการศึกษาเท่านั้น ผลลัพธ์ขึ้นอยู่กับทักษะ ประสบการณ์ และสภาวะตลาดแต่ละคน ไม่มีการรับประกันรายได้ใดๆ'
          : 'Earnings Disclaimer: This system is for educational purposes only. Results vary based on your skills, experience, and market conditions. We do not guarantee any specific revenue outcomes.'}
        </p>
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

  /* ===== LANG TOGGLE ===== */
  .lang-toggle { display: flex; gap: 2px; background: rgba(255,255,255,0.08); border-radius: 8px; padding: 3px; }
  .lang-toggle button { background: transparent; border: none; color: rgba(255,255,255,0.5); font-size: 11px; font-weight: 700; padding: 6px 10px; border-radius: 6px; cursor: pointer; transition: all 0.2s; font-family: Poppins, sans-serif; }
  .lang-toggle button.active { background: rgba(255,255,255,0.12); color: #D4F53C; }
  .lang-toggle button:hover:not(.active) { color: #fff; }
  /* ===== THAI TYPOGRAPHY ===== */
  .thai { font-family: 'Noto Sans Thai', 'Sukhumvit Set', 'TH Sarabun New', sans-serif; }
  .thai h1, .thai h2, .thai h3, .thai h4 { font-family: 'Noto Sans Thai', 'Sukhumvit Set', sans-serif; font-weight: 700; line-height: 1.35; }
  .thai p, .thai li { line-height: 1.7; }
  .thai .hero-sub { font-size: 18px; }
  .thai .hero-sub2 { font-size: 15px; }

  /* ===== AI AGENT ===== */
  .ai-agent {
    background: #161616;
    color: #fff;
    padding: 100px 24px;
  }
  .ai-agent h2 {
    font-size: clamp(32px, 4.5vw, 52px);
    font-weight: 700;
    letter-spacing: -1.5px;
    line-height: 1.15;
    margin: 0;
    color: #fff;
  }
  .ai-agent .sub { font-size: 18px; color: rgba(255,255,255,0.55); margin-top: 12px; }
  .ai-agent-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    max-width: 1100px;
    margin: 0 auto;
    align-items: start;
  }
  .terminal-mockup {
    background: #0a0a0a;
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 16px;
    overflow: hidden;
  }
  .terminal-bar {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 12px 16px;
    background: rgba(255,255,255,0.04);
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }
  .dot { width: 10px; height: 10px; border-radius: 50%; }
  .dot.red { background: #ff5f57; }
  .dot.yellow { background: #febc2e; }
  .dot.green { background: #28c840; }
  .terminal-title { font-size: 12px; color: rgba(255,255,255,0.4); margin-left: 8px; font-family: monospace; }
  .terminal-body { padding: 20px; font-family: 'SF Mono', 'Fira Code', monospace; font-size: 13.5px; line-height: 1.8; }
  .term-line { margin: 0 0 2px; color: rgba(255,255,255,0.8); }
  .term-line .prompt { color: #D4F53C; font-weight: 700; margin-right: 8px; }
  .term-out { margin: 0 0 6px; color: rgba(255,255,255,0.5); padding-left: 20px; }
  .term-out.blink { animation: blink 1s step-end infinite; color: #D4F53C; }
  @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
  .ai-features { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .ai-feat-card {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 16px;
    padding: 24px;
    transition: transform 0.2s, background 0.2s;
  }
  .ai-feat-card:hover { transform: translateY(-2px); background: rgba(255,255,255,0.06); }
  .ai-feat-icon { font-size: 28px; margin-bottom: 12px; }
  .ai-feat-card h4 { font-size: 16px; font-weight: 700; margin: 0 0 6px; color: #fff; }
  .ai-feat-card p { font-size: 14px; color: rgba(255,255,255,0.55); line-height: 1.6; margin: 0; }
  .ai-cta-row { text-align: center; margin-top: 48px; }

  /* ===== SOCIAL PROOF ===== */
  .social-proof {
    padding: 100px 24px;
    max-width: 1200px;
    margin: 0 auto;
  }
  .social-proof h2 {
    font-size: clamp(32px, 4.5vw, 52px);
    font-weight: 700;
    letter-spacing: -1.5px;
    line-height: 1.15;
    margin: 0;
  }
  .proof-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
  }
  .proof-card {
    background: #fff;
    border: 1px solid rgba(22,22,22,0.06);
    border-radius: 16px;
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  .proof-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.08); }
  .proof-card img {
    width: 100%;
    aspect-ratio: 16/10;
    object-fit: cover;
    filter: grayscale(30%);
    transition: filter 0.3s;
  }
  .proof-card:hover img { filter: grayscale(0%); }
  .proof-label { padding: 20px; }
  .proof-label strong { display: block; font-size: 16px; font-weight: 700; margin-bottom: 4px; }
  .proof-label span { font-size: 14px; color: #888; }

  /* ===== ABOUT IMAGE STACK ===== */
  .about-image-stack { position: relative; }
  .about-main-img {
    width: 100%;
    border-radius: 16px;
    object-fit: cover;
    display: block;
  }
  .about-float-img {
    position: absolute;
    bottom: -16px;
    right: -16px;
    width: 45%;
    border-radius: 12px;
    border: 4px solid #FAF9F6;
    box-shadow: 0 8px 32px rgba(0,0,0,0.12);
    object-fit: cover;
  }

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
    .differentiation, .testimonials, .framework, .pricing, .faq, .about, .ai-agent, .social-proof { padding: 64px 16px; }
    .section-header { margin-bottom: 40px; }
    .about-inner { grid-template-columns: 1fr; gap: 32px; }
    .pricing-grid { grid-template-columns: 1fr; }
    .diff-grid, .testi-grid, .framework-grid, .proof-grid { grid-template-columns: 1fr; }
    .ai-agent-grid { grid-template-columns: 1fr; gap: 32px; }
    .ai-features { grid-template-columns: 1fr; }
    .about-float-img { position: static; width: 100%; margin-top: 12px; border: none; box-shadow: none; }
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