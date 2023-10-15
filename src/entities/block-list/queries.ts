import {useMutation, useQuery, useQueryClient} from 'react-query'
import {
    blockListControllerAddBlockListItem,
    blockListControllerGetList,
    blockListControllerRemoveBlockItem,
} from '@/shared/api/generated'

const blockListKey: unknown[] = ['block-list']

export function useBlockListQuery({q}: { q?: string }) {
    return useQuery({
        queryKey: blockListKey.concat([{q}]),
        queryFn: () => blockListControllerGetList({q}),
        keepPreviousData: true,
    })
}

export function useAddBlockItemMutation() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: blockListControllerAddBlockListItem,
        onSettled: async () => await queryClient.invalidateQueries(blockListKey),
    })
}

export function useRemoveBlockItemMutation() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: blockListControllerRemoveBlockItem,
        onSettled: async () => await queryClient.invalidateQueries(blockListKey),
    })
}
