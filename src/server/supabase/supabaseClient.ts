/**
 * lib/supabaseClient.js
 * Helper to initialize the Supabase client.
 */

import { env } from "@/src/env.mjs";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
