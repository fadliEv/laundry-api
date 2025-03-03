import { Router } from "express";
import { AuthController } from "../controller/AuthController";

const AuthRoute = Router();

AuthRoute.post("/register", AuthController.register);
AuthRoute.post("/login", AuthController.login);

export default AuthRoute;
