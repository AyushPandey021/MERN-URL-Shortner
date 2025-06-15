import express from "express"
// import cors from "cors"
import { connectDB } from "./src/config/mongo.config.js";
import cors from "cors";
import ShortUrl from "./src/routes/shortUrl.route.js";

import dotenv from "dotenv"
import authRotes from "./src/routes/auth.routes.js"
import { redirectFromShortUrl } from "./src/controller/short-url-controller.js";
import { errorHandler } from "./src/utils/errorHandler.js";
dotenv.config("./.env")

connectDB();

const app = express()
app.use(express.json())
app.use(cors())
app.use(errorHandler)
app.use(express.urlencoded({ extended: true }))
app.use("/api/auth", authRotes)
app.use("/api/create", ShortUrl)
app.get("/:id", redirectFromShortUrl)















// listen
app.listen(3000, () => {
  connectDB()
  console.log(" App is runing⏭️ http://localhost:3000");

})
