import {IconProps, IconSizeType, IconVariantType} from "@/types/components/IconTypes";


const Icon = (props: IconProps) => {

    const { type, name, size, className, dataTestId, mainClassName } = props;

    const sizes : IconSizeType = {
        2: 'size-2',
        4: 'size-4',
        6: 'size-6',
        8: 'size-8',
        16: 'size-16',
    }

    const variants : IconVariantType = {
        "primary": "fill-primary",
        "primary-100": "fill-[#718EBF]",
        "white": "fill-white",
        "blue": "fill-[#396AFF]",
        "secondary": "fill-secondary",
        "grey": "fill-grey",
    }

    return (<div data-testid={dataTestId} className={`group icon ${sizes[size || 6]} ${mainClassName}`}>
        <svg>
            <use
                className={`${variants[type || "primary"]} ${className}`}
                href={`/icons.svg#${name}`}
            ></use>
        </svg>
    </div>)
}

export default Icon;