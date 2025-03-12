import { Employee } from "../entity/Employee";
import { Product } from "../entity/Product";
import { User } from "../entity/User";
import { Customer } from "../entity/Customer";
import { Transaction } from "../entity/Transaction";
import { TransactionDetail } from "../entity/TransactionDetail";
import { BcryptUtil } from "../utils/BcryptUtil";
import { v4 as uuidv4 } from "uuid";


export const employees: Employee[] = [];
export const users: User[] = [
    {   
        id: uuidv4(),
        username: "admin",
        password: BcryptUtil.hashPassword("123"),
        role: "admin",
        employeeId: null as any
    },
];

// Dummy Products
export const products: Product[] = [
    {
        id: uuidv4(),
        name: "CKL (Cuci Kering Lipat)",
        price: 10000,
        description: "Layanan cuci, kering, lalu lipat rapi"
    },
    {
        id: uuidv4(),
        name: "CKS (Cuci Kering Setrika)",
        price: 15000,
        description: "Layanan cuci, kering, dan setrika"
    },
    {
        id: uuidv4(),
        name: "CSLMB (Cuci Selimut/Bed Cover)",
        price: 25000,
        description: "Layanan khusus cuci selimut atau bed cover"
    },
    {
        id: uuidv4(),
        name: "CJKT (Cuci Jaket Tebal)",
        price: 20000,
        description: "Layanan cuci jaket tebal dengan perawatan khusus"
    }
];

export const customers: Customer[] = [
    {
        id: uuidv4(),
        name: "Siti Aminah",
        phoneNumber: "08123456789",
        email: "siti@email.com",
        address: "Jl. Melati No. 45",
        user : users[0]
    },
    {
        id: uuidv4(),
        name: "Budi Santoso",
        phoneNumber: "08567891234",
        email: "budi@email.com",
        address: "Jl. Mawar No. 12"
    },
    {
        id: uuidv4(),
        name: "Andi Wijaya",
        phoneNumber: "08198765432",
        email: "andi@email.com",
        address: "Jl. Kenanga No. 7"
    }
];

const customerIdSiti = customers[0]?.id;  
const customerIdBudi = customers[1]?.id;  

export const transactions: Transaction[] = [
    {
        id: uuidv4(),
        customerId: customerIdSiti!,
        isPickup: true,
        pickupDate: "2025-03-05",
        createdAt: new Date().toISOString().split('T')[0]
    },
    {
        id: uuidv4(),
        customerId: customerIdBudi!,
        isPickup: false,
        pickupDate: "2025-03-04",
        createdAt: new Date().toISOString().split('T')[0]
    }
];

export const transactionDetails: TransactionDetail[] = [
    {
        transactionId: transactions[0].id,
        productId: products[0].id,
        price: products[0].price,
        qty: 2
    },
    {
        transactionId: transactions[0].id,
        productId: products[1].id,
        price: products[1].price,
        qty: 1
    },
    {
        transactionId: transactions[1].id,
        productId: products[2].id,
        price: products[2].price,
        qty: 3
    }
];