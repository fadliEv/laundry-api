import { User } from "./User";

export interface Customer {
    id: string;
    name: string;
    phoneNumber: string;
    email: string;
    address: string;
    user? : User
}
