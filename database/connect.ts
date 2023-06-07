import 'server-only'; // 'poison' our code so we dont accidentally run it in the frontend
import { config } from 'dotenv-safe';
import postgres from 'postgres';

// config(); // run this in order to have access to environment variables
if (!process.env.FLY_IO) config();
// connection
export const sql = postgres({
  // this transforms everything to camelCase and all undefined value to null so it doesn't cause conflicts
  transform: {
    ...postgres.camel,
    undefined: null,
  },
});
