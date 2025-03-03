import express from "express";
import AuthRoute from "./route/AuthRoute";
import EmployeeRoute from "./route/EmployeeRoute";
import ProductRoute from "./route/ProductRoute";


const app = express();
app.use(express.json());

app.use("/auth", AuthRoute);
app.use("/employees", EmployeeRoute);
app.use("/products", ProductRoute);

export default app;
