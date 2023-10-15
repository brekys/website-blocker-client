import {useQuery, useQueryClient} from 'react-query'
import {authControllerGetSessionInfo} from '@/shared/api/generated'
import {ROUTES} from '@/shared/constants/routes'
import {useRouter} from 'next/router'

const sessionKey = ['session']

export function useSessionQuery() {
    const {replace} = useRouter()

    return useQuery({
        queryKey: sessionKey,
        queryFn: authControllerGetSessionInfo,
        retry: 0,
        staleTime: 5 * 60 * 1000,
        onError: async () => replace(ROUTES.SIGN_IN),
    })
}

export function useResetSession() {
    const queryClient = useQueryClient()

    return {
        resetSession: () => queryClient.removeQueries()
    }
}
