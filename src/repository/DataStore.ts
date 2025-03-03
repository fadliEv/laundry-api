import { Employee } from "../entity/Employee";
import { Product } from "../entity/Product";
import { User } from "../entity/User";
import { Customer } from "../entity/Customer";
import { BcryptUtil } from "../utils/BcryptUtil";
import { v4 as uuidv4 } from "uuid";


export const employees: Employee[] = [];
export const users: User[] = [
    {
        username: "admin",
        password: BcryptUtil.hashPassword("admin123"),
        role: "admin",
        employeeId: null as any
    }
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
        address: "Jl. Melati No. 45"
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