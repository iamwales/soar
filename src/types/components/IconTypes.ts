export type IconProps = {
    type?: 'primary' | 'white' | 'primary-100' | 'blue' | 'secondary' | 'grey' | 'yellow' | 'blue-light' | 'green';
    name: string;
    className?: string;
    size?: number;
    mainClassName?: string;
    dataTestId?: string;
};

export type IconSizeType = {
    [key: number]: string;
}

export type IconVariantType = {
    [key: string]: string;
}