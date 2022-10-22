import { Spinner } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function UpdateContent() {

    let ACCESS_TOKEN = localStorage.getItem("access_token")
    let {iduser} = useParams()

    let username = localStorage.getItem("username")
    let navigate = useNavigate()

    const [updateData, setUpdateData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    function handlerInput(e) {
        let tempObj = {...updateData}
        tempObj[e.target.name] = e.target.value
        setUpdateData(tempObj)
    }

    const updateIt = async () => {
        try {
            let requestContent = await axios.put(`https://kawahedukasibackend.herokuapp.com/content/update/${iduser}`, updateData, {
                params: iduser,
                headers: {
                    'access_token': ACCESS_TOKEN,
                },
            })
            let final = await requestContent
            console.log(final)
            navigate(`/blog/${username}`)
        }
        catch(err) {
            console.log(err);
        }
    }


    const getData = async () => {
        try {
            setIsLoading(true)
            let requestContent = await axios.get(`https://kawahedukasibackend.herokuapp.com/content/data/${username}`)
            let final = await requestContent
            console.log(final)
            if (final.status === 200) {
              let newArr = final.data.filter(item => item.id == iduser)
              console.log(newArr);
              setUpdateData(newArr[0])
              setIsLoading(false)
            }
        }
        catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getData()
    }, [])

    function handlerSubmit(e) {
        e.preventDefault()
        updateIt()
    }

  if (isLoading) {
    return (
      <main className='w-[100%] h-[100vh] flex flex-col items-center justify-center py-8'>
          <Spinner
              thickness='4px'
              speed='0.65s'
              emptyColor='gray.200'
              color='gray.500'
              size='xl' 
          />
      </main>
    )
  } 

  return (
    <main className='w-[100%] min-h-[100vh] flex items-center justify-center p-8'>
        <div className='w-[100%] flex flex-col gap-4 items-center p-8'>
            <form onSubmit={handlerSubmit} className='grow min-w-[70%] flex-col flex items-start gap-4'>
                <div className='w-[100%] mb-4'>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Title</label>
                  <input value={updateData.name || ''} type='text' className='rounded-sm bg-gray-200 w-[100%] h-[3rem] text-black p-4' onChange={handlerInput} name='name' placeholder='Title'/>
                </div>
                <div className='mb-4 w-[100%]'>
                  <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Image URL</label>
                  <input value={updateData.image || ''}  type='text' className='rounded-sm bg-gray-200 w-[100%] h-[3rem] text-black p-4' onChange={handlerInput} name='image' placeholder='cdn.example.com'/>
                </div>
                <div className='mb-4 w-[100%]'>
                  <label htmlFor="description1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Author</label>
                  <input value={updateData.description1 || ''}  type='text' className='rounded-sm bg-gray-200 w-[100%] h-[3rem] text-black p-4' onChange={handlerInput} name='description1' placeholder='Author'/>
                </div>
                <div className='mb-4 w-[100%]'>
                  <label htmlFor="description2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Intro (Only show at homepage)</label>
                  <textarea value={updateData.description2 || ''}  className='rounded-sm bg-gray-200 w-[100%] h-[7rem] text-black p-4' onChange={handlerInput} name='description2' placeholder='Intro'/>
                </div>
                <div className='mb-4 w-[100%]'>
                  <label htmlFor="description3" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Body</label>
                  <textarea value={updateData.description3 || ''}  className='overflow-scroll rounded-sm bg-gray-200 w-[100%] h-[20rem] text-black p-4' onChange={handlerInput} name='description3' placeholder='Body'/>
                </div>
                <div className='mb-4 w-[100%]'>
                  <label htmlFor="description4" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tags</label>
                  <textarea value={updateData.description4 || ''}  className='overflow-scroll rounded-sm bg-gray-200 w-[100%] h-[8rem] text-black p-4' onChange={handlerInput} name='description4' placeholder='Tags'/>
                </div>
                <div className='mb-4 w-[100%]'>
                  <label htmlFor="description5" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Date</label>
                  <input value={updateData.description5 || ''} type='date' className='rounded-sm bg-gray-200 w-[100%] h-[3rem] text-black p-4' onChange={handlerInput} name='description5' placeholder='Date'/>
                </div>
                <div className='w-full flex gap-4'>
                  <button type='submit' className='bg-gray-900 border-2 border-gray-900 rounded-sm grow py-3 text-center text-white'>Update Post</button>
                  <button type='button' className='border-gray-900 text-gray-900 rounded-sm grow py-3 text-center border-2' onClick={() => navigate(`/blog/${username}`)}>Cancel</button>
                </div>
            </form>
        </div>
    </main>
  )
}
