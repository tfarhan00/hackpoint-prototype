import React from 'react'
import CoursesList from '../../data/CoursesList'

export default function AllCourses() {
  return (
    <div className='mt-4 w-[100%] flex flex-col items-center gap-4'>
        <div className='w-[95%] flex'>
            <div className='flex flex-col'>
                <h1 className='font-[600] text-3xl'>Courses</h1>
                <p className='text-gray-600'>Pick your preferred one.</p>
            </div>
        </div>
        <div className='grid w-[95%] gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            {CoursesList && CoursesList.map(item => {
                return (
                    <div key={item.id} className='w-[100%] break-inside-avoid mb-4 bg-white rounded-xs flex flex-col items-start justify-between gap-4'>
                        <img src={item.img} alt='pict' className='w-[100%] rounded-xs object-cover' />
                        <div className='w-[100%] flex items-center justify-between'>
                            <div className={`${(item.category === 'Expert') ? 'bg-orange-200 text-orange-500' : (item.category === 'Beginner') ? 'bg-green-100 text-green-900' : (item.category === 'Intermediate') ? 'bg-yellow-100 text-yellow-500' : 'text-gray-800'} rounded-xs px-4 py-1 text-sm`}>{item.category}</div>
                            {(item.bestSeller) ? (<div className='bg-gray-900 text-white rounded-xs px-3 py-1 text-xs flex items-center gap-3'><i class="bi bi-bookmark-star-fill"></i><p>Best Seller</p></div>) : null}
                        </div>
                        <div className='w-[100%] flex flex-col'>
                            <h1 className='font-bold text-xl'>{item.name}</h1>
                            <div className='w-[100%] flex py-1 items-center justify-between'>
                                <div className='flex items-center gap-2'><span>{item.mentor}</span>{(item.verified) ? (<i class="text-blue-500 bi bi-patch-check-fill"></i>) : null}</div>
                                <span className='border-[1px] border-gray-900 rounded-full px-4 py-1 text-gray-900 text-xs'>{item.totalHours} hours</span>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <p className="ml-2 text-xs font-bold text-gray-900 dark:text-white">{item.rating}</p>
                            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                            <div className="text-xs font-medium text-gray-900 underline hover:no-underline dark:text-white">{item.totalRating} reviews</div>
                        </div>
                        <div className='w-[100%] flex items-center justify-between'>
                            <button className='w-[40%] bg-gray-900 px-4 py-2 rounded-xs text-xs text-white border-[1px] border-gray-900 transition-all duration-300 hover:bg-white hover:text-gray-900'>Enroll Now</button>
                            <p className='text-base font-medium'>Rp {item.price}</p>
                        </div>                     
                    </div>
                )
            })}
        </div>
    </div>
  )
}
