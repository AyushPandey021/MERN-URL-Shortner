import { createShortUrlWithoutUser } from "../services/short-url-service.js"
import wrapAsync from "../utils/tryCatchWapper.js"


export const createShortUrl = wrapAsync(async (req, res) => {



  const { url } = req.body
  if(req.user){
  const shortUrl = await createShortUrlWithoutUser(url,req.user._id)

  // res.send(process.env.APP_URL + shortUrl)
  }else{
    const shortUrl = await createShortUrlWithoutUser(url)
  }
  res.status(200).json({ shortUrl: process.env.APP_URL + shortUrl })
}
)

export const redirectFromShortUrl = wrapAsync(async (req, res) => {

  const { id } = req.params
  const url = await findUrlFromShortUrl(id);
  if (!url) throw new Error("Short URL not found")
  res.redirect(url.full_url)

})

export const createCustomShortUrl= wrapAsync(async (req,res)=>{
  const {url,customUrl} = req.body
  const shortUrl = await createShortUrlWithoutUser(url,customUrl)
  res.status(200).json({shortUrl : process.env.APP_URL  + shortUrl})
})