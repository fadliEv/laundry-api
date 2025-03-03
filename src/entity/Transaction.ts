export interface Transaction {
    id: string;
    customerId: string;
    isPickup: boolean;
    pickupDate: string; //YYYY-MM-DD
    createdAt: string;
}
