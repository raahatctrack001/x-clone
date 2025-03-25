"use client"
import React, { useEffect, useState } from 'react'
import NewsCard from '../newsCard/page';

const News = () => {
  const [news, setNews] = useState([]);
  const [newsCount, setNewsCount] = useState(3);
  useEffect(()=>{
    fetch("https://saurav.tech/NewsAPI/top-headlines/category/business/us.json")
        .then(response=>response.json())
        .then(data=>setNews(data.articles));        
    }, [])
   console.log(news)
  return (
    <div>
        {news && news.slice(0, newsCount).map((singleNews)=>{
            return <NewsCard  news={singleNews} key={singleNews.publishedAt}/>
        })}
        <button 
            className='w-full flex justify-center items-center'
            onClick={()=>setNewsCount(count=>count+3)}    
        > 
            <span className='bg-white rounded-xl text-black px-2 cursor-pointer'> Load More  </span>
        </button>
    </div>
  )
}

export default News