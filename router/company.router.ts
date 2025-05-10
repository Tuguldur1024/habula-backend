import express from "express";

import { createCompany, getCompanyById, getCompanies, signinCompany } from "../controller/company";

export const companyRouter = express.Router();
companyRouter.post("/createCompany", createCompany);
companyRouter.post("/getCompanyId", getCompanyById);
companyRouter.get("/all", getCompanies);
companyRouter.post("/signin", signinCompany);