import {useRouter} from 'next/router'
import {useForm} from 'react-hook-form'
import {useMutation} from 'react-query'
import {authControllerSignUp} from '@/shared/api/generated'
import {ROUTES} from '@/shared/constants/routes'

type SignUpFields = {
    email: string
    password: string
}

export function useSignUpForm() {
    const {push} = useRouter()

    const {register, handleSubmit} = useForm<SignUpFields>()

    const {mutate, isLoading, error} = useMutation({
        mutationFn: authControllerSignUp,
        onSuccess: async () => push(ROUTES.HOME),
    })

    const errorMessage = error ? 'Email already exists' : null

    return {
        register,
        handleSubmit: handleSubmit(fields => mutate(fields)),
        isLoading,
        errorMessage,
    }
}
