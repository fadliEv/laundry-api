import { Router } from "express";
import { ProductController } from "../controller/ProductController";
import { AuthMiddleware } from "../middleware/AuthMiddleware";

const ProductRoute = Router();

ProductRoute.get("/", AuthMiddleware.verifyToken, ProductController.getAll);
ProductRoute.get("/:id", AuthMiddleware.verifyToken, ProductController.getById);
ProductRoute.post("/", AuthMiddleware.verifyToken, ProductController.create);
ProductRoute.put("/:id", AuthMiddleware.verifyToken, ProductController.update);
ProductRoute.delete("/:id", AuthMiddleware.verifyToken, ProductController.delete);

export default ProductRoute;
