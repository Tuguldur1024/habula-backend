import { Request, Response } from "express";
import ReportModel from "../../model/report";

export const createReport = async (req: Request, res: Response) => {
  const { imageUrl, userId,description,location } = req.body;
  try {
    const report = await new ReportModel({
      imageUrl: imageUrl,
      userId: userId,
      location: location,
      description: description,
    }).save();
    res.json({ report: report });
  } catch (error) {
    res.json({ message: error });
  }
};
