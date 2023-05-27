import Image from 'next/image'

import {BsBell, BsBookmark, BsEnvelope, BsTwitter} from "react-icons/bs"
import {BiHomeCircle} from "react-icons/bi"
import {FaHashtag} from "react-icons/fa"
import {RiFileListLine} from "react-icons/ri"
import {AiOutlineUser} from "react-icons/ai"
import {CiCircleMore} from "react-icons/ci"
import React from 'react'
import FeedCard from '@/components/FeedCard'


interface TwitterSideBarButtons{
  title:string
  icon: React.ReactNode
}

const sideBarMenuItems:TwitterSideBarButtons[]=[
  {
    title:"Home",
    icon:<BiHomeCircle/>
  },
  {
    title:"Explore",
    icon:<FaHashtag/>
  },
  {
    title:"Notifications",
    icon:<BsBell/>
  },
  {
    title:"Messages",
    icon:<BsEnvelope/>
  },
  {
    title:"Lists",
    icon:<RiFileListLine/>
  },
  
  {
    title:"Bookmarks",
    icon:<BsBookmark/>
  },
  
  {
    title:"Profile",
    icon:<AiOutlineUser/>
  },
  {
    title:"More",
    icon:<CiCircleMore/>
  },

]
export default function Home() {
  return (
   <div >
    <div className='grid grid-cols-12 h-screen  px-56'>
      <div className='col-span-3 [&::-webkit-scrollbar]:hidden  pt-2 ml-20'>
        <div className='text-4xl  h-fit w-fit hover:bg-gray-600 rounded-full p-2 cursor-pointer transition-all'>

        <BsTwitter />

        </div>
        <div className='mt-4 '>
          <ul>
            {sideBarMenuItems.map(item=><li key={item.title} className='flex items-center gap-4 text-1xl font-semibold  hover:bg-gray-900 w-fit rounded-full px-4 py-2 cursor-pointer'><span>{item.icon}</span><span>{item.title}</span></li>)}
          </ul>
          <div className='mt-5 px-3'>
          <button className='bg-[#1d9bf0]   p-4 rounded-full w-full  font-semibold'>Tweet</button>

          </div>

        </div>
      </div>
      <div className='col-span-5 border-r-[1px] border-l-[1px]   border-gray-600'>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        </div>
      <div className='col-span-4 border border-gray-600'>Right Side</div>
    </div>
   </div>
  )
}
