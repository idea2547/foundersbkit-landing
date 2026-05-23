<script>
  let lang = 'en';
</script>

<svelte:head>
  <title>Founder Distribution System | From 'Posting Randomly' to Publishing With Purpose</title>
  <meta name="description" content="7-day distribution setup for solo founders and creators who are tired of posting into the void." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif&family=Noto+Sans+Thai:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
</svelte:head>

<section class="hero">
  <nav>
    <a href="/" class="logo">Founder SBKit</a>
    <div class="nav-links">
      <a href="/#framework">{#if lang === 'th'}หลักการ{:else}Framework{/if}</a>
      <a href="/" on:click|preventDefault={() => window.location.href = '/#pricing'}>{#if lang === 'th'}ราคา{:else}Pricing{/if}</a>
      <a href="/#about">{#if lang === 'th'}เกี่ยวกับ{:else}About{/if}</a>
      <a href="/" on:click|preventDefault={() => window.location.href = '/#faq'}>FAQ</a>
      <div class="lang-toggle">
        <button class:active={lang === 'en'} on:click={() => lang = 'en'}>EN</button>
        <button class:active={lang === 'th'} on:click={() => lang = 'th'}>TH</button>
      </div>
    </div>
  </nav>
  <div class="hero-inner" class:thai={lang === 'th'}>
    {#if lang === 'th'}
      <p class="eyebrow">สำหรับ FOUNDER และ CREATOR ที่โพสต์ไปแบบไร้จุดหมาย</p>
      <h1>ระบบที่เปลี่ยนการโพสต์แบบสุ่มสี่สุ่มห้า ให้เป็นเครื่องมือสร้าง Reach</h1>
      <p class="hero-sub">ไม่ใช่ Agency ไม่ใช่คอร์ส ไม่ใช่ Subscription ที่คุณจะลืมไปในสัปดาห์หน้า</p>
      <p class="hero-sub2">ติดตั้ง 7 วัน: Positioning, Content Pillars, Hooks, Workflow, AI Stack ของคุณ คุณเริ่มโพสต์แบบมีระบบในวันที่ 8 หรือเงินคืนเต็มจำนวน</p>
      <div class="hero-cta">
        <a class="btn-primary" href="https://buy.stripe.com/4gM3cuang5Qz2tcc8H4ow0n" target="_blank" rel="noopener">จอง Distribution Sprint — &#3647;13,797</a>
        <a class="btn-ghost" href="#how-it-works">ดูว่าทำอะไรจริงๆ</a>
      </div>
      <div class="hero-proof">
        <span>&#127856;</span> ขายให้ 30,000+ users จาก TikTok วิดีโอเดียว <strong>ผมรู้เรื่อง Distribution</strong>
      </div>
    {:else}
      <p class="eyebrow">FOR FOUNDERS AND CREATORS POSTING INTO THE VOID</p>
      <h1>The system that turns random posts&nbsp;into a distribution engine.</h1>
      <p class="hero-sub">Not another agency. Not another course. Not another subscription you will forget about in a week.</p>
      <p class="hero-sub2">This is a 7-day installation: your positioning, your content pillars, your hooks, your workflow, your AI stack. You publish with a system on Day 8. Or your money back.</p>
      <div class="hero-cta">
        <a class="btn-primary" href="https://buy.stripe.com/4gM3cuang5Qz2tcc8H4ow0n" target="_blank" rel="noopener">Book the sprint — &#3647;13,797</a>
        <a class="btn-ghost" href="#how-it-works">See what actually happens</a>
      </div>
      <div class="hero-proof">
        <span>&#127856;</span> Sold to 30,000+ users on one TikTok. <strong>I know distribution.</strong>
      </div>
    {/if}
  </div>
</section>

<!-- WHAT THIS IS -->
<section class="what-is" id="how-it-works">
  <div class="section-header" class:thai={lang === 'th'}>
    {#if lang === 'th'}
      <p class="eyebrow-dark">นี่คืออะไรจริงๆ</p>
      <h2>ไม่ใช่รับดูแล Social Media ไม่ใช่คอร์สการตลาด ไม่ใช่ "Agency" ทำคอนเทนต์</h2>
      <p class="sub">Founder ที่สร้างดีเกือบทุกคนมีปัญหาเดียวกัน: ไม่มีใครรู้ว่าเขามีตัวตนอยู่ พวกเขาส่ง Feature ปรับ Product โพสต์อาทิตย์ละครั้งแบบไร้กลยุทธ์ ตรงนี้แหละที่เราต้องแก้</p>
    {:else}
      <p class="eyebrow-dark">What this actually is</p>
      <h2>Not social media management. Not a marketing course. Not a content "agency."</h2>
      <p class="sub">Most founders who build well have one problem: nobody knows they exist. They ship features, iterate products, and post once a week with zero strategy. This fixes the knowing-you-exist part.</p>
    {/if}
  </div>
  {#if lang === 'th'}
    <div class="diff-grid">
      <div class="diff-card">
        <div class="icon">&#10060;</div>
        <h4>ไม่ใช่อีก Agency</h4>
        <p>Agency เขียนแคปชั่นให้คุณ แต่คุณยังไม่รู้ว่าทำไมถึงได้ผล เราสร้างเครื่องจักร ส่งกุญแจให้คุณ และสอนให้คุณขับเอง</p>
      </div>
      <div class="diff-card">
        <div class="icon">&#10060;</div>
        <h4>ไม่ใช่อีกคอร์ส</h4>
        <p>คอร์สทำให้ความรู้ใส่หัวแล้วหวังว่าคุณจะลงมือ เรานั่งทำไปพร้อมกัน คุณออกมาพร้อมระบบที่วิ่งได้ ไม่ใช่ Playlist ที่ Bookmark ไว้</p>
      </div>
      <div class="diff-card">
        <div class="icon">&#10060;</div>
        <h4>ไม่ใช่อีก SaaS</h4>
        <p>เครื่องมือไม่แก้ Positioning ตัว Scheduler ไม่เขียน Hook เราสร้างชั้นกลยุทธ์ที่ทำให้เครื่องมือใดๆ มีประโยชน์จริง</p>
      </div>
      <div class="diff-card yes">
        <div class="icon">&#9989;</div>
        <h4>คุณได้อะไรจริงๆ</h4>
        <p>Founder ที่ทำ 1M+ Views, สร้าง SaaS 30K Users, และขายใน Shark Tank — ติดตั้งระบบคอนเทนต์ที่อยู่เบื้องหลังทั้งหมดให้ธุรกิจของคุณ ใน 7 วัน</p>
      </div>
    </div>
  {:else}
    <div class="diff-grid">
      <div class="diff-card">
        <div class="icon">&#10060;</div>
        <h4>Not Another Agency</h4>
        <p>Agencies write captions for you. You still do not know why anything works. We build the machine, hand you the keys, and teach you to run it.</p>
      </div>
      <div class="diff-card">
        <div class="icon">&#10060;</div>
        <h4>Not Another Course</h4>
        <p>Courses dump knowledge and hope you apply it. We sit together and apply it. You walk away with a running system, not a bookmarked playlist.</p>
      </div>
      <div class="diff-card">
        <div class="icon">&#10060;</div>
        <h4>Not Another SaaS</h4>
        <p>Tools do not fix positioning. Schedulers do not write hooks. We build the strategy layer that makes any tool actually useful.</p>
      </div>
      <div class="diff-card yes">
        <div class="icon">&#9989;</div>
        <h4>What You Actually Get</h4>
        <p>A founder who has done 1M+ views, built a 30K-user SaaS, and sold on Shark Tank — installing the exact content system behind it into your business. In 7 days.</p>
      </div>
    </div>
  {/if}
</section>

<!-- DELIVERABLES -->
<section class="deliverables" id="deliverables">
  <div class="section-header" class:thai={lang === 'th'}>
    {#if lang === 'th'}
      <p class="eyebrow-dark">7 วัน 7 Deliverables</p>
      <h2>สิ่งที่เราสร้างด้วยกันในหนึ่งสัปดาห์</h2>
    {:else}
      <p class="eyebrow-dark">7 days. 7 deliverables.</p>
      <h2>What we build together in one week.</h2>
    {/if}
  </div>
  {#if lang === 'th'}
    <div class="deliverable-list">
      {#each [
        { num: '01', title: 'เอกสาร Positioning', desc: 'คุณคือใคร คุณช่วยใคร แก้ปัญหาอะไร และทำไมใครควรสนใจ ไม่ต้องคิดว่า "ฉันช่วยทุกคนได้ทุกอย่าง" อีกต่อไป' },
        { num: '02', title: '30 ไอเดียคอนเทนต์', desc: 'มุมมองที่ตรงกับ Pain ของผู้ซื้อจริงๆ ไม่ใช่ Engagement Bait อันนึงต่อแต่ละขั้นของ Customer Journey ของคุณ' },
        { num: '03', title: 'เทมเพลต Hook ไวรัล', desc: '10 โครงสร้าง Hook ที่เวิร์คกับ Niche ของคุณ ตั้งแต่ Open Loop, Pattern Interrupt ฟอร์แมตเฉพาะ Founder เติมช่องว่างแล้วใช้ได้เลย' },
        { num: '04', title: 'เวิร์คโฟลว์ Short-form', desc: 'จากความคิดดิบๆ ถึงคลิปที่โพสต์ไปแล้วในไม่ถึง 30 นาที อัด, ตัดต่อ, ใส่แคปชั่น, ตั้งเวลา — วางระบบทั้งหมด' },
        { num: '05', title: 'AI Tool Stack', desc: 'เครื่องมือ AI ที่ผมใช้จริงในการคิด, ดราฟต์, ตัดต่อ และตั้งเวลา รวม Prompt ที่ปรับแล้วสำหรับคอนเทนต์ Founder' },
        { num: '06', title: 'ระบบโพสต์', desc: 'จังหวะรายสัปดาห์ การกระทำรายวัน และกลยุทธ์ Batching ไม่ต้องคิดว่า "วันนี้ควรโพสต์อะไร" คุณรู้ว่าอะไรปล่อยเมื่อไหร่แน่นอน' },
        { num: '07', title: 'ตัวเลือก: คลิปตัดต่อ 3 คลิป', desc: 'สำหรับ Tier Sprint ผมตัดต่อคลิปแรก 3 คลิปให้คุณดู คุณจะได้เห็นว่า "เสร็จแล้ว" หน้าตาเป็นอย่างไรก่อนทำเอง' }
      ] as item}
        <div class="deliverable-row">
          <span class="del-num">{item.num}</span>
          <div>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        </div>
      {/each}
    </div>
  {:else}
    <div class="deliverable-list">
      {#each [
        { num: '01', title: 'Positioning Document', desc: 'Who you are, who you serve, what problem you solve, and why anyone should care. No more "I help everyone with everything."' },
        { num: '02', title: '30 Content Ideas', desc: 'Angles that map to real buyer pain, not engagement bait. Each one tied to a stage of your customer journey.' },
        { num: '03', title: 'Viral Hook Templates', desc: '10 hook structures that work for your niche. Open loops, pattern interrupts, and founder-specific formats. Fill in the blanks.' },
        { num: '04', title: 'Short-form Workflow', desc: 'From raw thought to published clip in under 30 minutes. Recording, editing, captioning, scheduling — all mapped out.' },
        { num: '05', title: 'AI Tool Stack', desc: 'The exact AI tools I use to ideate, draft, edit, and schedule. Plus prompts that are already tuned for founder content.' },
        { num: '06', title: 'Posting System', desc: 'Weekly cadence, daily actions, and batching strategy. No more "I should post today." You know exactly what goes out when.' },
        { num: '07', title: 'Optional: 3 Edited Clips', desc: 'For Sprint tier, I personally edit your first 3 clips so you see what "done" looks like before you run it yourself.' }
      ] as item}
        <div class="deliverable-row">
          <span class="del-num">{item.num}</span>
          <div>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</section>

<!-- WHO FOR -->
<section class="who-for">
  {#if lang === 'th'}
    <div class="who-inner">
      <div class="who-col yes">
        <h3>คนที่ผมทำงานด้วย</h3>
        <ul>
          <li>&#9989; Indie Hackers ที่สร้างแบบ Public แต่เกลียดการตลาด</li>
          <li>&#9989; AI Founders ที่มี Product แต่ไม่มี Audience</li>
          <li>&#9989; Creator ที่ขาย Digital Products, Templates, หรือคอร์ส</li>
          <li>&#9989; Startup Founders ที่เขียนโค้ดเก่ง แต่ไม่รู้จะอธิบาย Product ของตัวเองยังไง</li>
          <li>&#9989; Tech People ที่รู้ว่า Product ตัวเองดี แต่ไม่มีใครรู้ว่ามันมีอยู่</li>
          <li>&#9989; Creator Anime/Game ที่มี Taste จริงจัง แต่ไม่มี Reach</li>
        </ul>
      </div>
      <div class="who-col no">
        <h3>ยังไม่ใช่ตอนนี้</h3>
        <ul>
          <li>&#10060; SME แบบดั้งเดิมที่ต้องการคนดูแล Social Media</li>
          <li>&#10060; ร้านอาหาร, คลินิก, หรือธุรกิจ Service ท้องถิ่น</li>
          <li>&#10060; คนที่อยากได้ Done-for-You ตลอดไปโดยไม่ต้องเรียนรู้</li>
          <li>&#10060; คนที่คิดว่า "คอนเทนต์มันง่าย" และไม่อยากพัฒนาตัวเอง</li>
        </ul>
      </div>
    </div>
  {:else}
    <div class="who-inner">
      <div class="who-col yes">
        <h3>People I work with</h3>
        <ul>
          <li>&#9989; Indie hackers building in public who hate marketing</li>
          <li>&#9989; AI tool founders with a product and zero audience</li>
          <li>&#9989; Creators selling digital products, templates, or courses</li>
          <li>&#9989; Startup founders who can code but cannot explain what they build</li>
          <li>&#9989; Tech people who know their product is good and nobody knows it</li>
          <li>&#9989; Anime/game creators with serious taste and zero reach</li>
        </ul>
      </div>
      <div class="who-col no">
        <h3>Not a fit (yet)</h3>
        <ul>
          <li>&#10060; Traditional SMEs looking for a social media manager</li>
          <li>&#10060; Restaurants, clinics, or local service businesses</li>
          <li>&#10060; Anyone who wants done-for-you forever without learning</li>
          <li>&#10060; People who believe "content is easy" and do not want to improve</li>
        </ul>
      </div>
    </div>
  {/if}
</section>

<!-- RESULTS -->
<section class="results">
  <div class="section-header" class:thai={lang === 'th'}>
    {#if lang === 'th'}
      <p class="eyebrow-dark">ทำไมผมถึงสอนได้</p>
      <h2>จาก 1M Views และรายได้ $100 ถึง $100K+ ใน 12 เดือน</h2>
      <p class="sub">ทุกอย่างที่ผมสอนมาจากการล้มเหลวแบบ Public แล้วแก้มันด้วยระบบ</p>
    {:else}
      <p class="eyebrow-dark">Why I can teach this</p>
      <h2>From 1M views and $100 revenue to $100K+ in 12 months.</h2>
      <p class="sub">Everything I teach came from failing publicly, then fixing it with systems.</p>
    {/if}
  </div>
  {#if lang === 'th'}
    <div class="result-grid">
      <div class="result-card">
        <div class="big">1M+</div>
        <p>ยอด Views บน TikTok จาก Voice Tool ที่ไม่มีใครเข้าใจ เพราะคอนเทนต์ของผมชัดมากว่าสำหรับใคร</p>
      </div>
      <div class="result-card">
        <div class="big">30,000+</div>
        <p>Users ที่ได้มาจาก Organic โดยไม่ใช้โฆษณา จากคอนเทนต์ที่แก้ Pain จริงของ Founder</p>
      </div>
      <div class="result-card">
        <div class="big">฿3M+</div>
        <p>รายได้ใน 12 เดือนหลังสร้างระบบ Distribution ที่ทำงานได้โดยไม่ต้องโพสต์ทุกวัน</p>
      </div>
      <div class="result-card">
        <div class="big">90%</div>
        <p>Profit Margin เพราะระบบทำงานจาก Templates, Automation, และ Leverage — ไม่ใช่จาก Working 12 ชั่วโมง</p>
      </div>
    </div>
  {:else}
    <div class="result-grid">
      <div class="result-card">
        <div class="big">1M+</div>
        <p>TikTok views on a voice tool nobody understood, because my content was clear about exactly who it was for.</p>
      </div>
      <div class="result-card">
        <div class="big">30,000+</div>
        <p>Users acquired without paid ads. Organic distribution from content that addressed real founder pain.</p>
      </div>
      <div class="result-card">
        <div class="big">฿3M+</div>
        <p>Revenue in 12 months after building a distribution system that worked without me posting every day.</p>
      </div>
      <div class="result-card">
        <div class="big">90%</div>
        <p>Profit margin because the system ran on templates, automation, and leverage — not 12-hour workdays.</p>
      </div>
    </div>
  {/if}
</section>

<!-- PRICING -->
<section class="pricing" id="pricing">
  <div class="section-header" class:thai={lang === 'th'}>
    {#if lang === 'th'}
      <p class="eyebrow-dark">เลือก Tier ของคุณ</p>
      <h2>สามวิธีในการติดตั้งระบบ Distribution</h2>
      <p class="sub">เริ่มจาก Audit อัพเกรดเมื่อพร้อม ไม่มีแรงกดดัน ไม่มีกลอุบาย Upsell</p>
    {:else}
      <p class="eyebrow-dark">Choose your tier</p>
      <h2>Three ways to get your distribution system running.</h2>
      <p class="sub">Start with an audit. Upgrade when ready. No pressure, no upsell tricks.</p>
    {/if}
  </div>
  <div class="pricing-grid">
    <!-- AUDIT -->
    <div class="price-card">
      <h3>Audit Call</h3>
      <div class="price-tag">
        <span class="thb">&#3647;2,999</span>
        <span class="usd">$87</span>
      </div>
      <p class="price-desc">60-minute 1-to-1. We review your current content, find the bottlenecks, and map exactly what needs to change.</p>
      <ul class="price-features">
        <li>&#9989; <strong>Content diagnosis</strong> — why your posts are not converting viewers into buyers</li>
        <li>&#9989; <strong>Positioning fix</strong> — who you actually serve and how to say it clearly</li>
        <li>&#9989; <strong>Growth map</strong> — 90-day content strategy tailored to your product</li>
        <li>&#9989; <strong>Recording + notes</strong> — you keep everything, no gatekeeping</li>
      </ul>
      <a class="btn-secondary wide" href="https://buy.stripe.com/cNi4gy7b4fr91p81u34ow0m" target="_blank" rel="noopener">Book audit call — &#3647;2,999</a>
    </div>

    <!-- SPRINT -->
    <div class="price-card popular">
      <div class="popular-badge">Most Popular</div>
      <h3>Distribution Sprint</h3>
      <div class="price-tag">
        <span class="thb">&#3647;13,797</span>
        <span class="usd">$399</span>
      </div>
      <p class="price-desc">7-day done-for-you setup. We build the full system together. You start publishing with purpose on Day 8.</p>
      <ul class="price-features">
        <li>&#9989; <strong>Everything in Audit</strong> — positioning + strategy first</li>
        <li>&#9989; <strong>30 content ideas</strong> — mapped to your customer journey</li>
        <li>&#9989; <strong>Viral hook templates</strong> — 10 structures custom-fit to your niche</li>
        <li>&#9989; <strong>Short-form workflow</strong> — 30-min from idea to published clip</li>
        <li>&#9989; <strong>AI tool stack + prompts</strong> — tuned for your exact content type</li>
        <li>&#9989; <strong>Posting system</strong> — weekly cadence, daily actions, batching plan</li>
        <li>&#9989; <strong>3 edited clips</strong> — done by me so you see what "done" looks like</li>
      </ul>
      <a class="btn-primary wide" href="https://buy.stripe.com/4gM3cuang5Qz2tcc8H4ow0n" target="_blank" rel="noopener">Book the sprint — &#3647;13,797</a>
    </div>

    <!-- PARTNER -->
    <div class="price-card">
      <h3>Growth Partner</h3>
      <div class="price-tag">
        <span class="thb">&#3647;51,797</span>
        <span class="usd">$1,497/mo</span>
      </div>
      <p class="price-desc">Monthly partnership for founders who have the system running and want me in their corner while they scale.</p>
      <ul class="price-features">
        <li>&#9989; <strong>Weekly strategy call</strong> — content review, hook improvement, trend spotting</li>
        <li>&#9989; <strong>Workflow tuning</strong> — your system gets faster as you grow</li>
        <li>&#9989; <strong>Hook optimization</strong> — we iterate on what is working, kill what is not</li>
        <li>&#9989; <strong>Distribution advisory</strong> — new platforms, new angles, new audiences</li>
        <li>&#9989; <strong>Priority DM access</strong> — questions between calls, same-day response</li>
        <li class="muted">&#10060; Not for: people who have not completed the Sprint</li>
      </ul>
      <a class="btn-secondary wide" href="https://buy.stripe.com/8x2dR82UOa6P3xggoX4ow0o" target="_blank" rel="noopener">Apply for partnership — &#3647;51,797/mo</a>
    </div>
  </div>
  {#if lang === 'th'}
    <p class="guarantee-badge">
      <span>&#128274;</span>
      <strong>รับประกัน "โชว์ระบบให้ฉันดู" 14 วัน</strong> &#8212; จบ Sprint ถ้าคุณไม่เชื่อว่านี่คือเซ็ตอัพคอนเทนต์ที่ชัดที่สุดที่คุณเคยมี คืนเงินทุกบาท ไม่ต้องกรอกฟอร์ม ไม่ต้องเถียง
    </p>
  {:else}
    <p class="guarantee-badge">
      <span>&#128274;</span>
      <strong>14-day "Show me the system" guarantee</strong> &#8212; Complete the Sprint. If you do not believe this is the clearest content setup you have ever had, every baht back. No forms, no arguments.
    </p>
  {/if}
</section>

<!-- FINAL CTA -->
<section class="final-cta">
  <div class="final-cta-inner" class:thai={lang === 'th'}>
    {#if lang === 'th'}
      <h2>เลิกโพสต์แบบสุ่มสี่สุ่มห้า เริ่มโพสต์แบบมีระบบ</h2>
      <a class="btn-primary huge" href="https://buy.stripe.com/4gM3cuang5Qz2tcc8H4ow0n" target="_blank" rel="noopener">จอง Distribution Sprint — &#3647;13,797</a>
      <p class="final-note">&#127481;&#127469; จ่ายด้วย PromptPay, Card, หรือ Bank Transfer ผ่าน Stripe อย่างปลอดภัย</p>
    {:else}
      <h2>Stop posting randomly. Start publishing with a system.</h2>
      <a class="btn-primary huge" href="https://buy.stripe.com/4gM3cuang5Qz2tcc8H4ow0n" target="_blank" rel="noopener">Book the Distribution Sprint — &#3647;13,797</a>
      <p class="final-note">&#127481;&#127469; Pay with PromptPay, Card, or Bank Transfer via secure Stripe checkout.</p>
    {/if}
  </div>
</section>

<footer class="footer">
  {#if lang === 'th'}
    <div class="footer-inner">
      <div>
        <a href="/" class="footer-logo">Founder SBKit</a>
        <p>สร้างโดยคนที่ได้ 1M Views แล้วรู้ว่า Views ไม่จ่ายเงิน ระบบ Distribution ที่แปลงเป็นยอดขายได้จริง</p>
      </div>
      <div class="footer-links">
        <div>
          <h5>Product</h5>
          <a href="/#framework">Founder SB Kit</a>
          <a href="/distribution">Distribution Sprint</a>
          <a href="/#pricing">ราคา</a>
        </div>
        <div>
          <h5>Company</h5>
          <a href="/#about">เกี่ยวกับ</a>
          <a href="mailto:support@foundersbkit.com">ติดต่อ</a>
        </div>
      </div>
    </div>
  {:else}
    <div class="footer-inner">
      <div>
        <a href="/" class="footer-logo">Founder SBKit</a>
        <p>Built by someone who got 1M views, then learned that views do not pay. The system behind distribution that actually converts.</p>
      </div>
      <div class="footer-links">
        <div>
          <h5>Product</h5>
          <a href="/#framework">Founder SB Kit</a>
          <a href="/distribution">Distribution Sprint</a>
          <a href="/#pricing">Pricing</a>
        </div>
        <div>
          <h5>Company</h5>
          <a href="/#about">About</a>
          <a href="mailto:support@foundersbkit.com">Contact</a>
        </div>
      </div>
    </div>
  {/if}
  <p class="footer-copy">CELESTI Co., Ltd. Bangkok, Thailand</p>
</footer>

<style>
  :global(html) { scroll-behavior: smooth; }
  :global(body) { margin: 0; }
  :global(*){ box-sizing: border-box; }

  /* ===== HERO ===== */
  .hero {
    min-height: 100vh;
    background: #0d0d0d;
    color: #fff;
    display: flex;
    flex-direction: column;
    padding: 0;
    position: relative;
    overflow: hidden;
  }
  .hero::before {
    content: '';
    position: absolute;
    top: -30%; right: -20%;
    width: 600px; height: 600px;
    background: radial-gradient(circle, rgba(212,245,60,0.08) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
  }
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }
  .logo { font-weight: 700; font-size: 16px; color: #D4F53C; text-decoration: none; letter-spacing: 0.5px; }
  .nav-links { display: flex; gap: 28px; }
  .nav-links a { color: #fff; text-decoration: none; font-size: 13.5px; font-weight: 500; opacity: 0.75; transition: opacity 0.2s; }
  .nav-links a:hover { opacity: 1; }
  .hero-inner { max-width: 720px; margin: auto; padding: 60px 32px 100px; text-align: center; }
  .eyebrow { text-transform: uppercase; font-size: 12px; font-weight: 600; letter-spacing: 2px; color: #D4F53C; margin: 0 0 16px; }
  .hero h1 {
    font-family: 'Instrument Serif', Georgia, 'Times New Roman', serif;
    font-weight: 600;
    font-size: clamp(32px, 5.5vw, 64px);
    line-height: 1.08;
    letter-spacing: -2px;
    margin: 0 0 24px;
    color: #fff;
  }
  .hero-sub { font-size: 20px; font-weight: 500; color: rgba(255,255,255,0.75); margin: 0 0 12px; line-height: 1.5; }
  .hero-sub2 { font-size: 17px; font-weight: 400; color: rgba(255,255,255,0.55); margin: 0 0 36px; line-height: 1.6; }
  .hero-cta { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; margin-bottom: 28px; }
  .btn-primary {
    display: inline-block;
    background: #D4F53C; color: #0d0d0d;
    font-size: 15px; font-weight: 700;
    padding: 16px 28px; border-radius: 12px;
    text-decoration: none; transition: transform 0.2s, box-shadow 0.2s;
    border: none; cursor: pointer;
  }
  .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(212,245,60,0.25); }
  .btn-ghost {
    display: inline-block;
    background: transparent;
    color: #fff;
    font-size: 15px; font-weight: 600;
    padding: 16px 28px; border-radius: 12px;
    border: 1px solid rgba(255,255,255,0.2);
    text-decoration: none;
    transition: background 0.2s;
    cursor: pointer;
  }
  .btn-ghost:hover { background: rgba(255,255,255,0.05); }
  .hero-proof { font-size: 14px; color: rgba(255,255,255,0.45); margin-top: 8px; }
  .hero-proof strong { color: rgba(255,255,255,0.75); font-weight: 600; }

  .btn-secondary {
    display: inline-block;
    background: transparent; color: #0d0d0d;
    font-size: 15px; font-weight: 700;
    padding: 14px 24px; border-radius: 12px;
    border: 2px solid rgba(22,22,22,0.08);
    text-decoration: none; text-align: center;
    transition: background 0.2s;
    cursor: pointer;
  }
  .btn-secondary:hover { background: rgba(22,22,22,0.04); }
  .btn-secondary.wide { width: 100%; }
  .btn-primary.wide { width: 100%; text-align: center; }
  .btn-primary.huge { font-size: 17px; padding: 20px 36px; border-radius: 14px; }

  /* ===== SECTIONS ===== */
  .section-header { text-align: center; margin-bottom: 56px; max-width: 640px; margin-left: auto; margin-right: auto; }
  .eyebrow-dark { text-transform: uppercase; font-size: 12px; font-weight: 600; letter-spacing: 2px; color: #D4F53C; background: rgba(212,245,60,0.1); display: inline-block; padding: 6px 16px; border-radius: 999px; margin: 0 0 16px; }
  .section-header h2 {
    font-family: 'Instrument Serif', Georgia, 'Times New Roman', serif;
    font-weight: 600;
    font-size: clamp(28px, 4.5vw, 48px);
    line-height: 1.15;
    letter-spacing: -1.5px;
    margin: 0 0 16px;
  }
  .section-header .sub { font-size: 17px; color: #555; line-height: 1.6; margin: 0; }

  /* ===== WHAT IS ===== */
  .what-is { padding: 100px 24px; background: #FAF9F6; }
  .what-is h2 { color: #161616; }
  .diff-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; max-width: 960px; margin: 0 auto; }
  .diff-card { background: #fff; border: 1px solid rgba(22,22,22,0.06); border-radius: 20px; padding: 32px 28px; }
  .diff-card .icon { font-size: 24px; margin-bottom: 12px; }
  .diff-card h4 { font-size: 18px; font-weight: 700; margin: 0 0 10px; letter-spacing: -0.3px; }
  .diff-card p { font-size: 14.5px; color: #444; line-height: 1.6; margin: 0; }
  .diff-card.yes { border-color: rgba(212,245,60,0.4); background: rgba(212,245,60,0.04); }
  .diff-card.yes .icon { color: #D4F53C; }

  /* ===== DELIVERABLES ===== */
  .deliverables { padding: 100px 24px; background: #fff; }
  .deliverable-list { max-width: 800px; margin: 0 auto; }
  .deliverable-row { display: flex; gap: 24px; padding: 28px 0; border-bottom: 1px solid rgba(22,22,22,0.05); }
  .deliverable-row:last-child { border-bottom: none; }
  .del-num { font-size: 32px; font-weight: 800; color: #D4F53C; line-height: 1; min-width: 56px; letter-spacing: -1px; }
  .deliverable-row h4 { font-size: 18px; font-weight: 700; margin: 0 0 6px; }
  .deliverable-row p { font-size: 15px; color: #555; line-height: 1.6; margin: 0; }

  /* ===== WHO FOR ===== */
  .who-for { padding: 80px 24px; background: #0d0d0d; }
  .who-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; max-width: 900px; margin: 0 auto; }
  .who-col { color: #fff; }
  .who-col h3 { font-size: 20px; font-weight: 700; margin: 0 0 20px; letter-spacing: -0.3px; }
  .who-col ul { list-style: none; padding: 0; margin: 0; }
  .who-col li { font-size: 15px; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.08); }
  .who-col li:last-child { border-bottom: none; }
  .who-col.yes li { color: rgba(255,255,255,0.85); }
  .who-col.no li { color: rgba(255,255,255,0.5); }
  .who-col.no h3 { color: rgba(255,255,255,0.5); }

  /* ===== RESULTS ===== */
  .results { padding: 100px 24px; background: #FAF9F6; }
  .results h2 { color: #161616; }
  .result-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; max-width: 1000px; margin: 0 auto; }
  .result-card { background: #fff; border-radius: 20px; padding: 32px 24px; text-align: center; border: 1px solid rgba(22,22,22,0.05); }
  .result-card .big { font-size: 44px; font-weight: 800; color: #161616; letter-spacing: -1.5px; line-height: 1.15; margin-bottom: 10px; }
  .result-card p { font-size: 14px; color: #555; line-height: 1.5; margin: 0; }

  /* ===== PRICING ===== */
  .pricing { padding: 100px 24px; background: #FAF9F6; }
  .pricing-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; max-width: 1100px; margin: 0 auto 32px; }
  .pricing h2 { color: #161616; }
  .price-card { background: #fff; border: 1px solid rgba(22,22,22,0.08); border-radius: 20px; padding: 36px 28px; position: relative; transition: transform 0.2s; }
  .price-card:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(0,0,0,0.06); }
  .price-card.popular { border: 2px solid #D4F53C; }
  .popular-badge { position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: #D4F53C; color: #161616; padding: 6px 18px; border-radius: 999px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; }
  .price-card h3 { font-size: 20px; font-weight: 700; margin: 0 0 12px; }
  .price-tag { margin-bottom: 8px; }
  .price-tag .thb { display: block; font-size: 40px; font-weight: 800; letter-spacing: -1.5px; line-height: 1.1; }
  .price-tag .usd { display: block; font-size: 14px; color: #888; margin-top: 4px; }
  .price-desc { font-size: 14.5px; color: #666; margin: 0 0 24px; line-height: 1.5; }
  .price-features { list-style: none; padding: 0; margin: 0 0 24px; }
  .price-features li { font-size: 13.5px; padding: 8px 0; border-bottom: 1px solid rgba(22,22,22,0.05); line-height: 1.55; }
  .price-features li:last-child { border-bottom: none; }
  .price-features li strong { font-weight: 600; color: #161616; }
  .price-features li.muted { color: #888; font-size: 13px; }
  .guarantee-badge { text-align: center; background: rgba(102,126,234,0.04); border: 1px solid rgba(102,126,234,0.1); border-radius: 16px; padding: 20px 28px; max-width: 720px; margin: 0 auto; font-size: 14px; color: #555; line-height: 1.6; }
  .guarantee-badge span { font-size: 20px; margin-right: 6px; vertical-align: middle; }

  /* ===== FINAL CTA ===== */
  .final-cta { padding: 120px 24px; background: #0d0d0d; text-align: center; }
  .final-cta h2 { font-family: 'Instrument Serif', Georgia, 'Times New Roman', serif; font-weight: 600; font-size: clamp(28px, 4.5vw, 48px); color: #fff; line-height: 1.15; letter-spacing: -1.5px; margin: 0 0 36px; }
  .final-cta-inner { max-width: 640px; margin: 0 auto; }
  .final-note { font-size: 14px; color: rgba(255,255,255,0.5); margin-top: 24px; }

  /* ===== FOOTER ===== */
  .footer { background: #0d0d0d; color: rgba(255,255,255,0.5); padding: 48px 24px 24px; border-top: 1px solid rgba(255,255,255,0.06); }
  .footer-inner { display: flex; justify-content: space-between; max-width: 1100px; margin: 0 auto 32px; gap: 48px; }
  .footer-logo { font-weight: 700; font-size: 16px; color: #fff; text-decoration: none; display: block; margin-bottom: 12px; }
  .footer-inner p { font-size: 14px; line-height: 1.5; max-width: 320px; margin: 0; }
  .footer-links { display: flex; gap: 64px; }
  .footer-links h5 { color: rgba(255,255,255,0.25); font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 16px; }
  .footer-links a { display: block; color: rgba(255,255,255,0.7); text-decoration: none; font-size: 14.5px; padding: 6px 0; }
  .footer-links a:hover { color: #fff; }
  .footer-copy { text-align: center; font-size: 13px; color: rgba(255,255,255,0.25); margin: 0; }

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
  .thai .eyebrow { letter-spacing: 0.5px; }
  .thai .section-header .sub { font-size: 16px; }

  /* ===== RESPONSIVE ===== */
  @media (max-width: 920px) {
    .pricing-grid { grid-template-columns: 1fr; }
    .result-grid { grid-template-columns: 1fr 1fr; }
    .who-inner { grid-template-columns: 1fr; }
  }
  @media (max-width: 768px) {
    nav { padding: 16px 24px; flex-wrap: wrap; gap: 12px; }
    .nav-links { gap: 20px; }
    .hero-inner { padding: 40px 24px 80px; }
    .hero h1 { font-size: clamp(28px, 9vw, 48px); }
    .hero-sub { font-size: 18px; }
    .hero-sub2 { font-size: 15.5px; }
    .diff-grid { grid-template-columns: 1fr; }
    .deliverable-row { flex-direction: column; gap: 8px; }
    .del-num { font-size: 24px; min-width: auto; }
    .result-grid { grid-template-columns: 1fr; }
    .pricing { padding: 64px 24px; }
    .price-card { padding: 28px 20px; }
    .price-card h3 { font-size: 18px; }
    .price-tag .thb { font-size: 32px; }
    .price-features li { font-size: 13px; padding: 6px 0; }
    .section-header h2 { font-size: clamp(26px, 8vw, 40px); }
    .section-header .sub { font-size: 15.5px; }
    .guarantee-badge { padding: 16px 20px; font-size: 13px; }
    .footer-inner { flex-direction: column; gap: 24px; }
    .footer-links { gap: 32px; }
  }
  @media (max-width: 480px) {
    .hero-inner { padding: 32px 24px 60px; }
    .hero h1 { font-size: clamp(26px, 9vw, 40px); letter-spacing: -1px; }
    .hero-sub { font-size: 16px; }
    .hero-sub2 { font-size: 14px; }
    .btn-primary, .btn-ghost { font-size: 14px; padding: 14px 20px; width: 100%; }
    .hero-cta { flex-direction: column; gap: 12px; }
    .eyebrow { font-size: 11px; }
    .section-header { margin-bottom: 36px; }
    .what-is, .deliverables, .results { padding: 64px 16px; }
    .diff-card { padding: 24px 20px; }
    .diff-card h4 { font-size: 16px; }
    .diff-card p { font-size: 13.5px; }
    .deliverable-row { padding: 20px 0; }
    .deliverable-row h4 { font-size: 16px; }
    .deliverable-row p { font-size: 13.5px; }
    .who-for { padding: 64px 16px; }
    .who-col h3 { font-size: 18px; }
    .who-col li { font-size: 14px; padding: 8px 0; }
    .result-card { padding: 24px 20px; }
    .result-card .big { font-size: 36px; }
    .pricing { padding: 64px 12px; }
    .pricing-grid { gap: 12px; }
    .price-card { padding: 24px 16px; }
    .price-card h3 { font-size: 17px; margin-bottom: 8px; }
    .price-tag .thb { font-size: 28px; }
    .price-tag .usd { font-size: 13px; }
    .price-desc { font-size: 13px; margin-bottom: 16px; }
    .price-features li { font-size: 12.5px; padding: 5px 0; line-height: 1.5; }
    .guarantee-badge { padding: 14px 16px; }
    .final-cta { padding: 80px 16px; }
    .final-cta h2 { font-size: clamp(24px, 8vw, 36px); }
    .btn-primary.huge { font-size: 15px; padding: 16px 24px; }
    .footer-inner { gap: 16px; }
    .footer-links { flex-wrap: wrap; gap: 24px; }
  }
</style>
