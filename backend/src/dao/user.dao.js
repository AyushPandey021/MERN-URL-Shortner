
 import User from "../models/user.model.js";
export const findUserByEmail = async (email) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("User not found");
  }
  return user;
}
export const findUserById = async (id) => {  
   return await User.findById(id);

}

export const createUser = async (userData) => {
  const user = new User(userData);
  await user.save();
  return user;
}
// export const updateUser = async (id, name,email,password) => {
//   const user = await User.findById(id)
//   if(!user) throw new Error("User not found");
//     user.name = name;
//     user.email = email;
//     user.password = password;
//     await user.save();
//     return user

  
// }
// export const deleteUser = async (id) => {
//   const user = await User.findByIdAndDelete(id);
//   if (!user) {
//     throw new Error("User not found");
//   }
//   return user;
// }


// time 3:40 min 