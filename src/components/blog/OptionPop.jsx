import { Button, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import DeleteModal from './DeleteModal'

export default function OptionPop({postData}) {
     
  let ACCESS_TOKEN = localStorage.getItem("access_token")
  let username = localStorage.getItem("username")
  let navigate = useNavigate()

  const [openModal, setOpenModal] = useState(false)
  const [delLoading, setDelLoading] = useState(false)

  const deletePost = async () => {
    try {
      setDelLoading(true)
      let requestContent = await axios.delete(`https://kawahedukasibackend.herokuapp.com/content/delete/${postData.id}`, {
          params: postData.id,
          headers: {
              'access_token': ACCESS_TOKEN,
          },
      })
      let final = await requestContent
      console.log(final)
      setDelLoading(false)
      navigate(`/blog/${username}`)
  }
  catch(err) {
      console.log(err);
  }
  }

  return (
    <React.Fragment>
        <Popover placement='right'>
        <PopoverTrigger>
            <Button><i class="bi bi-three-dots"></i></Button>
        </PopoverTrigger>
        <PopoverContent w='12rem' p={3}>
            <PopoverArrow/>
            <PopoverBody>
            <div className='w-full flex flex-col items-start justify-center gap-4'>
              <button className='w-full flex gap-4 items-center justify-between'>Copy Link<i class="bi bi-files"></i></button>
              <button className='w-full flex gap-4 items-center justify-between'>Share<i class="bi bi-share-fill"></i></button>
              <Link to={`/blog/update/${postData.id}`}>
                <button className=' grow text-center rounded-sm text-gray-900'>Update</button>
              </Link>
              <button onClick={() => setOpenModal(!openModal)} className=' text-red-500 rounded-sm text-center'>Delete</button>
            </div>
            </PopoverBody>
        </PopoverContent>
        </Popover>
        {openModal && <DeleteModal deletePost={deletePost} delLoading={delLoading} />}
    </React.Fragment>
  )
}
