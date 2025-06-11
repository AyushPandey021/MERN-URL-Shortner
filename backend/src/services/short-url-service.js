import { generateNanoId } from "../utils/helper.js";
import urlSchema from "../models/shortUrl.model.js";
export const createShortUrlService = async  (url) => {
  const shortUrl = await generateNanoId(8)

return shortUrl

}