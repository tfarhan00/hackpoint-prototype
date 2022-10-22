import { Spinner, useToast } from '@chakra-ui/react'
import axios from 'axios'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CardContent from '../../components/blog/CardContent'
import HeaderContent from '../../components/blog/HeaderContent'
import NoPost from '../../components/blog/NoPost'
import Pagination from '../../components/blog/Pagination'

export default function UserContent() {

    let toast = useToast()

  let {username} = useParams()

  const [contentData, setContentData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [filteredData, setFilteredData] = useState(contentData)

  const getContent = async () => {
    axios.get(`https://kawahedukasibackend.herokuapp.com/content/data/bigmouse`)
    .then(response => response.data)
    .then(data => {
        setContentData(data)
        setFilteredData(contentData)
        setIsLoading(false)
    })
    .catch(err => console.log(err))
}

const handleSearch = (e) => {
    let value = e.target.value.toLowerCase()
    let newData = contentData.filter(item => {
        return item.name.toLowerCase().includes(value)
    })
    setFilteredData(newData)
    if (value == '') {
        setFilteredData(null)
    }  
}

const itemsPerPage = 5
const [page, setPage] = useState(1)
let currentIndex = (page - 1) * itemsPerPage
let lastIndex = currentIndex + itemsPerPage

const nextPage = () => {
    if (page >= Math.ceil(contentData.length / itemsPerPage)) {
        toast({
            position: 'top',
            title: "Max Page",
            variant: "solid",
            status: "warning",
            isClosable: true,
          })
        return false
    }
    setPage(page + 1)
}

const prevPage = () => {
    if (page <= 1) {
        toast({
            position: 'top',
            title: "Earliest Page",
            variant: "solid",
            status: "warning",
            isClosable: true,
          })
        return false
    }
    setPage(page - 1)
}

const goToPage = (i) => {
    setPage(i)
}

useEffect(() => {
  setIsLoading(true)
  getContent()
  setPage(1)
  currentIndex = (page - 1) * itemsPerPage
  lastIndex = currentIndex + itemsPerPage
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
        <AnimatePresence mode="wait">
            <motion.div
            key="aboutPage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            >
                <main className='w-[100%] bg-white min-h-[100vh] flex flex-col gap-8 items-center justify-start'>
                    <HeaderContent handleSearch={handleSearch} />
                    <div className='w-[90%] grid grid-cols-1 lg:grid-cols-2 gap-8  py-8'>
                    {((filteredData != null) ? filteredData.map((data, index) => {
                        return (
                            <CardContent key={index} data={data} />
                        )
                    }
                    ) : (contentData) ? contentData.slice(currentIndex, lastIndex).map((data, index) => {
                        return (
                            <CardContent key={index} data={data} index={index} />
                        )
                    }) : <NoPost />)}
                    </div>
                    <Pagination 
                    itemsPerPage={itemsPerPage} 
                    itemData={contentData} 
                    prevPage={prevPage} 
                    nextPage={nextPage} 
                    goToPage={goToPage}
                    page={page}
                    />
                </main>
            </motion.div>
        </AnimatePresence>
    </React.Fragment>
  )
}
