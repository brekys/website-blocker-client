import {Profile} from '@/widgets/profile'
import {ToggleBlockingButton} from '@/features/toggle-blocking'
import {Header} from '@/shared/ui/header'
import {AddBlockItemForm, BlockList} from '@/features/block-list'

export function HomePage() {
    return (
        <div className='min-h-screen grid grid-rows-layout grid-cols-layout gap-10'>
            <Header right={<Profile/>} className='col-span-2 border-b-2'/>
            <aside className='p-5'>
                <ToggleBlockingButton/>
            </aside>
            <main className='pt-10 px-5'>
                <h1 className='text-2xl mb-8'>Block List</h1>
                <AddBlockItemForm/>
                <BlockList className='mt-3'/>
            </main>
        </div>
    )
}
