"use client"
import Link from 'next/link'
import { File, Shield, Upload } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

function SideNav({closeSideBar}) {
    const menuList=[
        {
            id:1,
            name:'Upload',
            icon:Upload,
            path:'/upload'
        },
        {
            id:2,
            name:'Files',
            icon:File,
            path:'/files'
        },
        {
            id:3,
            name:'Upgrade',
            icon:Shield,
            path:'/upgrade'
        },

   ]

    const [activeIndex,setActiveIndex]=useState(0);
  return (
    <div className='shadow-sm border-r h-full bg-blue-100 gap-y-1'>

        <div className='p-5 '>
            <div className='hidden md:block'>
            <Link href={process.env.NEXT_PUBLIC_DOMAIN}>
            <Image src='/logo.svg' width={150}
            height={100} alt='logo'/>
            </Link> 
        </div>
<div className='block md:hidden'>

<Link href={process.env.NEXT_PUBLIC_DOMAIN}>
            <Image src='/banner.svg' width={30} height={20} alt='logo' />
          </Link>
</div>
</div>
        <div className='flex flex-col float-left w-full'>
        {menuList.map((item,index)=>(
            <Link href={item.path} key={index}>
                <button 
                key={index}
                className={`flex gap-2 p-4 px-6
                hover:bg-white w-full
                text-gray-500
                ${activeIndex==index?'bg-blue-50 text-primary':null}`}
                onClick={()=>{setActiveIndex(index);closeSideBar()}}
                >
                    <item.icon/>
                    <h2>{item.name}</h2>
                </button>
            </Link>
        ))}
        </div>
    </div>
  )
}

export default SideNav