import {useForm} from 'react-hook-form'
import {AddBlockItemData, useAddBlockItemMutation} from '@/entities/block-list'
import {AddBlockItemDtoType} from '@/shared/api/generated'

export function useAddBlockItemForm() {
    const {mutate, isLoading} = useAddBlockItemMutation()

    const {handleSubmit, register, watch, reset} = useForm<AddBlockItemData>({
        defaultValues: {type: AddBlockItemDtoType.Website},
    })

    return {
        isLoading,
        handleSubmit: handleSubmit(data => mutate(data, {onSuccess: () => reset()})),
        register,
        type: watch('type'),
    }
}
