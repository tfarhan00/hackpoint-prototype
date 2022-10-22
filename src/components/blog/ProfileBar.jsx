import { Avatar, Image } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import banner from '../../assets/bubble.jpg'
import DeleteModal from './DeleteModal'

export default function ProfileBar({postData}) {
 

  return (
    <aside className='w-[20rem] h-[100%] p-4 hidden lg:flex flex-col items-center'>
        {/* The Card */}
        <div className='relative w-[100%] h-auto flex flex-col items-center rounded-sm border-[1px] border-gray-200 overflow-hidden gap-4'>
            <Image src={banner} fallbackSrc='https://via.placeholder.com/1080' className='w-full h-12 object-cover rounded-sm' />
            <div className='flex flex-col p-4 gap-4 items-center w-full'>
            <Avatar name={postData.description1} src='ww.goo' size='lg' />
            <p className='font-medium'>{postData.description1}</p>
            <button className='bg-gray-900 rounded-sm w-[90%] text-white font-bold py-3'>Follow</button>               
            </div>
        </div>     
    </aside>
  )
}
