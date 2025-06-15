export const cookieOptions = {
   httpOnly: true,
   secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
   semeSite:"lax",
   maxAge: 1000 * 60 * 5 // 5 minutes,
}