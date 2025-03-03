import { Request, Response } from "express";
import { TransactionService } from "../service/TransactionService";

export class TransactionController {
    static getAll(req: Request, res: Response): void {
        const transactions = TransactionService.getAllTransactions();
        res.json(transactions);
    }

    static getByCustomerId(req: Request, res: Response): void {
        const { customerId } = req.params;
        const transactions = TransactionService.getTransactionByCustomerId(customerId);
        res.json(transactions);
    }

    static create(req: Request, res: Response): void {
        try {
            const { customerId, details } = req.body;

            const transaction = TransactionService.createTransaction(
                customerId,
                details
            );

            res.status(201).json(transaction);
        } catch (err: any) {
            res.status(400).json({ message: err.message });
        }
    }

    static getById(req: Request, res: Response): void {
        const { id } = req.params;
        const transaction = TransactionService.getTransactionById(id);
        if (!transaction) {
            res.status(404).json({ message: "Transaction not found" });
            return;
        }
        res.json(transaction);
    }
    
    static getByCustomerPhone(req: Request, res: Response): void {
        const { phoneNumber } = req.params;
        const transactions = TransactionService.getTransactionByCustomerPhone(phoneNumber);
        res.json(transactions);
    }
}
