import React from 'react'
import SearchArea from '../components/search/SearchArea'
import SearchResult from '../components/search/SearchResult'

function SearchPage() {
  return (
    <div className='pt-5 md:pt-10'>
        <title>Image-Search : Search</title>
        <SearchArea />
        <SearchResult bool={false}/>
    </div>
  )
}

export default SearchPage