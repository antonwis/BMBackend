import { Pool, QueryArrayConfig } from "pg";

// PostgreSQL database connection info
const pool = new Pool({
    host: "localhost",
    port: 5432,
    user: "user",
    max: 20,
    password: "123456",
    database: "metal",
});

export = pool;