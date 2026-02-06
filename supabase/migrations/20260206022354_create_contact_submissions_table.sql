/*
  # Create Contact Submissions Table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Visitor's name
      - `email` (text) - Visitor's email address
      - `phone` (text) - Visitor's phone number
      - `message` (text) - Visitor's message
      - `submitted_at` (timestamptz) - Timestamp of submission
      - `ip_address` (text, optional) - IP address for spam tracking
      - `user_agent` (text, optional) - Browser info for spam tracking
      
  2. Security
    - Enable RLS on `contact_submissions` table
    - No public read access (admin only via service role)
    - Allow anonymous inserts (for form submissions)
    
  3. Indexes
    - Index on `submitted_at` for efficient querying by date
    - Index on `email` for duplicate checking
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL DEFAULT '',
  message text NOT NULL,
  submitted_at timestamptz DEFAULT now() NOT NULL,
  ip_address text,
  user_agent text
);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to insert (submit forms)
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only authenticated users (admin) can read submissions
CREATE POLICY "Only authenticated users can read submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_contact_submissions_submitted_at 
  ON contact_submissions(submitted_at DESC);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_email 
  ON contact_submissions(email);