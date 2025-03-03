import { Router } from "express";
import { CustomerController } from "../controller/CustomerController";
import { AuthMiddleware } from "../middleware/AuthMiddleware";

const CustomerRoute = Router();

CustomerRoute.get("/", AuthMiddleware.verifyToken, CustomerController.getAll);
CustomerRoute.get("/:id", AuthMiddleware.verifyToken, CustomerController.getById);
CustomerRoute.post("/", AuthMiddleware.verifyToken, CustomerController.create);
CustomerRoute.put("/:id", AuthMiddleware.verifyToken, CustomerController.update);
CustomerRoute.delete("/:id", AuthMiddleware.verifyToken, CustomerController.delete);

export default CustomerRoute;
