import  mongoose, { Schema, model } from  "mongoose";

export interface UserDocument extends mongoose.Document {
    _id: string;
    email: string;
    password: string;
    firstname: string;
    lastname: string;
    phone: string;
    avatar: string;
    createdAt: Date;
    updatedAt: Date;
  }

  const UserSchema = new Schema<UserDocument>({
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Email is invalid",
      ],
    },
    password: {
      type: String,
      required: true
    },
    firstname: {
      type: String,
      required: [true, "First name is required"]
    },
    
    lastname: {
      type: String,
      required: [true, "Last name is required"]
    },
  },
  {
    timestamps: true,
  }
);

const  User  =  mongoose.models?.User  ||  model<UserDocument>('User', UserSchema);
export  default  User;