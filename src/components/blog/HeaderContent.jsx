import React from 'react'
import { Link } from 'react-router-dom'
import TopBlog from './TopBlog'

export default function HeaderContent({handleSearch}) {
  return (
    <main className='w-[100%] bg-white flex flex-col items-center justify-between'>
      <TopBlog />
      <div className='w-[100%] h-16 bg-white flex items-center justify-between px-8'>
          <div>
              <p className='font-medium text-2xl'>The Blog</p>
          </div>
          <div className='flex items-center gap-4'>
            <div className='flex items-center gap-4 bg-white border-2 border-gray-300 px-4'>
              <input onChange={handleSearch} type='text' className=" text-gray-900 text-sm rounded-sm outline-none block w-full p-2" required="" />
              <i class="bi bi-search"></i>
            </div>
              <Link to='/blog/create'>
                  <button className='px-4 py-2 rounded-sm bg-gray-900 text-white flex items-center gap-2'>Add Post <i className="bi bi-plus-circle-fill"></i></button>
              </Link>
          </div>
      </div>
    </main>
  )
}
