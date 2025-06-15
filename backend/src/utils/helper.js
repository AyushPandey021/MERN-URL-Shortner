import { nanoid } from "nanoid"

export const generateNanoId = (length ) => {
  return nanoid(length)
}

export const  signToken = (payload) =>{
  return jsonwebtoken.sign(payload, process.env.JWT_SECRET,cookieOptions) 

}
export const verifyToken = (token) => {
  try {
    return jsonwebtoken.verify(token, process.env.JWT_SECRET)
  } catch (error) {
    return null
  }
}