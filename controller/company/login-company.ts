import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Company } from "../../model/company";
import CompanyModel from "../../model/company";

export const signinCompany = async (req: Request, res: Response) => {
  const { b_id, password } = req.body;

  try {
    const company = await CompanyModel.findOne<Company>({ b_id });

    if (!company) {
      res.status(400).json({ message: "error not found company" });
      return;
    }

    const isMachedPassword = await bcrypt.compare(password, company.password);

    if (!isMachedPassword) {
      res.status(400).json({ message: "error not found password" });
      return;
    }

    const accessToken = jwt.sign(
      {
        _id: company._id,
        email: company.email,
        phoneNumber: company.phoneNumber,
      },
      "secret",
      {
        expiresIn: "10h",
      }
    );
    res.json({ company, accessToken });
  } catch (error) {
    res.send(error);
  }
};
