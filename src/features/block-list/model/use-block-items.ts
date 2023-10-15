import {useState} from 'react'
import {useBlockListQuery} from '@/entities/block-list'
import {useDebouncedValue} from '@/shared/lib/useDebauncedValue'

export function useBlockItems() {
    const [query, setQuery] = useState<string>('')

    const {data, isLoading} = useBlockListQuery({q: useDebouncedValue(query, 500)})

    return {
        items: data?.items ?? [],
        isLoading,
        query,
        setQuery,
    }
}
