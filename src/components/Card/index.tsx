import {CardType} from "@/types/components/CardType";
import Image from "next/image";
import Icon from "@/components/Icon";

const Card = ({ variant, balance, cardName, expDate, cardNumber} : CardType) => {

    const variants = {
        black: "bg-gradient-to-l from-[#5B5A6F] to-[#000000]",
        white: "bg-white border border-[#DFEAF2]",
    }

    return (
        <div className={`${variants[variant]} font-lato rounded-3xl`}>
            <div className="grid grid-cols-1 gap-8 p-6">
                <div className="flex justify-between align-middle">
                    <div className="grid">
                        <p className={"text-xs"}>Balance</p>
                        <p className={"text-xl font-semibold"}>{balance}</p>
                    </div>

                   <Icon type={"white"} name={"card-chip"} size={8} dataTestId={"data-card-chip"} />
                </div>

                <div className="grid grid-cols-2 ">
                    <div className="grid">
                        <p className={"text-xs"}>CARD HOLDER</p>
                        <p className={"text-xl font-semibold"}>{cardName}</p>
                    </div>
                    <div className="grid">
                        <p className={"text-xs"}>VALID THRU</p>
                        <p className={"text-xl font-semibold"}>{expDate}</p>
                    </div>
                </div>
            </div>
            
            <div className="bg-gradient-to-l from-[#FFFFFF26] to-[#FFFFFF00] px-6 py-5">
                <div className="flex justify-between">
                    {cardNumber}
                </div>

                <Icon name={"card-type"} size={8} dataTestId={"data-card-type"} />
            </div>
        </div>
    )
}

export default Card;