import { Employee } from "../entity/Employee";
import { User } from "../entity/User";
import { BcryptUtil } from "../utils/BcryptUtil";


export const employees: Employee[] = [];
export const users: User[] = [
    {
        username: "admin",
        password: BcryptUtil.hashPassword("admin123"),
        role: "admin",
        employeeId: null as any
    }
];
