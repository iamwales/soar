import React from 'react';

import SoarLogo from "@/assets/logo/soar.svg"
import Image from "next/image";
import {sideNavConfig} from "@/utils/config/sideNavConfig";
import {SideNavType} from "@/types/utils/sideNavType";
import Icon from "@/components/Icon";
import { useRouter } from 'next/router';
import Link from "next/link";


const SideNav: React.FC = () => {

    const router = useRouter();



    return (
        <div className={"bg-white border-r border-[#E6EFF5] "}>
            <div className="p-8">
                <Image src={SoarLogo} alt={"Soar Logo"} />
            </div>

            <div className="grid grid-cols-1">
                {
                    sideNavConfig.map((sideNav : SideNavType, index )  => {
                        return (
                            <Link href={sideNav?.href} className={`${router.pathname == sideNav.href ? "text-secondary" : "text-grey"}`} key={index}>
                                <Icon name={sideNav?.icon} size={4} type={`${router.pathname == sideNav.href ? "secondary" : "grey"}`} />
                                {sideNav?.title}
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SideNav