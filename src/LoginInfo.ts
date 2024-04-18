import { VercelRequest, VercelResponse } from '@vercel/node';
import { sql } from '@vercel/postgres';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    // Execute SQL query to retrieve data from login_info table
    const result = await sql`SELECT * FROM login_info`;
    const loginInfo = result.rows;

    // Send JSON response with the retrieved data
    res.status(200).json(loginInfo);
  } catch (error) {
    console.error('Error retrieving login info:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}