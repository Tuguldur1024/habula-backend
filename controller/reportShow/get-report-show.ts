import { Request, Response } from "express";
import ReportShowModel from "../../model/reportsShow";

export const getReportShow = async (_req: Request, res: Response) => {
    try {
        const reportShow = await ReportShowModel.find();
        res.json({ reportShows: reportShow });
    } catch (error) {
        res.json({ message: error });
    }
}