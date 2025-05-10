import { Request, Response } from "express";
import UserModel from "../../model/user";
import bcrypt from "bcrypt";

export const createUser = async (req: Request, res: Response) => {
  const { email, register,firstName,lastName, password, phoneNumber, role } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 5);

    const user = await new UserModel({
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: hashedPassword,
      phoneNumber: phoneNumber,
      role: role,
      register: register,
    }).save();
    res.json({ user: user });
  } catch (error) {
    res.json({ message: error });
  }
};
