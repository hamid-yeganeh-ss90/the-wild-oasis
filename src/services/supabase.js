import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://jgkjnftqsershrqyykvi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impna2puZnRxc2Vyc2hycXl5a3ZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQyNDgxMzIsImV4cCI6MjA2OTgyNDEzMn0.seSZm8bFB_eUAAl07_0S8Z4DetK40ITIr__X9ELJKfU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
