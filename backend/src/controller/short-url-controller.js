import { createShortUrlWithoutUser } from "../services/short-url-service.js"
import wrapAsync from "../utils/tryCatchWapper.js"


export const createShortUrl = wrapAsync(async (req, res, next) => {



  const { url } = req.body
  const shortUrl = await createShortUrlWithoutUser(url)
  res.status(403).json({shortUrl : process.env.APP_URL + shortUrl})
  // res.send(process.env.APP_URL + shortUrl)

}
)

export const redirectFromShortUrl = wrapAsync(async (req, res) => {

  const { id } = req.params
  const url = await findUrlFromShortUrl(id);
  if (!url) throw new Error("Short URL not found")
  res.redirect(url.full_url)

})