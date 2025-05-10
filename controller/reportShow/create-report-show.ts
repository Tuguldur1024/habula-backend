import { Request, Response } from "express";
import ReportShowModel from "../../model/reportsShow";

export const createReportShow = async (req: Request, res: Response) => {
    const { imageUrl, userId, description, location } = req.body;
    try {
        const reportShow = await new ReportShowModel({
        imageUrl: imageUrl,
        userId: userId,
        location: location,
        description: description,
        likeCount: 1,
        }).save();
        res.json({ reportShow: reportShow });
    } catch (error) {
        res.json({ message: error });
    }
}