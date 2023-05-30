export interface DataType {
    id: string;
    createdAt: Date | undefined;
    paymentDue: Date | undefined;
    description: string | undefined;
    paymentTerms: number | undefined;
    clientName: string | undefined;
    clientEmail: string | undefined;
    status: string;
    senderAddress: Address | undefined;
    clientAddress: Address | undefined;
    items: Item[] | undefined;
    total: number | undefined;
}

export interface Address {
    street: string;
    city: string;
    postCode: string;
    country: string;
}

export interface Item {
    name: string | undefined;
    quantity: number | undefined;
    price: number | undefined;
    total: number;
}

export interface HomePropsType {
    isDarkMode: boolean;
    setIsDarkMode: (isDarkMode: boolean) => void;
    data: DataType | unknown;
    setData: (data: DataType | unknown) => void;
    dataLoaded: boolean;
    setDataLoaded: (dataLoaded: boolean) => void;
}

export interface InvoiceComponentProps {
    clientName: string | undefined;
    id: string;
    paymentColor: string;
    paymentDue: Date | undefined;
    status: string;
    total: number | undefined;
}
export interface InvoiceHeaderProps {
    filteredData: any[];
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    isDraft: boolean;
    setIsDraft: (isDraft: boolean) => void;
    isPending: boolean;
    setIsPending: (isPending: boolean) => void;
    isPaid: boolean;
    setIsPaid: (isPaid: boolean) => void;
    isDarkMode: boolean;
    setIsFormOpen: (isFormOpen: boolean) => void;
}