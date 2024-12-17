import Link from "next/link";
import Card from "@/components/Card";
import { Currency } from "@/utils/enums/currency";
import Transactions from "@/app/dashboard/Transactions";
import WeeklyActivity from "./dashboard/WeeklyActivity";
import ExpensesStatistics from "./dashboard/ExpensesStatistics";
import QuickTransfer from "./dashboard/QuickTransfer";
import BalanceHistory from "./dashboard/BalanceHistory";

export default function Home() {
  return (
    <div className={"grid grid-cols-1 md:grid-cols-3 gap-8"}>
      <div className={"col-span-1 md:col-span-2"}>
        <div className='flex justify-between items-center'>
          <p className={"text-2xl text-primary font-semibold"}>My Cards</p>
          <Link href={"#"} className={"text-xl text-primary font-semibold"}>
            See All
          </Link>
        </div>

        <div className='flex flex-nowrap overflow-scroll gap-6 mt-6'>
          <Card
            variant={"black"}
            balance={5756}
            currency={Currency.USD}
            cardName={"Eddy Cusuma"}
            expDate={"12/22"}
            cardNumber={"3778 **** **** 1234"}
          />
          <Card
            variant={"white"}
            balance={10456}
            currency={Currency.GBP}
            cardName={"Eddy Cusuma"}
            expDate={"12/22"}
            cardNumber={"3778 **** **** 1234"}
          />
        </div>
      </div>

      <div className={"col-span-1"}>
        <Transactions />
      </div>

      <div className='col-span-1 md:col-span-2'>
        <WeeklyActivity />
      </div>

      <div className='col-span-1'>
        <ExpensesStatistics />
      </div>

      <div className='col-span-1'>
        <QuickTransfer />
      </div>

      <div className='col-span-1 md:col-span-2'>
        <BalanceHistory />
      </div>
    </div>
  );
}
