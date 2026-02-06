/*
  # Fix Security Issues

  1. Changes
    - Drop unused index `idx_contact_submissions_email`
    - Replace overly permissive RLS policy with validation checks

  2. Security Improvements
    - RLS policy now validates required fields are not empty
    - Validates email contains @ symbol for basic format checking
    - Validates message has reasonable length (prevents empty or spam submissions)

  3. Performance
    - Removes unused index to reduce storage overhead and write overhead

  4. Notes
    - Auth DB connection strategy change requires dashboard/CLI configuration
*/

-- Drop the unused email index
DROP INDEX IF EXISTS idx_contact_submissions_email;

-- Replace the overly permissive INSERT policy with validation
DROP POLICY IF EXISTS "Anyone can submit contact form" ON contact_submissions;

CREATE POLICY "Anonymous users can submit valid contact forms"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (
    -- Ensure name is provided and not empty
    length(trim(name)) > 0 AND
    -- Ensure email is provided, not empty, and contains @ symbol
    length(trim(email)) > 0 AND
    email LIKE '%@%' AND
    -- Ensure message is provided and has reasonable length
    length(trim(message)) >= 10 AND
    length(message) <= 10000
  );
