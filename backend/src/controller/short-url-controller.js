import { createShortUrlService } from "../services/short-url-service.js"


export const createShortUrl = async (req, res) => {
  const { url } = req.body
  const shortUrl = await createShortUrlService(url)
  res.send(process.env.APP_URL + shortUrl)
  // try {
  //   await req.db.collection("short_urls").inserOne({
  //     url,
  //     shortUrl
  //   })
  //   res.status(201).json({
  //     message: "Short URL created successfully",
  //     shortUrl: shortUrl
  //   })

  // } catch (error) {
  //   res.status(500).json({
  //     message: "Error creating short URL",
  //     error: error.message
  //   })

  // }

}