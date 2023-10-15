import {ReactNode} from 'react'

export function FormPage({header, title, form}: { header?: ReactNode, title?: string, form?: ReactNode }) {
    return (
        <div className='min-h-screen flex flex-col bg-slate-100'>
            {header}
            <main className='grow flex flex-col pt-24'>
                <div
                    className='rounded-xl border border-slate-300 px-14 py-14 max-w-[400px] w-full bg-white self-center'
                >
                    <h1 className='text-2xl text-center mb-6'>{title}</h1>
                    {form}
                </div>
            </main>
        </div>
    )
}
