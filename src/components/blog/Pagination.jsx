import React from 'react'
import { useEffect } from 'react'

export default function Pagination({itemsPerPage, itemData, prevPage, nextPage, goToPage, page}) {
    
    useEffect(() => {
        console.log(itemData)
    }, [])

  return (
    <div>
        
        <nav aria-label="Page navigation example">
        <ul className="inline-flex items-center -space-x-px">
            <li>
            <button onClick={prevPage} className="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span className="sr-only">Previous</span>
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
            </button>
            </li>
            {itemData && itemData.slice(0, Math.ceil(itemData.length / itemsPerPage)).map((item, index) => {
                return (
                    <li key={index}>
                        <button onClick={() => goToPage(index + 1)} className={`${(page == index + 1) ? "bg-gray-200 text-gray-800" : null} py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}>{index + 1}</button>
                    </li>
                )
            })}
            <li>
            <button onClick={nextPage} className="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span className="sr-only">Next</span>
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
            </button>
            </li>
        </ul>
        </nav>

    </div>
  )
}
