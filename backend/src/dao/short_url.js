const newUrl = new urlSchema({
  full_url: url,
  short_url: shortUrl,
})
newUrl.save()
export const saveShortUrl = async (shortUrl, langUrl, userId) => {
  const responce = await fetch(
    `http://localhost:3000/api/short-url/${shortUrl}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        l0ng_url: langUrl,
        user_Id: userId
      }),
    }
  )
  return responce.json()
}