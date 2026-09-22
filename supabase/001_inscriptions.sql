-- Tab "inscriptions" pou app Next.js SSP CENTRAL la.
-- Si tab la deja egziste ak lòt non kolòn, ajiste kòd la (app/inscription/page.tsx
-- ak app/pdg/page.tsx) pou matche, olye w chanje tab ki deja gen done ladan l.

create table if not exists public.inscriptions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  nom text not null,
  prenom text not null,
  email text,
  telephone text not null,
  type text not null default 'Membre',
  code_referent text,
  statut text not null default 'En attente de validation'
);

-- Row Level Security
alter table public.inscriptions enable row level security;

-- Nenpòt moun (ak kle anon/publishable la) ka kreye yon nouvo enskripsyon
drop policy if exists "Piblik ka enskri" on public.inscriptions;
create policy "Piblik ka enskri"
  on public.inscriptions for insert
  to anon
  with check (true);

-- Nenpòt moun ka LI tout enskripsyon yo (paj /pdg a itilize sa)
-- NÒT SEKIRITE: sa vle di lis la piblik pou kounye a. Si w vle kache l pou moun
-- ki pa Admin, n ap bezwen yon vrè sistèm otantifikasyon Supabase Auth pita,
-- ak yon policy ki verifye wòl itilizatè a olye "to anon".
drop policy if exists "Piblik ka li" on public.inscriptions;
create policy "Piblik ka li"
  on public.inscriptions for select
  to anon
  using (true);

-- Nenpòt moun ka modifye statut (paj /pdg a itilize sa pou "Valider")
-- MENM NÒT SEKIRITE a: pou kounye a, san Auth, nenpòt moun ki gen lyen /pdg a
-- ka valide yon kont. Ranfòse sa lè Auth ajoute.
drop policy if exists "Piblik ka modifye statut" on public.inscriptions;
create policy "Piblik ka modifye statut"
  on public.inscriptions for update
  to anon
  using (true)
  with check (true);
