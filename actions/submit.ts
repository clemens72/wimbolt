"use server"
import dbConnect from "@/lib/dbConnect";
//import { connectDB } from "@/lib/mongodb";
import Post from "@/models/Post"

export const submit = async (values: any) => {
    const { title, body, url } = values;

    try {
        //await connectDB();
        await dbConnect();
        
        //run checks for validity

        const post = new Post({
          title,
          body,
          url,
        });
        await post.save();

    }catch(e){
        console.log(e);
    }
}