import express from "express";

import { createReport, getReportById, getUserReport } from "../controller/report";

export const reportRouter = express.Router();
reportRouter.post("/create", createReport);
reportRouter.post("/byId", getReportById);
reportRouter.post("/byUser", getUserReport);