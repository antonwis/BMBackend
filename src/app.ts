import express from "express";
import cors from 'cors';
import bodyParser from "body-parser"
import apiRouter from "./routes/bands"
import apiRouter2 from "./routes/scraper"

const app = express();

app.use(cors());
app.use(bodyParser.json())
app.get("/", (req, res, next) => {
  res.send("Black Metal World Map Back-end");
});
app.use('/api', apiRouter);
app.use('/api', apiRouter2);
app.listen(5000, () => console.log("server running"));
