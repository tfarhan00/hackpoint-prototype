import { Avatar, Image } from '@chakra-ui/react'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

export default function DummyLayout({postData}) {
  return (
    <React.Fragment>
        <div className='grow flex flex-col items-start gap-4 p-4 rounded-sm'>
            {/* <h1 className='font-bold text-3xl'>Blog Layout</h1> */}

            <div className='bg-white grow flex flex-col items-center gap-4 rounded-sm border-[1px] border-gray-200'>
            <div className='w-full h-[11rem] md:h-[20rem] flex justify-center items-center rounded-sm'>
              <Image src={postData.image} fallbackSrc='https://via.placeholder.com/1080' className='w-full h-full object-cover rounded-sm'/>
            </div>
            
        <div className='w-full h-auto overflow-hidden rounded-sm flex flex-col items-start gap-2 p-8'>
            <div className='w-full text-3xl font-bold mb-4'>{postData.name}</div>
            <div id='author' className='w-full text-lg font-medium flex items-center gap-3'>
              <Avatar name={postData.description1} size='sm' />
              <p>{postData.description1}</p>
              </div>
            <div id='intro' className='w-full font-medium text-xl'>{postData.description2}</div>
            <ReactMarkdown children={postData.description3} rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]} className='prose'/>
            <div className='w-full font-medium text-lg'>{postData.description4}</div>
            <div className='w-full font-medium text-lg'>Sep 24 | {postData.description5}</div>
        </div>

        </div>
        </div>
    </React.Fragment>
  )
}
