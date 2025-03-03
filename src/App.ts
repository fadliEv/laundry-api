import express from "express";
import AuthRoute from "./route/AuthRoute";
import EmployeeRoute from "./route/EmployeeRoute";


const app = express();
app.use(express.json());

app.use("/auth", AuthRoute);
app.use("/employees", EmployeeRoute);

export default app;
