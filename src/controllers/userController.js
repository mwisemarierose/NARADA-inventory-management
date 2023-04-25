import User from "../models/userModel.js";
import compare from "../helpers/authentication.js";


export const signup = async (req, res, next) => {
  try{ 
  const { firstname,lastname, email,phone, password ,deviceId } = req.body;
  const hashpassword = compare.hashpassword(password);
     
     const user = await User.create({
        firstname: firstname,
        lastname:lastname,
         deviceId:deviceId,
        email: email,
        phone:phone,
        password: hashpassword,
   })

  return res.status(200).json({message:"User created successfully",user})

}catch(error){
   console.log(error);
   return res.status(400).json({error:error.message})
}
}
export const signin = async (req, res) => {
  try {
    const { deviceId, password } = req.body;

    const user = await User.findOne({deviceId});
    
    if (!user) {
      throw new Error("User not found");
    }
    compare.comparePassword(password,user.password)
    return res.status(200).json({
      message: "you are logged in successfully",
      status: 200,
      token: compare.generateToken(user),
    });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const updateProfile = async (req,res) =>{
   try {
       const updatedProfile = await User.findByIdAndUpdate(
       req.params._id,
       {
           $set: req.body,
       },
       { new:true}
       )
       return res.status(200).json({message:"Profile updated successfully", updatedProfile})
   } catch (error) {
       return res.status(500).json({error:error.message})
   }
 }
