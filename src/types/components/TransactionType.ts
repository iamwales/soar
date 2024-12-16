export type TransactionType = {
    type: string;
    amount: number;
    icon: string;
    iconType: 'primary' | 'white' | 'primary-100' | 'blue' | 'secondary' | 'grey' | 'yellow' | 'blue-light' | 'green';
    date: Date;
    title: string;
    currency: string;
}


export type BgVariantsType = {
    [key: string]: string;
}

export type AmountVariantsType = {
    [key: string]: string;
}