import express from "express";
import cors from 'cors';
import apiRouter from "./routes/bands"

const app = express();

app.use(cors());
app.get("/", (req, res, next) => {
  res.send("Black Metal World Map Back-end");
});
app.use('/api', apiRouter);
app.listen(5000, () => console.log("server running"));
