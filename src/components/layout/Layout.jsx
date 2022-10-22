import React from 'react'

export default function Layout({children}) {
  return (
    <main className='antialiased bg-white overflow-hidden'>
        {children}
    </main>
  )
}
