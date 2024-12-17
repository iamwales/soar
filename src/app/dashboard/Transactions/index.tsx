"use client"
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getTransactions} from "@/redux/actions/dashboard";
import {updateTransactions} from "@/redux/slices/dashboardSlice";
import {RootState} from "@/redux";
import {TransactionType} from "@/types/components/TransactionType";
import Transaction from "@/components/Transaction";

const Transactions = () => {

    const dispatch = useDispatch();

    const transactions: TransactionType[] = useSelector((state: RootState) => state.dashboard.transactions);

    const [loading, setLoading] = useState<boolean>(true);

    const handleGetTransactions = async () => {
        setLoading(true);
        const response = await getTransactions();

        if(response && response.data && Array.isArray(response.data)) {
            setLoading(false);
            dispatch(updateTransactions(response.data));
        } else {
            dispatch(updateTransactions([]));
        }
    }


    useEffect(() => {
        handleGetTransactions();
    }, [])
    return (
        <div className={""}>
            <p className={"text-2xl text-primary font-semibold"}>Recent Transaction</p>

            <div className={"grid gap-6 bg-white rounded-2xl p-6 mt-6"}>
                {
                    transactions.map(({title, amount, currency,type, icon, iconType, date}:TransactionType, index ) => {
                        return (
                            <Transaction
                                key={index}
                                title={title}
                                type={type}
                                currency={currency}
                                amount={amount}
                                icon={icon}
                                iconType={iconType}
                                date={date} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Transactions