import React from 'react'
import SearchArea from '../components/search/SearchArea'
import SearchResult from '../components/search/SearchResult'
import SearchCard from '../components/search/SearchCard'
import CardsLoading from '../components/tools/CardsLoading'

function SearchPage() {
  return (
    <div className='pt-5 md:pt-10'>
        <title>Image-Search : Search</title>
        <SearchArea />
        <SearchResult bool={false}>
        <SearchCard
        id="30039"
        gender="Men"
        masterCategory="Accessories"
        subCategory="Watches"
        articleType="Watches"
        baseColour="Black"
        season="Winter"
        year="2016"
        usage="Casual"
        productDisplayName="Skagen Men Black Watch"
      />
      <SearchCard
        id="9204"
        gender="Men"
        masterCategory="Footwear"
        subCategory="Shoes"
        articleType="Casual Shoes"
        baseColour="Black"
        season="Summer"
        year="2011"
        usage="Casual"
        productDisplayName="Puma Men Future Cat Remix SF Black Casual Shoes"
       
      />
      <SearchCard
        id="15566"
        gender="Women"
        masterCategory="Apparel"
        subCategory="Topwear"
        articleType="Tshirts"
        baseColour="White"
        season="Winter"
        year="2015"
        usage="Casual"
        productDisplayName="United Colors of Benetton Women White Printed T-shirt"
       
      />

      <SearchCard
        id="31611"
        gender="Women"
        masterCategory="Accessories"
        subCategory="Bags"
        articleType="Handbags"
        baseColour="Pink"
        season="Spring"
        year="2016"
        usage="Casual"
        productDisplayName="Baggit Pink Handbag"
       
      />
      <SearchCard
        id="37901"
        gender="Men"
        masterCategory="Apparel"
        subCategory="Topwear"
        articleType="Tshirts"
        baseColour="White"
        season="Summer"
        year="2015"
        usage="Casual"
        productDisplayName="Puma Men White Printed T-shirt"
       
      />


       <CardsLoading /> 

        </SearchResult>
    </div>
  )
}

export default SearchPage