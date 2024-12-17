import {Field} from "@ark-ui/react";
import {UseFormRegisterReturn} from "react-hook-form";

type InputProps = {
    placeholder?: string;
    label: string;
    error?: string;
    register: UseFormRegisterReturn;
}

const Input = (props: InputProps) => {

    const {label, register, error, placeholder} = props;

    return (
        <div className={"flex flex-col gap-2"}>
            <label className='text-base text-secondary'>{label}</label>
            <Field.Input
                placeholder={placeholder}
                {...register}
                className={`w-full px-4 py-3 border rounded-2xl  focus-visible:outline-0 ${
                    error ? "border-red-500" : "border-[#DFEAF2]"
                }`}
            />
            {error && (
                <p className='text-red-500 text-sm'>
                    {String(error)}
                </p>
            )}
        </div>
    )
}

export default Input;