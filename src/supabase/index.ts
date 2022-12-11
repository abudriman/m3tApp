import { createClient } from '@supabase/supabase-js'

const options = {
    db: {
        schema: 'public',
    },
    auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true
    },
    global: {
        headers: { 'x-my-custom-header': 'my-app-name' },
    },
}
const supabaseUrl = process.env.VUE_APP_SUPABASE_URL as string;
const supabaseAnonKey = process.env.VUE_APP_SUPABASE_KEY as string;
const supabase = createClient(supabaseUrl, supabaseAnonKey, options)

export default supabase