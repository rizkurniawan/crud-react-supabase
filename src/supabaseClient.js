import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://jsbtyumbhfnnmoiunfpf.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpzYnR5dW1iaGZubm1vaXVuZnBmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDk2MDU0MTMsImV4cCI6MTk2NTE4MTQxM30.KnFq2SskxDkpM71d4RLc_TevxTuVFf7IQge7s3WvtIs"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
