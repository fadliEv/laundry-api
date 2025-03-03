import { Product } from "../entity/Product";
import { products } from "../repository/DataStore";
import { v4 as uuidv4 } from "uuid";

export class ProductService {
    static getAll(): Product[] {
        return products;
    }

    static getById(id: string): Product | undefined {
        return products.find(p => p.id === id);
    }

    static create(data: Omit<Product, "id">): Product {
        const product: Product = {
            id: uuidv4(), // <-- pakai UUID di sini
            ...data
        };
        products.push(product);
        return product;
    }
    static update(id: string, updateData: Partial<Product>): Product | null {
        const index = products.findIndex(p => p.id === id);
        if (index === -1) return null;

        products[index] = { ...products[index], ...updateData };
        return products[index];
    }

    static delete(id: string): boolean {
        const index = products.findIndex(p => p.id === id);
        if (index === -1) return false;

        products.splice(index, 1);
        return true;
    }
}
