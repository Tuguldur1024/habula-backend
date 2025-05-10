import { Request, Response } from "express";
import CompanyModel from "../../model/company";
import bcrypt from "bcrypt";

export const createCompany = async (req: Request, res: Response) => {
  const { email, b_id, ub_id,name,address, password, phoneNumber,logo } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 5);

    const company = await new CompanyModel({
      email: email,
      b_id : b_id,
      ub_id : ub_id,
      name: name,
      address: address,
      logo: logo,
      password: hashedPassword,
      phoneNumber: phoneNumber,
    }).save();
    res.json({ company: company });
  } catch (error) {
    res.json({ message: error });
  }
};
