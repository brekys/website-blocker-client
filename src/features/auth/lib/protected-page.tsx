import {PropsWithChildren, ReactElement} from 'react'
import {PageSpinner} from '@/shared/ui/page-spinner'
import {useSessionQuery} from '@/entities/session'

export function protectedPage<P>(Component: (props: P) => ReactElement) {
    return function ProtectedPage(props: PropsWithChildren<P>) {
        const {isLoading} = useSessionQuery()

        return isLoading ? <PageSpinner/> : <Component {...props}/>
    }
}
