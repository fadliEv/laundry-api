import express from "express";
import AuthRoute from "./route/AuthRoute";
import EmployeeRoute from "./route/EmployeeRoute";
import ProductRoute from "./route/ProductRoute";
import CustomerRoute from "./route/CustomerRoute";
import TransactionRoute from "./route/TransactionRoute";
import cors from "cors";
import { config } from "./config/env";


const corsOptions = {
    origin: (origin : any, callback : any) => {
        if (!origin || config.CORS_ORIGINS.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
};

// Apply
const app = express();
app.use(express.json());
app.use(cors(corsOptions));
app.use("/auth", AuthRoute);
app.use("/employees", EmployeeRoute);
app.use("/products", ProductRoute);
app.use("/customers", CustomerRoute);
app.use("/transactions", TransactionRoute);

export default app;
