export interface User {
    id?: string;
    username: string;
    password: string;
    role: "admin" | "manager" | "staff";
    employeeId: string; // relasi ke Employee
  }
  