// MyKost - Supabase Configuration

const SUPABASE_URL = 'https://dctpdczseoeurmmutskg.supabase.co';

const SUPABASE_ANON_KEY = 'sb_publishable_-5dPvjTmRxjt8t1toYgZbg_Avgj9-MD';

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

console.log('Supabase MyKost berhasil diinisialisasi');
