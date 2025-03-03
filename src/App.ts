import express from "express";
import AuthRoute from "./route/AuthRoute";


const app = express();
app.use(express.json());

app.use("/auth", AuthRoute);

export default app;
