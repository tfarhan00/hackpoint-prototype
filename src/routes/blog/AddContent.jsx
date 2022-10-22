import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DummyLayout from '../../components/blog/DummyLayout'
import { Spinner } from '@chakra-ui/react'

export default function AddContent() {

    let ACCESS_TOKEN = localStorage.getItem("access_token")
    let username = localStorage.getItem("username")
    let navigate = useNavigate()

    const [isUrlImage, setIsUrlImage] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const [postData, setPostData] = useState({
      name: 'Title',
      image: '',
      description1: 'Author',
      description2: '',
      description3: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem quam ad praesentium itaque nam voluptatum cumque earum, fuga pariatur officia vel delectus, cupiditate sunt nostrum! Deserunt impedit et omnis dolore fugiat enim provident asperiores harum architecto dignissimos ratione consequatur nesciunt nemo perferendis illo, tempore assumenda sit. Hic nam dolores accusamus.',
      description4: '#tags',
      description5: '',
    })


    async function addContent() {
        try {
          setIsLoading(true)
          let requestContent = await axios.post('https://kawahedukasibackend.herokuapp.com/content/create', postData, {
            headers: {
              'access_token': ACCESS_TOKEN,
            },
          })
          let final = await requestContent
          if (final.status === 201) {
                setIsLoading(false)
                navigate(`/blog/${username}`)
            }
        }
        catch(err) {
            console.log(err);
        }
      }

      function handlerInput(e) {
        let postObj = {...postData}
        postObj[e.target.name] = e.target.value
        setPostData(postObj)
      }

      function handleBody(e) {
        setPostData({...postData, description3: e})
      }

      function handlerSubmit(e) {
        e.preventDefault()
        addContent()
      }

      function handleUrlImage() {
        setIsUrlImage(!isUrlImage)
      }

      useEffect(() => {
        console.log("Let's add some content")
      }, [])

      const handlerFile = (e) => {
        let file = e.target.files[0]
        setPostData({...postData, image: file})
      }

  return (
    <main className='w-[100%] min-h-[100vh] flex items-start justify-center'>
        <div className='w-[100%] h-auto bg-gray-100 flex gap-4 items-start px-8 py-8'>
          <DummyLayout postData={postData} />
            <form onSubmit={handlerSubmit} className='min-w-[45%] flex-col flex items-start gap-4'>
                <div className='w-[100%] mb-4'>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Title</label>
                  <input value={postData.name} type='text' className='rounded-sm w-[100%] h-[3rem] bg-white text-black p-4' onChange={handlerInput} name='name' placeholder='Title'/>
                </div>
                <div className='mb-4 w-[100%]'>
                  <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{isUrlImage ? 'Image URL' : 'Image File Upload'}</label>
                  <div className='w-[100%] flex items-center gap-4'>
                    <div className='w-[80%]'>
                      {isUrlImage ? (
                        <input value={postData.image}  type='text' className='flex items-center rounded-sm w-[100%] h-[3rem] bg-white text-black p-4' onChange={handlerInput} name='image' placeholder='cdn.example.com'/>
                      ) : (
                        <div>
                          <label htmlFor='files' className='cursor-pointer px-2 py-2 h-[3rem] bg-white rounded-sm flex items-center gap-4 justify-start'><i class="bi bi-file-earmark-plus"></i>Currently Unavailable</label>
                          <input disabled id="files" type='file' name='image' className='hidden text-black py-2' onChange={handlerFile}/>
                        </div>
                      )}
                       
                    </div>
                    <button className='bg-gray-900 grow py-2 px-4 rounded-sm text-white' type='button' onClick={handleUrlImage}>Toggle</button>
                  </div>
                </div>
                <div className='mb-4 w-[100%]'>
                  <label htmlFor="description1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Author</label>
                  <input value={postData.description1}  type='text' className='rounded-sm w-[100%] h-[3rem] bg-white text-black p-4' onChange={handlerInput} name='description1' placeholder='Author'/>
                </div>
                <div className='mb-4 w-[100%]'>
                  <label htmlFor="description2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Intro (Only show at homepage)</label>
                  <textarea value={postData.description2}  className='rounded-sm w-[100%] h-[6rem] bg-white text-black p-4' onChange={handlerInput} name='description2' placeholder='Intro'/>
                </div>
                <div className='mb-4 w-[100%]'>
                  <label htmlFor="description2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Body</label>
                  <textarea value={postData.description3}  className='overflow-scroll rounded-sm w-[100%] h-[20rem] bg-white text-black p-4' onChange={handlerInput} name='description3' placeholder='You can put any HTML & Markdown here !'/>
                </div>
                <div className='mb-4 w-[100%]'>
                  <label htmlFor="description2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tags</label>
                  <textarea value={postData.description4}  className='overflow-scroll rounded-sm w-[100%] h-[5rem] bg-white text-black p-4' onChange={handlerInput} name='description4' placeholder='Tags'/>
                </div>
                <div className='mb-4 w-[100%]'>
                  <label htmlFor="description3" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Date</label>
                  <input value={postData.description5} type='date' className='rounded-sm w-[100%] h-[3rem] bg-white text-black p-4' onChange={handlerInput} name='description5' placeholder='Date'/>
                </div>
                <button type='submit' className='bg-gray-900 rounded-sm w-full py-3 text-center text-white'>{isLoading ? <Spinner /> : "Add Post"}</button>
            </form>
        </div>
    </main>
  )
}
