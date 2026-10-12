/*
# Create enquiries table for ZESH lead generation

1. New Tables
- `enquiries`
- `id` (uuid, primary key)
- `full_name` (text, not null) - name of the person enquiring
- `company_name` (text, nullable) - optional business name
- `email` (text, not null) - email address
- `phone` (text, not null) - phone number
- `enquiry_type` (text, not null) - type: general, product, retail, wholesale, distribution, bulk, other
- `message` (text, not null) - enquiry message body
- `status` (text, default 'new') - enquiry status for tracking
- `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `enquiries`.
- Allow anon + authenticated INSERT only (public can submit enquiries).
- No SELECT/UPDATE/DELETE for anon (enquiries are private to the business).
- Authenticated (admin) can SELECT/UPDATE/DELETE for enquiry management.

3. Notes
- This is a lead-generation form with no sign-in required for submitters.
- The enquiry form is public; reading/managing enquiries requires authentication.
*/

CREATE TABLE IF NOT EXISTS enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  company_name text,
  email text NOT NULL,
  phone text NOT NULL,
  enquiry_type text NOT NULL CHECK (enquiry_type IN ('general','product','retail','wholesale','distribution','bulk','other')),
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_enquiries" ON enquiries;
CREATE POLICY "anon_insert_enquiries"
ON enquiries FOR INSERT
TO anon, authenticated
WITH CHECK (true);

DROP POLICY IF EXISTS "auth_select_enquiries" ON enquiries;
CREATE POLICY "auth_select_enquiries"
ON enquiries FOR SELECT
TO authenticated
USING (true);

DROP POLICY IF EXISTS "auth_update_enquiries" ON enquiries;
CREATE POLICY "auth_update_enquiries"
ON enquiries FOR UPDATE
TO authenticated
USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "auth_delete_enquiries" ON enquiries;
CREATE POLICY "auth_delete_enquiries"
ON enquiries FOR DELETE
TO authenticated
USING (true);

CREATE INDEX IF NOT EXISTS idx_enquiries_created_at ON enquiries (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_enquiries_enquiry_type ON enquiries (enquiry_type);
CREATE INDEX IF NOT EXISTS idx_enquiries_status ON enquiries (status);