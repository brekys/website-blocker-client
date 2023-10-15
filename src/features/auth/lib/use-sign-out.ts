import {useRouter} from 'next/router'
import {useMutation} from 'react-query'
import {authControllerSignOut} from '@/shared/api/generated'
import {ROUTES} from '@/shared/constants/routes'
import {useResetSession} from '@/entities/session'

export function useSignOut() {
    const {push} = useRouter()

    const {resetSession} = useResetSession()

    const {mutate, isLoading} = useMutation({
        mutationFn: authControllerSignOut,
        async onSuccess () {
            push(ROUTES.SIGN_IN)

            resetSession()
        },
    })

    return {
        signOutHandler: () => mutate({}),
        isLoading,
    }
}
