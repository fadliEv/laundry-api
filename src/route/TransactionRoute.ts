import { Router } from "express";
import { TransactionController } from "../controller/TransactionController";
import { AuthMiddleware } from "../middleware/AuthMiddleware";

const router = Router();

router.get("/", AuthMiddleware.verifyToken, TransactionController.getAll);
router.get("/customer/:phoneNumber", AuthMiddleware.verifyToken, TransactionController.getByCustomerPhone);
router.get("/:id", AuthMiddleware.verifyToken, TransactionController.getById);
router.post("/", AuthMiddleware.verifyToken, TransactionController.create);

export default router;
