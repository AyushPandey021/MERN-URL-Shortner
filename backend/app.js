import express from "express"
// import cors from "cors"
import { connectDB } from "./src/config/mongo.config.js";

import ShortUrl from "./src/routes/shortUrl.route.js";

import dotenv from "dotenv"

import { redirectFromShortUrl } from "./src/controller/short-url-controller.js";
import { errorHandler } from "./src/utils/errorHandler.js";
dotenv.config("./.env")

connectDB();

const app = express()
app.use(express.json())

app.use(errorHandler)
app.use(express.urlencoded({ extended: true }))
app.use("/api/create", ShortUrl)
app.get("/:id", redirectFromShortUrl)















// listen
app.listen(3000, () => {
  connectDB()
  console.log(" App is runing⏭️ http://localhost:3000");

})
