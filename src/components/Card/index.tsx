import {CardType} from "@/types/components/CardType";
import Icon from "@/components/Icon";
import {formatToCurrency} from "@/utils";

const Card = ({ variant, balance, currency, cardName, expDate, cardNumber} : CardType) => {

    const variants = {
        black: "bg-gradient-to-r from-[#5B5A6F] to-[#000000] text-white",
        white: "bg-white border border-[#DFEAF2]",
    }

    return (
        <div className={`${variants[variant]} font-lato rounded-3xl min-w-80`}>
            <div className="grid grid-cols-1 gap-8 py-6 px-8">
                <div className="flex justify-between align-middle">
                    <div className="grid">
                        <p className={"text-xs"}>Balance</p>
                        <p className={"text-xl font-semibold"}>{formatToCurrency(balance, currency)}</p>
                    </div>

                   <Icon type={"white"} name={variant == 'white' ? "card-chip-black" : "card-chip"} size={8} dataTestId={"data-card-chip"} />
                </div>

                <div className="grid grid-cols-2 gap-20">
                    <div className="grid">
                        <p className={"text-xs text-nowrap opacity-70"}>CARD HOLDER</p>
                        <p className={"text-base text-nowrap font-semibold"}>{cardName}</p>
                    </div>
                    <div className="grid">
                        <p className={"text-xs text-nowrap opacity-70"}>VALID THRU</p>
                        <p className={"text-base text-nowrap font-semibold"}>{expDate}</p>
                    </div>
                </div>
            </div>
            
            <div className={`bg-gradient-to-b from-[#FFFFFF26] to-[#FFFFFF00] px-6 py-5 ${variant == "white" ? "border-t border-[#DFEAF2]" : ""} `}>
                <div className="flex justify-between">
                    <p className={"text-xl"}> {cardNumber}</p>


                    <Icon name={variant == "white" ? "card-type-black" : "card-type"} size={8} dataTestId={"data-card-type"} />
                </div>


            </div>
        </div>
    )
}

export default Card;