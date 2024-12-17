import exp from "node:constants";

export type Transaction = {
    type: string;
    amount: number;
    icon: string;
    iconType: string;
    date: Date;
    title: string;
}

export type SendMoneyType = {
    userId: number,
    amount: number;
}

export type UserType = {
    name: string;
    position: string;
    id: number;
    image: { src: string };
}