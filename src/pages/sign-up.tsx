import {SignUpForm} from '@/features/auth'
import {Header} from '@/shared/ui/header'
import {FormPage} from '@/shared/ui/layouts/form-page'

export function SignUpPage() {
    return (
        <FormPage
            header={<Header/>}
            title='Sign Up'
            form={<SignUpForm/>}
        />
    )
}
