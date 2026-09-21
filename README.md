# SSP CENTRAL — Next.js + Supabase

Pwojè Next.js 14 (App Router, TypeScript) pou SSP CENTRAL. Tout done yo estoke
dirèkteman sou **Supabase** — pa gen `localStorage` ditou nan pwojè a.

## Estrikti

```
app/
  page.tsx              → Akèy (/)
  inscription/page.tsx   → Fòm enskripsyon (/inscription) — insert nan Supabase
  pdg/page.tsx            → Espas Admin (/pdg) — select + update nan Supabase
lib/
  supabase.ts             → Kliyan Supabase (kle piblik/anon sèlman)
supabase/
  001_inscriptions.sql     → SQL pou kreye tab "inscriptions" ak RLS policies
```

## 1. Enstale lokalman

```bash
npm install
npm run dev
```

Louvri http://localhost:3000

## 2. Varyab anviwònman

Fichye `.env.local` deja gen valè Supabase ou yo ladan l (URL + kle
anon/publishable). **Fichye sa a pa monte sou GitHub** (li nan `.gitignore`).

Si w bezwen chanje kle yo:

```
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxxx
```

⚠️ **Pa janm mete SERVICE_ROLE_KEY nan yon varyab `NEXT_PUBLIC_*`** — kle sa a
dwe rete sekrè, sèvè-sèlman. Pwojè sa a itilize sèlman kle anon/publishable la,
ki fèt pou ekspoze kote kliyan an (browser).

## 3. Baz done Supabase

Ale nan Supabase → SQL Editor → kole kontni `supabase/001_inscriptions.sql` la
→ Run. Sa kreye tab `inscriptions` la ak règ sekirite (RLS) debaz.

## 4. Monte sou GitHub

```bash
git init
git add .
git commit -m "SSP CENTRAL - Next.js + Supabase"
git branch -M main
git remote add origin https://github.com/<itilizatè>/<depo>.git
git push -u origin main
```

`.env.local` **PAP** monte sou GitHub (li pwoteje pa `.gitignore`) — se nòmal
e se sa nou vle.

## 5. Deplwaye sou Vercel

1. Ale sou vercel.com → "Add New Project" → chwazi depo GitHub la
2. Anvan w deplwaye, ale nan **Settings → Environment Variables** epi ajoute:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   (menm valè ki nan `.env.local` ou a)
3. Klike **Deploy**

## Nòt sekirite enpòtan

Paj `/pdg` la pou kounye a **pa gen okenn vrè otantifikasyon** dèyè l — nenpòt
moun ki gen lyen an ka wè l epi valide kont. Policies RLS nan
`001_inscriptions.sql` la reflete sa (`to anon`, `using (true)`). Lè w pare
pou ajoute yon vrè sistèm login (Supabase Auth), n ap bezwen:

1. Aktive Supabase Auth
2. Chanje policies yo pou verifye wòl itilizatè a (egzanp: yon tab `profiles`
   ak yon kolòn `is_admin`)
3. Pwoteje paj `/pdg` la ak yon verifikasyon sesyon Supabase Auth
