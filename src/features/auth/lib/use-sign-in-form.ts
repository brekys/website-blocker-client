import {useRouter} from 'next/router'
import {useForm} from 'react-hook-form'
import {useMutation} from 'react-query'
import {authControllerSignIn} from '@/shared/api/generated'
import {ROUTES} from '@/shared/constants/routes'

type SignInFields = {
    email: string
    password: string
}

export function useSignInForm() {
    const {push} = useRouter()

    const {register, handleSubmit} = useForm<SignInFields>()

    const {mutate, isLoading, error} = useMutation({
        mutationFn: authControllerSignIn,
        onSuccess: async () => push(ROUTES.HOME),
    })

    const errorMessage = error ? 'Incorrect email or password' : null

    return {
        register,
        handleSubmit: handleSubmit(fields => mutate(fields)),
        isLoading,
        errorMessage,
    }
}
