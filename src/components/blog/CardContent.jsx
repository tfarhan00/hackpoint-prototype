import { Avatar, Image } from '@chakra-ui/react'
import React  from 'react'
import { Link } from 'react-router-dom'

export default function CardContent({data, index}) {

  return (
    <React.Fragment>
        <Link to={`/blog/details/${data.id}`} className={`${index == 0 ? "col-span-2 md:flex-col-reverse" : null} w-full flex-col-reverse md:flex-row bg-white flex items-center justify-between gap-4 p-4 rounded-sm`}>
            <div className={`${index == 0 ? "md:w-full" : null} w-full md:w-[70%] h-auto overflow-hidden rounded-sm flex flex-col items-start gap-1`}>
                <div className='w-full text-sm flex items-center gap-2'><Avatar name={data.description1} size='xs' />{data.description1}</div>
                <div className='w-full text-2xl font-[600]'>{data.name.slice(0, 30)}...</div>
                <div className='w-full text-sm font-normal'>{data.description2.slice(0, 110)}...</div>
                <div className='w-full text-sm font-normal'>{data.description4}</div>
                <div className='w-full text-sm font-normal gap-2 flex items-center justify-between'>
                  <p>Date | {data.description5}</p>
                  <i class="text-gray-900 text-xl bi bi-bookmark-star"></i>
                </div>
            </div>
              <div className={`${index == 0 ? "md:w-full" : null} w-full md:w-64 h-48 flex justify-center items-center rounded-sm`}>
                  <Image src={data.image} fallbackSrc='https://via.placeholder.com/1080' alt='pict' className='w-full h-full object-cover rounded-sm' />
              </div>
        </Link>
    </React.Fragment>
  )
}
