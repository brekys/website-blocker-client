import {ChangeEvent} from 'react'
import {BlockItem} from "./block-item";
import {useBlockItems} from '../model/use-block-items'
import {TextField} from '@/shared/ui/text-field'
import {Spinner} from '@/shared/ui/spinner'

export function BlockList({className}: { className?: string }) {
    const {items, isLoading, query, setQuery} = useBlockItems()

    const isEmpty = !isLoading && !items.length

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => setQuery(e.currentTarget.value)

    return (
        <div className={className}>
            <TextField
                label='Search'
                inputProps={{value: query, onChange: changeHandler, placeholder: 'Enter text'}}
                className='mb-2'
            />
            <div className='rounded-xl bg-slate-100/50 px-10 py-6 flex flex-col gap-3'>
                {isLoading && <Spinner className='text-teal-600 w-10 h-10 mx-auto'/>}
                {isEmpty
                    ? <div className='text-xl py-1 text-center'>List is empty</div>
                    : items.map(item => <BlockItem key={item.id} {...item}/>)
                }
            </div>
        </div>
    )
}
