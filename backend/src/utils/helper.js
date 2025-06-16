import { nanoid } from "nanoid"
import { cookieOptions } from "../config/config.js"
import jwtToken from "jsonwebtoken"
export const generateNanoId = (length) => {
  return nanoid(length)
}

export const signToken = (payload) => {
  return jwtToken.sign(payload, process.env.JWT_SECRET, { expiresIn: "5m" })

}
export const verifyToken = (token) => {
  try {
    return jwtToken.verify(token, process.env.JWT_SECRET)
    const decoded = verifyToken(token)
  } catch (error) {
    return null
  }
}