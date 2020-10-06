import { Client } from "pg";

const client = new Client({
    host: "localhost",
    port: 5432,
    user: "user",
    password: "123456",
    database: "metal",
  });

export = client;