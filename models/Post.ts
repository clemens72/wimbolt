import  mongoose, { Schema, model } from  "mongoose";
import { StaticImageData } from "next/image";

export interface NewPost extends mongoose.Document {
    _id: string;
    id: string;
    title: string;
    body: string;
    url: string;
    avatar: string | StaticImageData;
    createdAt: Date;
    updatedAt: Date;
  }

  const PostSchema = new Schema<NewPost>({
    id: {
      type: String,
    },
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    body: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: false
    },
    avatar: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
  }
);

const  Post  =  mongoose.models?.Post  ||  model<NewPost>('Post', PostSchema);
export  default  Post;