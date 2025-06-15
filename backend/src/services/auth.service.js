import jwtToken from 'jsonwebtoken';
// import { User } from '../models/user.model.js';
import { findUserByEmail } from '../dao/user.dao.js';
import { ConflictError } from '../utils/errorHandler.js';
export const registerUser = async (name, email, password) => {
  const user = await findUserByEmail({ email })
  if (user) throw new ConflictError("User already exists");
  const newUser = new User({
    name,
    email,
    password,
  });
  const token = jwtToken.sign({ id: newUser._id }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });
  return token

}