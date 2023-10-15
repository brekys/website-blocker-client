import {Button} from '@/shared/ui/button'
import {useSignOut} from '../lib/use-sign-out'

export function SignOutButton() {
    const {signOutHandler, isLoading} = useSignOut()

    return <Button onClick={signOutHandler} disabled={isLoading} variant='primary'>Sign Out</Button>
}
