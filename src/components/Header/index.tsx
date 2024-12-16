"use client"
import Icon from "@/components/Icon";
import Link from "next/link";
import {toggleNav} from "@/redux/slices/navSlice";
import {useDispatch} from "react-redux";

const Header: React.FC = () => {

    const dispatch = useDispatch();

    return (
        <header className="bg-white border-b border-[#E6EFF5]">
            <div className="flex justify-between items-center p-6">
                <button
                    className="text-gray-700 md:hidden"
                    onClick={() => dispatch(toggleNav())}
                >
                    <Icon name={"menu"} type={"primary"} size={6} />
                </button>

                <p className={"text-2xl"}>Overview</p>

                <div className="flex justify-between gap-8">
                    <div className="relative w-full max-w-sm hidden lg:block">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-6 pointer-events-none">
                            <Icon name={"search"} size={6} type="primary-100"/>
                        </div>

                        {/* Input Field */}
                        <input
                            type="text"
                            placeholder="Search for something"
                            className="pl-14 pr-4 py-4 pr-6 bg-background rounded-2xl focus:ring-2 focus:ring-blue-500 focus:outline-none w-full"
                        />
                    </div>

                    <Link href={"/setting"} aria-label={"Setting"}
                          className="items-center bg-background rounded-3xl p-4 hidden md:flex">
                        <Icon name={"setting"} size={6} type="primary-100"/>
                    </Link>

                    <Link href={"#"} aria-label={"Notification"}
                          className="items-center bg-background rounded-3xl p-4 hidden md:flex">
                        <Icon name={"notification"} size={6} type="primary-100"/>
                    </Link>

                    <Link href={"#"} aria-label={"Profile"} className="flex items-center bg-background rounded-3xl ">
                        <Icon name={"profileImg"} size={10} type="blue"/>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header;