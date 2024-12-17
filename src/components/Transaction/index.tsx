import React from "react";
import {AmountVariantsType, BgVariantsType, TransactionType} from "@/types/components/TransactionType";
import Icon from "@/components/Icon";
import { formatToCurrency} from "@/utils";

const Transaction = (props: TransactionType) => {

    const {type = "", amount, icon, iconType = "yellow", date, title, currency } = props;

    const bgVariants : BgVariantsType = {
        "yellow": "bg-[#FFF5D9]",
        "blue-light": "bg-[#E7EDFF]",
        "green": "bg-[#DCFAF8]",
    }

    const amountVariants : AmountVariantsType = {
        "debit": "text-[#FF4B4A]",
        "credit": "text-[#41D4A8]",
    }

    return (
        <div className={"grid grid-cols-6 items-center gap-2"}>
            <div className={`flex justify-center align-middle text-center col-span-1 p-3 rounded-full ${bgVariants[iconType]} `}>
                <Icon name={icon} size={6} type={iconType} />
            </div>
            
            <div className="grid grid-cols-1 gap-1 col-span-3">
                <p className={"text-base truncate text-secondary font-medium"}>{title}</p>
                <p className={"text-sm text-[#718EBF]"}>{date}</p>
            </div>

            <div className="col-span-2">
                <p className={`text-base ${amountVariants[type]}`}>{formatToCurrency(amount, currency)}</p>
            </div>
        </div>
    )
}

export default Transaction