import {ComponentPropsWithRef, useId} from 'react'
import {clsx} from "clsx";

type TextFieldProps = {
    className?: string
    label?: string
    error?: string
    inputProps?: ComponentPropsWithRef<'input'>
}

export function TextField({className, label, inputProps, error}: TextFieldProps) {
    const id = useId()

    return (
        <div className={clsx('flex flex-col gap-1', className)}>
            {label && <label htmlFor={id} className='block'>{label}</label>}
            <input
                {...inputProps}
                id={id}
                className={clsx(
                    inputProps?.className,
                    'rounded border border-slate-300 focus:border-teal-600 px-2 h-10 outline-none'
                )}
            />
            {error && <div className='text-rose-400 text-sm'>{error}</div>}
        </div>
    )
}
