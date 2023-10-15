import {useAddBlockItemForm} from '../model/use-add-block-item-form'
import {Select} from '@/shared/ui/select'
import {TextField} from '@/shared/ui/text-field'
import {Button} from '@/shared/ui/button'
import {AddBlockItemDtoType} from '@/shared/api/generated'

const typeOptions = [
    {label: 'Website', value: AddBlockItemDtoType.Website},
    {label: 'KeyWord', value: AddBlockItemDtoType.KeyWord},
]

export function AddBlockItemForm() {
    const {handleSubmit, isLoading, register, type} = useAddBlockItemForm()

    return (
        <form onSubmit={handleSubmit} className='flex gap-2'>
            <Select selectProps={{...register('type')}} options={typeOptions} className='grow min-w-[200px]'/>
            <TextField
                inputProps={{
                    placeholder: type === 'KeyWord' ? 'Enter Key Word' : 'Enter Website',
                    ...register('data', {required: true}),
                }}
                className='flex-grow'
            />
            <Button disabled={isLoading} variant='primary'>Add Block Item</Button>
        </form>
    )
}
