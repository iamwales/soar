import {IconProps, IconSizeType, IconVariantType} from "@/types/components/IconTypes";


const Icon = (props: IconProps) => {

    const { type = "primary", name, size = 4, className = "", dataTestId = "", mainClassName = "" } = props;

    const sizes : IconSizeType = {
        2: 'size-2',
        4: 'size-4',
        6: 'size-6',
        8: 'size-8',
        10: 'size-10',
        16: 'size-16',
    }

    const variants : IconVariantType = {
        "primary": "fill-primary",
        "primary-100": "fill-[#718EBF]",
        "white": "fill-white",
        "blue": "fill-[#396AFF]",
        "secondary": "fill-secondary",
        "grey": "fill-grey",
        "yellow": "fill-[#FFBB38]",
        "blue-light": "fill-[#396AFF]",
        "green": "fill-[#16DBCC]"
    }

    return (
        <div data-testid={dataTestId} className={`flex justify-center items-center flex-shrink-0 ${sizes[size]} ${mainClassName}`}>
            <svg className={"flex justify-center items-center w-full h-full relative"}>
                <use
                    className={`${variants[type]} ${className}`}
                    href={`/icons.svg#${name}`}
                ></use>
            </svg>
        </div>
    )
}

export default Icon;