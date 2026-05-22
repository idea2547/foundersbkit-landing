# 🚀 Founder SB Kit — Cloudflare Pages Deployment Guide

**Date:** May 22, 2026  
**Status:** ✅ Built + Ready | ⏳ Needs Final Cloudflare Connection

---

## Where We Are

**What's Done:**
- ✅ Standalone SvelteKit project created at `~/Documents/GitHub/foundersbkit-landing/`
- ✅ Founder OS-inspired design built (warm cream, lime CTAs, Poppins, dark footer)
- ✅ Sales page with hero, differentiation, social proof, framework grid, pricing, FAQ
- ✅ Built successfully with Cloudflare adapter
- ✅ GitHub repo created: `https://github.com/idea2547/foundersbkit-landing`
- ✅ Git remote configured

**What's Blocking:**
1. **GitHub push** timed out because first commit includes 3,342 node_modules files
2. **Cloudflare deploy** requires a Pages project to exist first (wrangler cannot create it via API in this account)

---

## Step 1 — Clean Your Git (2 mins)

Run this in your terminal to reset to a clean repo (only source code, no node_modules):

```bash
cd ~/Documents/GitHub/foundersbkit-landing
git checkout --orphan clean-main
git rm -rf .
echo "node_modules" > .gitignore
echo ".svelte-kit" >> .gitignore
echo ".DS_Store" >> .gitignore
echo "*.log" >> .gitignore
git add .gitignore src/ package.json svelte.config.js vite.config.js wrangler.json
git commit -m "Clean initial commit — no node_modules"
git branch -D main
git branch -m main
```

Then push:

```bash
git push origin main -u --force-with-lease
```

---

## Step 2 — Connect to Cloudflare Pages (5 mins)

1. Go to **https://dash.cloudflare.com**
2. Sign in with `ideapakpaphon@gmail.com`
3. Navigate to **Pages** → **Create a project**
4. Choose **"Connect to Git"**
5. Select the repo: **`idea2547/foundersbkit-landing`**
6. Configure:
   - **Build command:** `npm install && npm run build`
   - **Build output directory:** `.svelte-kit/cloudflare` *(critical — Cloudflare adapter outputs here)*
   - **Root directory:** `/`
   - **Node version:** `20` (or whatever your local node version is). To check: `node -v`
7. Click **Save and Deploy**

Cloudflare will build and deploy automatically on every future git push.

---

## Step 3 — Custom Domain (Optional)

After first deploy:
1. In Cloudflare Pages dashboard, go to your `foundersbkit-landing` project
2. Click **Custom domains**
3. Add `foundersbkit.com` (if you own it) or a free `*.pages.dev` subdomain
4. Cloudflare will handle SSL automatically

---

## Alternative: Direct Wrangler Deploy (If Project Already Exists)

If you create a Pages project manually in the dashboard (or already have one):

```bash
cd ~/Documents/GitHub/foundersbkit-landing
npm run build
npx wrangler pages deploy .svelte-kit/cloudflare/ \
  --project-name foundersbkit-landing \
  --branch main
```

This bypasses the Git build and uploads your current local build instantly.

**Current blocker:** Wrangler found your account (`ideapakpaphon@gmail.com`) but returned `API error 8000000` when trying to create a Pages project. This is usually a permission/plan issue on Cloudflare's side. Creating via dashboard (Step 2 above) avoids this.

---

## Files You Have

| File | Purpose |
|------|---------|
| `src/routes/+page.svelte` | The full sales page |
| `src/app.html` | HTML shell with Google Fonts |
| `svelte.config.js` | Cloudflare adapter config |
| `vite.config.js` | Vite build config |
| `wrangler.json` | Worker compatibility settings |
| `package.json` | Deps + scripts |

---

## Next Steps Summary

1. Run the clean-git commands above (2 min)
2. Push to GitHub (1 min)
3. Open Cloudflare Pages dashboard → Create project (5 min)
4. Buy domain `foundersbkit.com` (when ready)
5. Connect custom domain in dashboard

**Questions?** The live code is at `~/Documents/GitHub/foundersbkit-landing/`

Want me to handle any of these steps manually if you provide a Cloudflare API Token?
# Deploy verification
