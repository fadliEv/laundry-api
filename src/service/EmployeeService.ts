import { employees, users } from "../repository/DataStore";
import { Employee } from "../entity/Employee";

export class EmployeeService {
    static getAll() {
        return employees.map(emp => {
            const user = users.find(u => u.employeeId === emp.id);
            return {
                ...emp,
                user: user ? { username: user.username, role: user.role } : null
            };
        });
    }

    static getById(id: string) {
        const employee = employees.find(emp => emp.id === id);
        if (!employee) return null;

        const user = users.find(u => u.employeeId === employee.id);
        return {
            ...employee,
            user: user ? { username: user.username, role: user.role } : null
        };
    }

    static create(employee: Omit<Employee, "id">) {
        const newEmployee: Employee = {
            id: `emp-${Date.now()}`,
            ...employee
        };
        employees.push(newEmployee);
        return newEmployee;
    }

    static update(id: string, employeeUpdate: Partial<Employee>) {
        const index = employees.findIndex(emp => emp.id === id);
        if (index === -1) return null;

        employees[index] = { ...employees[index], ...employeeUpdate };
        return employees[index];
    }

    static delete(id: string) {
        const index = employees.findIndex(emp => emp.id === id);
        if (index === -1) return false;

        employees.splice(index, 1);
        return true;
    }
}
