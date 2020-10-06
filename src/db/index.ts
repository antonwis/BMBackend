//import { Client } from "pg";
import { Pool, QueryArrayConfig } from "pg";
// PostgreSQL database infot
/*
const client = new Client({
    host: "localhost",
    port: 5432,
    user: "user",
    password: "123456",
    database: "metal",
  });
*/
const pool = new Pool({
    host: "localhost",
    port: 5432,
    user: "user",
    max: 20,
    password: "123456",
    database: "metal",
});
/*
export default {
    query: (text: QueryArrayConfig<any>, params: any) => pool.query(text, params)
}
*/
export = pool;