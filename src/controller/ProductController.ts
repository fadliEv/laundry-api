import { Request, Response } from "express";
import { ProductService } from "../service/ProductService";

export class ProductController {
    static getAll(req: Request, res: Response): void {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;

        const result = ProductService.getAll(page, limit);
        res.json(result);
    }


    static getById(req: Request, res: Response): void {
        const { id } = req.params;
        const product = ProductService.getById(id);
        if (!product) {
            res.status(404).json({ message: "Product not found" });
            return;
        }
        res.json(product);
    }

    static create(req: Request, res: Response): void {
        const { name, price, description } = req.body;
        const product = ProductService.create({ name, price, description });
        res.status(201).json(product);
    }

    static update(req: Request, res: Response): void {
        const { id } = req.params;
        const updatedProduct = ProductService.update(id, req.body);
        if (!updatedProduct) {
            res.status(404).json({ message: "Product not found" });
            return;
        }
        res.json(updatedProduct);
    }

    static delete(req: Request, res: Response): void {
        const { id } = req.params;
        const success = ProductService.delete(id);
        if (!success) {
            res.status(404).json({ message: "Product not found" });
            return;
        }
        res.json({ message: "Product deleted successfully" });
    }
}
