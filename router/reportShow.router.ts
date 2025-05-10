import express from "express";

import { AddCount, createReportShow } from "../controller/reportShow";

export const reportShowRouter = express.Router();
reportShowRouter.post("/addcount", AddCount);
reportShowRouter.get("/create", createReportShow);