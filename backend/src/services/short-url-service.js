import { generateNanoId } from "../utils/helper.js";
import urlSchema from "../models/shortUrl.model.js";
import { saveShortUrl } from "../dao/short_url.js";

export const createShortUrlWithoutUser = async (url) => {
  try {
    
  
  const shortUrl = await generateNanoId(7)
  if(!shortUrl) throw new Error("Failed to generate short URL");
  await saveShortUrl(shortUrl,url)
  return shortUrl
  } catch (error) {
    console.log(err, "this one");
     
    
    throw err
  }

}
export const createShortUrlWithUser = async (url, userId) => {
  const shortUrl = await generateNanoId(7)
  await saveShortUrl(url, shortUrl, userId)
  return shortUrl

}