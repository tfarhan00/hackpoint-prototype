import { Spinner } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

export default function CountryList() {

    const [countries, setCountries] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function fetchCountry() {
            setLoading(true)
            let request = await fetch('https://restcountries.com/v3.1/all')
            let final = await request.json()
            setCountries(final)
            setLoading(false)
        }
        fetchCountry()
    }, [])

if (loading) {
  return (
  <div className='w-[100%] h-[30rem] flex justify-center items-center text-center'>
    <Spinner
     thickness='4px'
     speed='0.65s'
     emptyColor='gray.200'
     color='gray.500'
     size='xl'
     />
  </div>
  )
} 

  return (
    <div className='w-[90%] py-16'>
         <div className='w-[100%] h-auto flex flex-col gap-8'>
    <div className='w-[100%] flex justify-start items-center'>
    <div className='w-[90%] flex'>
        <div className='flex flex-col'>
        <h1 className='font-[600] text-2xl'>Servicing countries</h1>
        <p className='text-gray-600'>Lookup this first, in order to get our full perks</p>
        </div>
      </div>
    </div>
    <main className='w-[100%] '>
      <div className="overflow-x-auto relative cursor-grab">
          <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-600 uppercase bg-gray-100">
                  <tr>
                      <th scope="col" className="py-3 px-6">
                          Flags
                      </th>
                      <th scope="col" className="py-3 px-6">
                          Name
                      </th>
                      <th scope="col" className="py-3 px-6">
                          Official Name
                      </th>
                      <th scope="col" className="py-3 px-6">
                          Sub Region
                      </th>
                      <th scope="col" className="py-3 px-6">
                          Capital
                      </th>
                      <th scope="col" className="py-3 px-6">
                          Population
                      </th>
                  </tr>
              </thead>
              <tbody>
                {countries && countries.filter(item => Number(item.population) > 50000000).map((country, index) => {
                    return (
                  <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td className="py-4 px-6">
                        <img src={country.flags.png} alt='pict' className='object-contain w-[40px] h-[30px]' />
                      </td>
                      <th scope="row" className="py-4 px-6 font-medium text-gray-900 dark:text-white">
                        {country.name.common}
                      </th>
                      <td className="py-4 px-6">
                        {country.name.official}
                      </td>
                      <td className="py-4 px-6">
                        {country.subregion}
                      </td>
                      <td className="py-4 px-6">
                        {country.capital}
                      </td>
                      <td className="py-4 px-6">
                        {country.population.toLocaleString()}
                      </td>
                  </tr>
                    )
                })}
             </tbody>
             </table>
            </div>
        </main>
        </div>
    </div>
  )
}
