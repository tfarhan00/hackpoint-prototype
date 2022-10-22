import { Avatar, Image } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import DeleteModal from './DeleteModal'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

export default function DetailCard({postData}) {


  return (
   
  <React.Fragment>
    <main className='flex flex-1 overflow-hidden h-[100vh]'>
      <div className='w-[100%] h-[100%] overflow-y-scroll overflow-x-auto flex flex-col justify-start items-center py-2 gap-4'>

      <div className='bg-white w-[95%] flex flex-col items-center gap-4 rounded-sm border-[1px] border-gray-200'>

            <div className='w-full h-[11rem] md:h-[20rem] flex justify-center items-center rounded-sm'>
              <Image src={postData.image} fallbackSrc='https://via.placeholder.com/1080' className='w-full h-full object-cover rounded-sm'/>
            </div>
            
        <div className='w-full h-auto overflow-hidden rounded-sm flex flex-col items-start gap-2 p-8'>
            <div className='w-full text-3xl font-bold mb-4'>{postData.name}</div>
            <div id='author' className='w-full text-lg font-medium flex items-center gap-3 mb-8'>
              <Avatar name={postData.description1} size='sm' />
              <p>{postData.description1}</p>
              </div>
            <ReactMarkdown children={postData.description3} rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]} className='prose'/>
            <div className='w-full font-medium text-lg'>{postData.description4}</div>
            <div className='w-full font-medium text-lg'>Sep 24 | {postData.description5}</div>       
        </div>

      </div>
      </div>
      </main>
      
    </React.Fragment>
  )
}
