// Create products table using this migration
import { Sql } from 'postgres'; // Sql type from postgres: written in capital S

// OPERATION TO CREATE OUR TABLE
// function takes the parameter of our sql from connect, set it to the imported Sql
export async function up(sql: Sql) {
  // use sql parameter to create a function to create the table
  await sql`
    CREATE TABLE products (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      name varchar(30) NOT NULL,
      category varchar(30) NOT NULL,
      price integer NOT NULL,
      description varchar(500) NOT NULL
    )
  `;
}

// OPERATION TO REVERSE IT, REMOVING THE TABLE
export async function down(sql: Sql) {
  await sql`
    DROP TABLE products
  `;
}

// when we run the ley migration, the table is created when we run it up but when we run it down it will undo the operation.
// always run the postgres server, otherwise you'll get an error when running the migration operations.
