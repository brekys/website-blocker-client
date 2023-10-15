import {clsx} from 'clsx'
import NextLink from 'next/link'

type LinkProps = {
    className?: string
} & Parameters<typeof NextLink>[0]

export function Link({className, ...props}: LinkProps) {
    return (
        <NextLink
            {...props}
            className={
                clsx(
                    'p-1 text-teal-500 hover:text-teal-600 cursor-pointer',
                    className,
                )
            }
        />
    )
}
