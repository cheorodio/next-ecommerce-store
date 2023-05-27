import { config } from 'dotenv-safe';
import postgres from 'postgres'; // to connect to the database first import postgres

config();

// to run sql query in the application
// sql is by default an async function, therefore needs to await this operation
// first define the database that we want to connect to, otherwise you'll get a PostgresError, this lives inside the (...). If this is not done, the database is going to connect to my system 'michelle'
const sql = postgres(); // postgres run as a function

// first query
console.log(
  await sql`
    SELECT * FROM products; `,
);

// FOR TESTING: to quit after making query (give back the command line)
await sql.end();
