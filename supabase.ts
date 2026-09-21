import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

if (!supabaseUrl || !supabaseAnonKey) {
  // Sa a ap parèt nan console si varyab anviwònman yo pa konfigire byen
  // (sou Vercel: Settings > Environment Variables)
  console.warn(
    'NEXT_PUBLIC_SUPABASE_URL oswa NEXT_PUBLIC_SUPABASE_ANON_KEY pa defini. ' +
      'Verifye .env.local an lokal, oswa Environment Variables sou Vercel.'
  )
}

// Kliyan Supabase piblik — itilize SÈLMAN kle anon/publishable la.
// PA JANM mete SERVICE_ROLE_KEY isit la, li ta ekspoze kote nenpòt moun ka wè l.
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
