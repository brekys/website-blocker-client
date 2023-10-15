import {ComponentPropsWithRef, useId} from 'react'
import {clsx} from "clsx";

type SelectOption = {
    value: string
    label: string
}

type SelectProps = {
    className?: string
    label?: string
    error?: string
    selectProps?: ComponentPropsWithRef<'select'>
    options?: SelectOption[]
}

export function Select({className, label, selectProps, error, options}: SelectProps) {
    const id = useId()

    return (
        <div className={clsx('flex flex-col gap-1', className)}>
            {label && <label htmlFor={id} className='block'>{label}</label>}
            <select
                {...selectProps}
                id={id}
                className={clsx(
                    selectProps?.className,
                    'rounded border border-slate-300 focus:border-teal-600 px-2 h-10 outline-none'
                )}
            >
                {options?.map((option, i) => {
                    return <option key={i} value={option.value}>{option.label}</option>
                })}
            </select>
            {error && <div className='text-rose-400 text-sm'>{error}</div>}
        </div>
    )
}
