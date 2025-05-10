import { Request, Response } from "express";
import ReportModel from "../../model/report";

export const getReportById = async (req: Request, res: Response) => {
  const { id } = req.body;
  try {
    const reports = await ReportModel.find({ id: id });
    res.json({ reports: reports });
  } catch (error) {
    res.json({ message: error });
  }
};
