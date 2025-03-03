import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { config } from "../config/env";

export class AuthMiddleware {
    static verifyToken(req: Request, res: Response, next: NextFunction): void {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            res.status(403).json({ message: "Token is required" });
            return; 
        }

        try {
            const decoded = jwt.verify(token, config.JWT_SECRET);
            (req as any).user = decoded;
            next(); //  next() selalu dipanggil kalau valid
        } catch (err) {
            res.status(401).json({ message: "Invalid token" });
            return; 
        }
    }
}
