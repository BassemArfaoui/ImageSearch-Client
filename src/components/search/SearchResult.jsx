import React from 'react'
import SearchArea from './SearchArea'
import SearchLoader from '../tools/SearchLoader'

function SearchResult({bool , children}) {
  return (
    <div className='mt-15'>
         <div className='mt-5 flex flex-wrap gap-5 justify-center'>

         {children}
         </div>
    </div>
  )
}

export default SearchResult