import { employees, users } from "../repository/DataStore";
import { Employee } from "../entity/Employee";
import { User } from "../entity/User";
import { BcryptUtil } from "../utils/BcryptUtil";
import jwt from "jsonwebtoken";
import { config } from "../config/env";

export class AuthService {
    static register(
        employeeData: Omit<Employee, "id">,
        userData: Omit<User, "employeeId">
    ): User {
    const employee: Employee = {
        id: `emp-${Date.now()}`,  // Buat ID di sini
        name: employeeData.name,
        phoneNumber: employeeData.phoneNumber,
        email: employeeData.email,
        address: employeeData.address
    };
    
    employees.push(employee);

    const user: User = {
      ...userData,
      employeeId: employee.id,
      password: BcryptUtil.hashPassword(userData.password),
    };

    users.push(user);

    return user;
  }

  static login(username: string, password: string): string | null {
    const user = users.find(u => u.username === username);
    if (!user || !BcryptUtil.comparePassword(password, user.password)) {
      return null;
    }

    const token = jwt.sign(
      { username: user.username, role: user.role, employeeId: user.employeeId },
      config.JWT_SECRET,
      { expiresIn: "1h" }
    );
    return token;
  }
}
