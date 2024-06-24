"use client"
import { BadgeIndianRupee, LayoutGrid, ReceiptText, ShieldCheck } from 'lucide-react'
import { UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Sidenav() {
    const menuList = [
        {
            id: 1,
            name: 'Dashboard',
            icon: LayoutGrid,
            path: '/dashboard'

        },
        {
            id: 2,
            name: 'Budgets',
            icon: BadgeIndianRupee,
            path: '/dashboard/budgets'
        },
        {
            id: 3,
            name: 'Expenses',
            icon: ReceiptText,
            path: '/dashboard/expenses'
        },
        {
            id: 4,
            name: 'Upgrade',
            icon: ShieldCheck,
            path: '/dashboard/upgrade'
        }
    ]

    const path = usePathname();

    useEffect(() => {
        console.log(path);
    }, [path])

    return (
        <div className='h-screen p-5 border shadow-sm '>
            <Image src={'/logo.svg'}
                alt='logo'
                width={225}
                height={100}
            />
            <div className='mt-5 '>
                {menuList.map((menu, index) => (
                    <Link href={menu.path}>
                        <h2 className={`flex gap-2 items-center text-gray-600 font-medium p-5 mb-2 cursor-pointer rounded-md
                    hover:text-primary hover:bg-blue-200
                    ${path == menu.path && 'text-primary bg-blue-200'}`}
                        >
                            <menu.icon />
                            {menu.name}
                        </h2>
                    </Link>
                ))}
            </div>

            <div className='fixed bottom-10 p-5 flex gap-2 items-center   text-gray-600  hover:text-primary hover:bg-blue-200'>
                <UserButton />
                Profile
            </div>

        </div >
    )
}

export default Sidenav