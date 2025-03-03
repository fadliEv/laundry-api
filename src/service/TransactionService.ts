import { transactions, transactionDetails, customers, products } from "../repository/DataStore";
import { Transaction } from "../entity/Transaction";
import { TransactionDetail } from "../entity/TransactionDetail";
import { v4 as uuidv4 } from "uuid";

export class TransactionService {
    static createTransaction(
        customerId: string,
        details: { productId: string; qty: number }[]
    ) {
        const customer = customers.find(c => c.id === customerId);
        if (!customer) {
            throw new Error("Customer not found");
        }

        const today = new Date();
        const pickupDate = new Date(today);
        pickupDate.setDate(today.getDate() + 2);

        const transaction: Transaction = {
            id: uuidv4(),
            customerId: customer.id,
            isPickup: false,
            pickupDate: pickupDate.toISOString().split('T')[0],
            createdAt: today.toISOString().split('T')[0]
        };

        transactions.push(transaction);

        const detailsWithPrice = details.map(detail => {
            const product = products.find(p => p.id === detail.productId);
            if (!product) {
                throw new Error(`Product with id ${detail.productId} not found`);
            }

            return {
                transactionId: transaction.id,
                productId: detail.productId,
                price: product.price,
                qty: detail.qty
            };
        });

        transactionDetails.push(...detailsWithPrice);

        return this.getTransactionById(transaction.id);
    }

    static getAllTransactions() {
        return transactions.map(trans => this.mapTransactionWithDetails(trans));
    }

    static getTransactionByCustomerId(customerId: string) {
        const customerTransactions = transactions.filter(t => t.customerId === customerId);
        return customerTransactions.map(trans => this.mapTransactionWithDetails(trans));
    }

    static getTransactionById(id: string) {
        const transaction = transactions.find(t => t.id === id);
        if (!transaction) return null;
        return this.mapTransactionWithDetails(transaction);
    }

    private static mapTransactionWithDetails(transaction: Transaction) {
        const customer = customers.find(c => c.id === transaction.customerId);

        const details = transactionDetails
            .filter(detail => detail.transactionId === transaction.id)
            .map(detail => {
                const product = products.find(p => p.id === detail.productId);
                return {
                    product,
                    qty: detail.qty,
                    subTotal: detail.price * detail.qty
                };
            });

        const total = details.reduce((sum, detail) => sum + detail.subTotal, 0);

        return {
            id: transaction.id,
            isPickup: transaction.isPickup,
            pickupDate: transaction.pickupDate,
            createdAt: transaction.createdAt,
            customer,
            details,
            total
        };
    }

    static getTransactionByCustomerPhone(phoneNumber: string) {
        const customer = customers.find(c => c.phoneNumber === phoneNumber);
        if (!customer) return [];
    
        const customerTransactions = transactions.filter(t => t.customerId === customer.id);
        return customerTransactions.map(trans => this.mapTransactionWithDetails(trans));
    }
    
    
}   
