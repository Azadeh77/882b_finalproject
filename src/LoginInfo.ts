import { VercelResponse } from '@vercel/node';
import { sql } from '@vercel/postgres';

export default async function handler(res: VercelResponse) {
    let result;
  try {
    // Execute SQL query to retrieve data from login_info table
    result = await sql`SELECT * FROM login_info`;
    const loginInfo = result.rows;
    console.log('Login info:', loginInfo);

    // Send JSON response with the retrieved data
    res.status(200).json(loginInfo);
  } catch (error) {
    console.error('Error retrieving login info:', error, 'Result:', result);
    res.status(500).json({ error: 'Internal server error' });
  }
}