import {TransactionType} from "@/types/components/TransactionType";
import {Currency} from "@/utils/enums/currency";

export const transactions: TransactionType[] = [
    {
        type: 'debit',
        amount: -850,
        icon: "cards",
        iconType: "yellow",
        date: new Date(),
        title: "Withdrawal from my Card",
        currency: Currency.USD
    },
    {
        type: 'credit',
        amount: 2500,
        icon: "paypal",
        iconType: "blue-light",
        date: new Date(),
        title: "Deposit Paypal",
        currency: Currency.GBP
    },
    {
        type: 'credit',
        amount: 5400,
        icon: "coin",
        iconType: "green",
        date: new Date(),
        title: "Jemi Wilson",
        currency: Currency.USD
    },
]