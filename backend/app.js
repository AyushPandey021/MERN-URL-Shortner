import express from "express"
// import cors from "cors"
import { connectDB } from "./src/config/mongo.config.js";

import ShortUrl from "./src/routes/shortUrl.route.js";

import dotenv from "dotenv"
dotenv.config("./.env")

connectDB();

const app = express()
app.use(express.json())


app.use(express.urlencoded({ extended: true }))
app.use("/api/create", ShortUrl)















// listen
app.listen(5000, () => {
  connectDB()
  console.log(" App is runing⏭️ ");

})

//GET - Redirection
//Post -Create Short URL


// 40min