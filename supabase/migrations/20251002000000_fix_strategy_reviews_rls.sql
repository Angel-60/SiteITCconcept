/*
  # Fix Strategy Reviews RLS Policies

  1. Changes
    - Drop existing restrictive INSERT policy
    - Create new permissive INSERT policy that allows public submissions
    - Ensure anonymous users can submit forms without authentication

  2. Security
    - Public users (anon role) can insert new strategy review submissions
    - This is safe as we only allow INSERT operations
    - Reading data still requires authentication

  3. Notes
    - This fixes the "Failed to submit" error by allowing unauthenticated users to submit forms
    - The policy name has been updated for clarity
*/

DROP POLICY IF EXISTS "Anyone can submit strategy review" ON strategy_reviews;

CREATE POLICY "Public can submit strategy reviews"
  ON strategy_reviews
  FOR INSERT
  WITH CHECK (true);
