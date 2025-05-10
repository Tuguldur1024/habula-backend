import { Request, Response } from "express";
import CompanyModel from "../../model/company";

export const getCompanies = async (req: Request, res: Response) => {
  try {
    const companies = await CompanyModel.find();
    res.status(200).json({ companies: companies });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
