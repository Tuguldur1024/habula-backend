import express from "express";
import { connectionDB } from "./database";

import { userRouter } from "./router/user.router";
import { reportRouter } from "./router/report.router";
import { reportShowRouter } from "./router/reportShow.router";
import { companyRouter } from "./router/company.router";

import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const port = 5050;

app.use(cors());

connectionDB();

app.use("/users", userRouter);
app.use("/company", companyRouter);
app.use("/report", reportRouter);
app.use("/reportShow", reportShowRouter);

app.listen(port, () => {
  console.log(`server running at ${port}`);
});
