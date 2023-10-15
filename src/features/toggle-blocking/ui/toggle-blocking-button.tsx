import {Button} from '@/shared/ui/button'
import {useToggleBlocking} from '../model/use-toggle-blocking'

export function ToggleBlockingButton({}) {
    const {isLoading, toggleBlocking, isBlockingEnabled, isReady} = useToggleBlocking()

    return (
        <Button
            disabled={isLoading || !isReady}
            onClick={toggleBlocking}
            variant={isBlockingEnabled ? 'secondary' : 'primary'}>
            {isBlockingEnabled ? 'Disable Blocking' : 'Enable Blocking'}
        </Button>
    )
}
