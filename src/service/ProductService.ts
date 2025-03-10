import { Product } from "../entity/Product";
import { products } from "../repository/DataStore";
import { v4 as uuidv4 } from "uuid";

export class ProductService {
    static getAll(page: number, limit: number) {
        const offset = (page - 1) * limit;
        const paginatedProducts = products.slice(offset, offset + limit);

        return {
            data: paginatedProducts,
            pagination: {
                currentPage: page,
                pageSize: limit,
                totalItems: products.length,
                totalPages: Math.ceil(products.length / limit)
            }
        };
    }

    static getById(id: string): Product | undefined {
        return products.find(p => p.id === id);
    }

    static create(data: Omit<Product, "id">): Product {
        const product: Product = {
            id: uuidv4(),
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
