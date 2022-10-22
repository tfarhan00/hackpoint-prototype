import { Spinner } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DetailCard from '../../components/blog/DetailCard'
import ProfileBar from '../../components/blog/ProfileBar'
import ReactionBar from '../../components/blog/ReactionBar'

export default function BlogDetail() {

  let {iduser} = useParams()

  let username = localStorage.getItem("username")

  const [postData, setPostData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [randomNum, setRandomNum] = useState(null)

  const getData = async () => {
      try {
        setIsLoading(true)
        let requestContent = await axios.get(`https://kawahedukasibackend.herokuapp.com/content/data/${username}`)
        let final = await requestContent
        console.log(final)
        if (final.status === 200) {
          let newArr = final.data.filter(item => item.id == iduser)
          console.log(newArr);
          setPostData(newArr[0])
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
    <React.Fragment>
      <div className='w-[100%] h-[100vh] overflow-hidden flex gap-2'>
      <ReactionBar postData={postData}/>
      <DetailCard postData={postData} />
      <ProfileBar postData={postData} />
      </div>
    </React.Fragment>
  )
}
