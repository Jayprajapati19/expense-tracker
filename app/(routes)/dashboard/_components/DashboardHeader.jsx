import { UserButton } from '@clerk/nextjs'
import { Search, SearchIcon } from 'lucide-react'
import React from 'react'

function DashboardHeader() {
    return (
        <div className=' p-5 shadow-sm border-b flex justify-between '>
            <div>

                <input
                    type="text"
                    class="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Search..." />
            </div>


            <div>
                <UserButton />
            </div>
        </div >

    )
}

export default DashboardHeader