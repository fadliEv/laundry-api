import { Router } from "express";
import { EmployeeController } from "../controller/EmployeeController";
import { AuthMiddleware } from "../middleware/AuthMiddleware";

const EmployeeRoute = Router();

// Semua CRUD Employee perlu login dulu
EmployeeRoute.get("/", AuthMiddleware.verifyToken, EmployeeController.getAll);
EmployeeRoute.get("/:id", AuthMiddleware.verifyToken, EmployeeController.getById);
EmployeeRoute.post("/", AuthMiddleware.verifyToken, EmployeeController.create);
EmployeeRoute.put("/:id", AuthMiddleware.verifyToken, EmployeeController.update);
EmployeeRoute.delete("/:id", AuthMiddleware.verifyToken, EmployeeController.delete);

export default EmployeeRoute;
