import Image from 'next/image'
import React from 'react'
import { MagnifyingGlassIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/solid";

export default function Header() {
  return (

        <div className='shadow-sm border-b sticky top-0 bg-white z-30'>
            <div className='flex items-center justify-between max-w-6xl mx-4 xl:mx-auto'>

                {/* Left */}
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

                {/* Middle */}

                <div className='relative mt-1'>
                <div className='absolute top-2 left-2'>
                    <MagnifyingGlassIcon className='h-5 text-gray-500' />
                </div>
                <input type='text' placeholder='Search' className='bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md' name="" id="" />
                </div>

                {/* Right */}

                <div className='flex space-x-4 items-center'>
                <HomeIcon className='hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out' />
                <PlusCircleIcon className='h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out' />
                <Image src='https://cdn-icons-png.flaticon.com/512/1198/1198343.png' className='h-10 rounded-full cursor-pointer' alt='perfil' width={50} height={50} />
                </div>

            </div>
        </div>

  )
}