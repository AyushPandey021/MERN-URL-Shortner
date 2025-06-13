import { createShortUrlWithoutUser } from "../services/short-url-service.js"


export const createShortUrl = async (req, res,next) => {
  try {
    
 
  const { url } = req.body
  const shortUrl = await createShortUrlWithoutUser(url)
  res.send(process.env.APP_URL + shortUrl)
   } catch (error) {
    console.log(err);
    
    next(err)
  }
}
export const redirectFromShortUrl = async (req, res) => {
  try {
  const { id } = req.params
  const url = await findUrlFromShortUrl(id);
  if(!url) throw new Error("Short URL not found")
  res.redirect(url.full_url)    
  } catch (error) {
 next(err)
    
  }



}