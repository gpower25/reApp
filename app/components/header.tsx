import React from 'react'
import { Separator } from '@/components/ui/separator'

export const Header = () => {
    return <header className='flex h-16 items-center gap-3 bg-background p-4'>
        <Separator orientation='vertical' className='h-6 my-4'/>
        <div className="flex h-5 items-end space-x-4 text-sm">
            <div>Blog</div>
            <Separator orientation='vertical'/>
            <div>FAQ</div>
            <Separator orientation='vertical'/>
            <div>My profile</div>
        </div>
    </header>
}