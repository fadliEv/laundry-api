import express from "express";
import AuthRoute from "./route/AuthRoute";
import EmployeeRoute from "./route/EmployeeRoute";
import ProductRoute from "./route/ProductRoute";
import CustomerRoute from "./route/CustomerRoute";
import TransactionRoute from "./route/TransactionRoute";
import cors from "cors";
import { config } from "./config/env";

const app = express();
app.use(express.json());


// Setup CORS pakai env
app.use(cors({
    origin: config.CORS_ORIGIN,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use("/auth", AuthRoute);
app.use("/employees", EmployeeRoute);
app.use("/products", ProductRoute);
app.use("/customers", CustomerRoute);
app.use("/transactions", TransactionRoute);

export default app;
