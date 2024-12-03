"use server"
import dbConnect from "@/lib/dbConnect";
//import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export const register = async (values: any) => {
    const { firstname, lastname, email, password } = values;

    try {
        //await connectDB();
        await dbConnect();
        const userFound = await User.findOne({ email });
        if(userFound){
            return {
                error: 'Email already exists!'
            }
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
          firstname,
          lastname,
          email,
          password: hashedPassword,
        });
        await user.save();

    }catch(e){
        console.log(e);
    }
}