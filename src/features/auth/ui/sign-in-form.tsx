import {TextField} from '@/shared/ui/text-field'
import {Button} from '@/shared/ui/button'
import {ROUTES} from '@/shared/constants/routes'
import {Link} from '@/shared/ui/link'
import {useSignInForm} from '../lib/use-sign-in-form'

export function SignInForm() {
    const {register, handleSubmit, isLoading, errorMessage} = useSignInForm();

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <TextField
                label='Email'
                inputProps={{
                    type: 'email',
                    autoComplete: 'email',
                    ...register('email', {required: true})
                }}
            />
            <TextField
                label='Password'
                inputProps={{
                    type: 'password',
                    autoComplete: 'current-password',
                    ...register('password', {required: true})
                }}
            />
            <Button disabled={isLoading} className='mb-2' variant='primary'>Sign In</Button>
            {errorMessage && (
                <div className='p-1 text-center text-rose-500 rounded border-2 border-rose-500'>
                    {errorMessage}
                </div>
            )}
            <Link href={ROUTES.SIGN_UP} className='text-center'>Sign Up</Link>
        </form>
    )
}
