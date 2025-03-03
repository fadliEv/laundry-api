import { Request, Response } from "express";
import { AuthService } from "../service/AuthService";

export class AuthController {
    static register(req: Request, res: Response): void {
        const { name, phoneNumber, email, address, username, password, role } = req.body;
    
        const employeeData = { name, phoneNumber, email, address };
        const userData = { username, password, role };
    
        const user = AuthService.register(employeeData, userData);
    
        // Buat response tanpa password
        const { password: _, ...userWithoutPassword } = user;
    
        res.status(201).json({
            message: "User registered successfully",
            user: userWithoutPassword
        });
    }
    static login(req: Request, res: Response): void {
        const { username, password } = req.body;

        const token = AuthService.login(username, password);
        if (!token) {
            res.status(401).json({ message: "Invalid username or password" });
            return;
        }

        res.json({ token });
    }
}
