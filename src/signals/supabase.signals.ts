import { SupabaseClient, createClient } from "@supabase/supabase-js";
import { signal } from "@preact/signals-react";

const { REACT_APP_SUPABASE_URL, REACT_APP_SUPABASE_ANON_KEY } = process.env;

export const supabase = signal<SupabaseClient>(
  createClient(
    REACT_APP_SUPABASE_URL as string,
    REACT_APP_SUPABASE_ANON_KEY as string
  )
);