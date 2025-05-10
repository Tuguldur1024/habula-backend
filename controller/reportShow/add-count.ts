import { Request, Response } from "express";
import ReportShowModel from "../../model/reportsShow";

export const AddCount = async (req: Request, res: Response) => {
    const { id } = req.body;
    try {
        const reportShow = await ReportShowModel.findByIdAndUpdate({id : id}, { $inc: { countLike: 1 } }, { new: true });
        res.status(200).json({ reportShow: reportShow });
    } catch (error) {
        res.status(400).json({ message: error });
    }
}