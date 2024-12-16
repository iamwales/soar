export interface CardType {
    variant: 'black' | 'white';
    balance: number;
    currency: string;
    cardName: string;
    expDate: string;
    cardNumber: string;
}