/*
  # Fix Strategy Reviews RLS Policies

  1. Changes
    - Drop all existing policies on strategy_reviews
    - Create new permissive INSERT policy for anonymous users
    - Create new SELECT policy for authenticated users
    - Ensure public users can submit forms without authentication

  2. Security
    - Anonymous users (anon role and public) can insert new strategy review submissions
    - Only authenticated users can view submissions
    - This is safe as we only allow INSERT operations for public

  3. Notes
    - This fixes the "Failed to submit" error by allowing unauthenticated users to submit forms
    - Uses explicit role targeting for anon users
*/

-- Drop all existing policies
DROP POLICY IF EXISTS "Anyone can submit strategy review" ON strategy_reviews;
DROP POLICY IF EXISTS "Public can submit strategy reviews" ON strategy_reviews;
DROP POLICY IF EXISTS "Authenticated users can view all reviews" ON strategy_reviews;

-- Create new INSERT policy for anonymous users (public submissions)
CREATE POLICY "Allow anonymous insert"
  ON strategy_reviews
  FOR INSERT
  TO anon, public
  WITH CHECK (true);

-- Create new SELECT policy for authenticated users only
CREATE POLICY "Allow authenticated select"
  ON strategy_reviews
  FOR SELECT
  TO authenticated
  USING (true);
