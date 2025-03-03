import { Request, Response } from "express";
import { EmployeeService } from "../service/EmployeeService";

export class EmployeeController {
    static getAll(req: Request, res: Response): void {
        const employees = EmployeeService.getAll();
        res.json(employees);
    }

    static getById(req: Request, res: Response): void {
        const { id } = req.params;
        const employee = EmployeeService.getById(id);
        if (!employee) {
            res.status(404).json({ message: "Employee not found" });
            return;
        }
        res.json(employee);
    }

    static create(req: Request, res: Response): void {
        const { name, phoneNumber, email, address } = req.body;
        const employee = EmployeeService.create({ name, phoneNumber, email, address });
        res.status(201).json(employee);
    }

    static update(req: Request, res: Response): void {
        const { id } = req.params;
        const updatedEmployee = EmployeeService.update(id, req.body);
        if (!updatedEmployee) {
            res.status(404).json({ message: "Employee not found" });
            return;
        }
        res.json(updatedEmployee);
    }

    static delete(req: Request, res: Response): void {
        const { id } = req.params;
        const success = EmployeeService.delete(id);
        if (!success) {
            res.status(404).json({ message: "Employee not found" });
            return;
        }
        res.json({ message: "Employee deleted successfully" });
    }
}
