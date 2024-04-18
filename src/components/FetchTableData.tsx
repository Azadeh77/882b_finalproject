 import { sql } from "@vercel/postgres";

 async function getDataFromDatabase() 
 
 {
   const data = await sql`SELECT * FROM users`;
   return data;
 }

 export default getDataFromDatabase;