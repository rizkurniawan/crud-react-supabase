import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "INSERT YOUR SUPABASE URL"
const supabaseAnonKey = "INSERT YOUR SUPABASE KEY"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
