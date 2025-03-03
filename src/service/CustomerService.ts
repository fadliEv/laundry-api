import { Customer } from "../entity/Customer";
import { customers } from "../repository/DataStore";
import { v4 as uuidv4 } from "uuid";

export class CustomerService {
    static getAll(page: number, limit: number) {
            const offset = (page - 1) * limit;
            const paginatedProducts = customers.slice(offset, offset + limit);
    
            return {
                data: paginatedProducts,
                pagination: {
                    currentPage: page,
                    pageSize: limit,
                    totalItems: customers.length,
                    totalPages: Math.ceil(customers.length / limit)
                }
            };
    }

    static getById(id: string): Customer | undefined {
        return customers.find(c => c.id === id);
    }

    static create(data: Omit<Customer, "id">): Customer {
        const customer: Customer = {
            id: uuidv4(),
            ...data
        };
        customers.push(customer);
        return customer;
    }

    static update(id: string, updateData: Partial<Customer>): Customer | null {
        const index = customers.findIndex(c => c.id === id);
        if (index === -1) return null;

        customers[index] = { ...customers[index], ...updateData };
        return customers[index];
    }

    static delete(id: string): boolean {
        const index = customers.findIndex(c => c.id === id);
        if (index === -1) return false;

        customers.splice(index, 1);
        return true;
    }
}
