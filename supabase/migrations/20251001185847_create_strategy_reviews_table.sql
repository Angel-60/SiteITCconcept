/*
  # Create Strategy Reviews Table

  1. New Tables
    - `strategy_reviews`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text, not null) - Client's full name
      - `email` (text, not null) - Client's email address
      - `problem_description` (text, not null) - Description of their business challenge
      - `created_at` (timestamptz) - Timestamp of submission
      - `status` (text) - Review status (pending, in_progress, completed)
  
  2. Security
    - Enable RLS on `strategy_reviews` table
    - Add policy for inserting reviews (public can submit)
    - Add policy for admin viewing (authenticated users only)
  
  3. Notes
    - Public users can submit strategy review requests
    - Only authenticated admin users can view submissions
    - Default status is 'pending' for new submissions
*/

CREATE TABLE IF NOT EXISTS strategy_reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  problem_description text NOT NULL,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE strategy_reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit strategy review"
  ON strategy_reviews
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all reviews"
  ON strategy_reviews
  FOR SELECT
  TO authenticated
  USING (true);