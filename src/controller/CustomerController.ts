import { Request, Response } from "express";
import { CustomerService } from "../service/CustomerService";

export class CustomerController {
       static getAll(req: Request, res: Response): void {
            const page = parseInt(req.query.page as string) || 1;
            const limit = parseInt(req.query.limit as string) || 10;
    
            const result = CustomerService.getAll(page, limit);
            res.json(result);
        }

    static getById(req: Request, res: Response): void {
        const { id } = req.params;
        const customer = CustomerService.getById(id);
        if (!customer) {
            res.status(404).json({ message: "Customer not found" });
            return;
        }
        res.json(customer);
    }

    static create(req: Request, res: Response): void {
        const { name, phoneNumber, email, address } = req.body;
        const customer = CustomerService.create({ name, phoneNumber, email, address });
        res.status(201).json(customer);
    }

    static update(req: Request, res: Response): void {
        const { id } = req.params;
        const updatedCustomer = CustomerService.update(id, req.body);
        if (!updatedCustomer) {
            res.status(404).json({ message: "Customer not found" });
            return;
        }
        res.json(updatedCustomer);
    }

    static delete(req: Request, res: Response): void {
        const { id } = req.params;
        const success = CustomerService.delete(id);
        if (!success) {
            res.status(404).json({ message: "Customer not found" });
            return;
        }
        res.json({ message: "Customer deleted successfully" });
    }
}
