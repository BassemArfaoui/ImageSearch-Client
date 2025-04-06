import React from 'react'
import SearchArea from './SearchArea'
import SearchLoader from '../tools/SearchLoader'

function SearchResult({bool}) {
  return (
    <div className='mt-20'>
         <div className='mt-5'>
         {bool && <SearchLoader />}
         </div>
    </div>
  )
}

export default SearchResult