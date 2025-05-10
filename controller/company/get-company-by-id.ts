import { Request, Response } from "express";
import mongoose from "mongoose";
import CompanyModel from "../../model/company";

export const getCompanyById = async (req: Request, res: Response) => {
  const { id } = req.body;
  try {
    const objectId = mongoose.Types.ObjectId.createFromHexString(id);

    const company = await CompanyModel.findById({ _id: objectId }).populate('numberofReportShow').exec();
    res.status(200).json({ company: company });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
