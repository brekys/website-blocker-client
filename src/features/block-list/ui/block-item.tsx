import {AddBlockItemData, useRemoveBlockItemMutation} from '@/entities/block-list'
import {Trash} from '@/shared/icons/components/trash'

export function BlockItem({data, id, type}: AddBlockItemData & { id: number }) {
    const {mutate, isLoading} = useRemoveBlockItemMutation()

    const onClickHandler = () => mutate(id)

    return (
        <div className='flex gap-2'>
            <div>
                <div className='text-lg'>{data}</div>
                <div className='text-slate-500'>{type}</div>
            </div>
            <button
                onClick={onClickHandler}
                disabled={isLoading}
                className='ml-auto text-rose-500 hover:text-rose-600 disabled:opacity-50 p-1'
            >
                <Trash className='w-5 h-5'/>
            </button>
        </div>
    )
}
