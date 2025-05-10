import mongoose, { Schema } from "mongoose";

const role = ["Admin", "User"];

export type User = {
  _id: Schema.Types.ObjectId;
  email: string;
  register : string;
  firstName: string;
  lastName: string;
  password: string;
  phoneNumber: string;
  role: "Admin" | "User";
  createdAt: Date;
  updatedAt: Date;
};

const UserSchema = new Schema<User>(
  {
    email: { type: String, required: true },
    firstName: { type: String },
    password: { type: String, min: 8, required: true },
    phoneNumber: { type: String, min: 8 },
    role: { type: String, enum: role, required: true, default: "User" },
    register: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  }
);

const UserModel = mongoose.model<User>("User", UserSchema);
export default UserModel;
