import React from 'react'
import { Link } from 'react-router-dom'

export default function NoPost() {
  return (
    <React.Fragment>
        <main className='w-[100%] min-h-[100vh] flex flex-col justify-center gap-4 items-center py-8'>
            <h1 className='font-bold text-4xl'>No Post Yet</h1>
        </main>
    </React.Fragment>
  )
}
