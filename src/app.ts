import express from "express";
//import { Client } from "pg";
import apiRouter from "./routes/bands"

const app = express();


/*
const client = new Client({
  host: "localhost",
  port: 5432,
  user: "user",
  password: "123456",
  database: "metal",
});

client
  .connect()
  .then(() => console.log("connected"))
  .catch((err) => console.error("connection error", err.stack));

  
client
  .query("SELECT * FROM bands WHERE country ='Iceland'")
  .then((result) => console.log(result.rows))
  .catch((e) => console.error(e.stack))
  .then(() => client.end());
*/

app.get("/", (req, res, next) => {
  res.send("hello");
});
app.use('/api', apiRouter);
app.listen(5000, () => console.log("server running"));
