import {ReactNode} from 'react'
import {clsx} from 'clsx'
import {Logo} from '../icons/components/logo'

export function Header({className, right}: { className?: string, right?: ReactNode }) {
    return (
        <header
            className={clsx(
                'px-4 py-5 border-5 border-b-slate-300 flex justify-between items-center bg-white',
                className,
            )}
        >
            <Logo/>
            {right}
        </header>
    )
}
