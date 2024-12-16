"use client"
import React from 'react';

import SoarLogo from "@/assets/logo/soar.svg"
import Image from "next/image";
import {sideNavConfig} from "@/utils/config/sideNavConfig";
import {SideNavType} from "@/types/utils/sideNavType";
import Icon from "@/components/Icon";
import {usePathname} from "next/navigation";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux";

const SideNav: React.FC = () => {

    const pathname = usePathname();

    const isOpen = useSelector((state: RootState) => state.nav.isOpen);
    const dispatch = useDispatch();

    return (
        <div className={`bg-white border-r border-[#E6EFF5] md:block ${isOpen ? "block" : "hidden" }`}>
            <div className="p-8">
                <Image src={SoarLogo} alt={"Soar Logo"} />
            </div>

            <div className="relative grid grid-cols-1">
                {
                    sideNavConfig.map((sideNav : SideNavType, index )  => {
                        return (
                            <Link href={sideNav?.href} className={`group flex py-4 px-8 gap-5 box-border ${pathname == sideNav.href ? "text-secondary border-l-4 border-secondary" : "text-grey pl-9"} hover:text-secondary hover:border-l-4 hover:border-secondary`} key={index}>
                                <Icon name={sideNav?.icon} size={6} type={`${pathname == sideNav.href ? "secondary" : "grey"}`} className={"group-hover:fill-secondary"} />
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