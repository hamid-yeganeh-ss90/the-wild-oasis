import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://gcubtwcorjhppqjzdjvq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdjdWJ0d2NvcmpocHBxanpkanZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg2NTY0NDUsImV4cCI6MjA0NDIzMjQ0NX0.0l7E_8-_svf1pqHSXVYFVc5U8leKe3Giw0F_xxNihhE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
