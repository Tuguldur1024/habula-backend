import { Request, Response } from "express";
import ReportModel from "../../model/report";

export const getUserReport = async (req: Request, res: Response) => {
  const { userId } = req.body;
  try {
    const reports = await ReportModel.find({ userId: userId });
    res.json({ reports: reports });
  } catch (error) {
    res.json({ message: error });
  }
};
