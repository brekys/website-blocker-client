import {SignInForm} from '@/features/auth'
import {Header} from '@/shared/ui/header'
import {FormPage} from '@/shared/ui/layouts/form-page'

export function SignInPage() {
    return (
        <FormPage
            header={<Header/>}
            title='Sign In'
            form={<SignInForm/>}
        />
    )
}
