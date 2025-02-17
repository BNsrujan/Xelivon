import Link from 'next/link'
import React from 'react'
import { ShinyButton } from "@/components/magicui/shiny-button";

function Navbar() {
    return (
        <div
            className="fixed top-0 m-4 px-12 rounded-2xl bg-white text-black  p-8 w-full flex justify-between items-center overflow-x-hidden z-50"
        >
            <div><h1 className='font-bold'>Axearc</h1></div>
            <ul className='flex gap-20 items-center'>
                <li>
                    <Link href="/servis">Services</Link>
                </li>
                <li>
                    <Link href="/servis">Blog's</Link>
                </li>
                <li>
                    <Link href="/servis">Services</Link>
                </li>
                <li>
                    <Link href="/servis">Services</Link>
                </li>

            </ul>
            <div className='pr-10'>
                <ShinyButton className=''> Button</ShinyButton>
            </div>

        </div>
    )
}

export default Navbar