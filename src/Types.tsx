export interface propsType {
    dataType: dataType;
    isDarkMode: boolean;
}
export interface dataType {
    id: string;
    createdAt: Date;
    paymentDue: Date;
    description: string;
    paymentTerms: number;
    clientName: string;
    clientEmail: string;
    status: string;
    senderAddress: Address;
    clientAddress: Address;
    items: Item[];
    total: number;
}

export interface Address {
    street: string;
    city: string;
    postCode: string;
    country: string;
}

export interface Item {
    name: string;
    quantity: number;
    price: number;
    total: number;
}
