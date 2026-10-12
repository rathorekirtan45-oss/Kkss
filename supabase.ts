import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type EnquiryType =
  | 'general'
  | 'product'
  | 'retail'
  | 'wholesale'
  | 'distribution'
  | 'bulk'
  | 'other';

export type Enquiry = {
  id: string;
  full_name: string;
  company_name: string | null;
  email: string;
  phone: string;
  enquiry_type: EnquiryType;
  message: string;
  status: string;
  created_at: string;
};

export type EnquiryInput = {
  full_name: string;
  company_name?: string;
  email: string;
  phone: string;
  enquiry_type: EnquiryType;
  message: string;
};
