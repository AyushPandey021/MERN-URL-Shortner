import { generateNanoId } from "../utils/helper.js";
import urlSchema from "../models/shortUrl.model.js";
import { getCustomShortUrl, saveShortUrl } from "../dao/short_url.js";
export const createShortUrlWithoutUser = async (url) => {
  const shortUrl = await generateNanoId(7)
  if (!shortUrl) throw new Error("Short URL not generated")
  await saveShortUrl(url, shortUrl)
  return shortUrl
}
export const createShortUrlWithUser = async (url, userId, slug = null) => {
  const shortUrl = slug ||  generateNanoId(7)
  const exists = await getCustomShortUrl(slug)
  if (exists) throw new Error("this custom url already exists")
  await saveShortUrl(url, shortUrl, userId)
  return shortUrl

}

