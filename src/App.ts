import express from "express";
import AuthRoute from "./route/AuthRoute";
import EmployeeRoute from "./route/EmployeeRoute";
import ProductRoute from "./route/ProductRoute";
import CustomerRoute from "./route/CustomerRoute";
import TransactionRoute from "./route/TransactionRoute";


const app = express();
app.use(express.json());

app.use("/auth", AuthRoute);
app.use("/employees", EmployeeRoute);
app.use("/products", ProductRoute);
app.use("/customers", CustomerRoute);
app.use("/transactions", TransactionRoute);

export default app;
