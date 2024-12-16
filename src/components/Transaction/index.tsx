import React from "react";
import {AmountVariantsType, BgVariantsType, TransactionType} from "@/types/components/TransactionType";
import Icon from "@/components/Icon";
import {formatDate} from "@/utils";

const Transaction = (props: TransactionType) => {

    const {type = "", amount, icon, iconType = "yellow", date, title } = props;

    const bgVariants : BgVariantsType = {
        "yellow": "bg-[#FFF5D9]",
        "blue-light": "bg-[#E7EDFF]",
        "green": "bg-[#DCFAF8]",
    }

    const amountVariants : AmountVariantsType = {
        "debit": "font-[#FF4B4A]",
        "credit": "font-[#41D4A8]",
    }

    return (
        <div className={"grid grid-cols-5 gap-1"}>
            <div className={`p-2 col-span-1 rounded-full ${bgVariants[iconType]} `}>
                <Icon name={icon} size={6} type={iconType} />
            </div>
            
            <div className="grid grid-cols-1 gap-2 col-span-3">
                <p className={"text-base text-secondary font-medium"}>{title}</p>
                <p className={"text-sm text-[#718EBF]"}>{formatDate(date)}</p>
            </div>

            <div className="">
                <p className={`text-base ${amountVariants[type]}`}>{amount}</p>
            </div>
        </div>
    )
}

export default Transaction