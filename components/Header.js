import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <div>
        {/* Left */}

        <div className='flex items-center justify-between max-w-6xl'>
            <div className='cursor-pointer h-24 w-24 relative hidden lg:inline-grid'>
                <Image
                    src="https://cdn.pixabay.com/photo/2016/08/15/01/29/instagram-1594387_1280.png" 
                    layout='fill'
                    alt="logo-name"
                    className='object-contain'
                />
            </div>
            <div className='cursor-pointer h-24 w-10 relative lg:hidden'>
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/800px-Instagram-Icon.png" 
                    layout='fill'
                    alt="logo"
                    className='object-contain'
                />
            </div>
            <h1>Right side</h1>
        </div>

        {/* Middle */}

        {/* Right */}
    </div>
  )
}