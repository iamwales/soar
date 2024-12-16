import {TransactionType} from "@/types/components/TransactionType";
import {Currency} from "@/utils/enums/currency";

const currentDate = new Date();

export const transactions: TransactionType[] = [
    {
        type: 'debit',
        amount: -850,
        icon: "cards",
        iconType: "yellow",
        date: "28 January 2021",
        title: "Withdrawal from my Card",
        currency: Currency.USD
    },
    {
        type: 'credit',
        amount: 2500,
        icon: "paypal",
        iconType: "blue-light",
        date: "25 January 2021",
        title: "Deposit Paypal",
        currency: Currency.GBP
    },
    {
        type: 'credit',
        amount: 5400,
        icon: "coin",
        iconType: "green",
        date: "21 January 2021",
        title: "Jemi Wilson",
        currency: Currency.USD
    },
]