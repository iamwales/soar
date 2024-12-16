import Icon from "@/components/Icon";
import Link from "next/link";

const Header: React.FC = () => {
    return (
        <header className="bg-white border-b border-[#E6EFF5]">
            <div className="flex justify-between items-center">
                <p className={"text-2xl"}>Overview</p>

                <div className="flex justify-between gap-8">
                    <div className="relative w-full max-w-sm bg-background">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <Icon name={"search"} size={4} type="primary-100"  />
                        </div>

                        {/* Input Field */}
                        <input
                            type="text"
                            placeholder="Search..."
                            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none w-full"
                        />
                    </div>

                    <Link href={"/settings"} aria-label={"Setting"} className="flex items-center bg-background rounded-3xl p-2">
                        <Icon name={"settings"} size={4} type="primary-100" />
                    </Link>

                    <Link href={"#"} aria-label={"Notification"} className="flex items-center bg-background rounded-3xl p-2">
                        <Icon name={"notification"} size={4} type="blue" />
                    </Link>

                    <Link href={"#"} aria-label={"Profile"} className="flex items-center bg-background rounded-3xl p-2">
                        <Icon name={"profileImg"} size={4} type="blue" />
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header;