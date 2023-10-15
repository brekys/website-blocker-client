import {SignOutButton} from '@/features/auth'
import {useSessionQuery} from '@/entities/session'

export function Profile() {
    const {data} = useSessionQuery()

    if (!data) {
        return null
    }

    return (
        <div className='flex gap-2 items-center'>
            {data?.email}
            <SignOutButton/>
        </div>
    )
}
