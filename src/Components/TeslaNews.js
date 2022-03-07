import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ApiContext } from '../Contexts/ApiContext';

const TelsaNews = () => {
    const {teslaNewsData}=useContext(ApiContext)
  return (
    <div className='flex flex-wrap justify-center bg-gray-100 p-2'>
     {teslaNewsData.map((i)=>{ 
        return(
        <>
        <Link to={`more/${i.publishedAt}`}>
        <div className='flex flex-col h-auto w-auto md:w-96 justify-center bg-white items-center rounded hover:shadow-none cursor-pointer shadow-xl p-2 m-2'>
                <img className='h-72 w-72 object-cover rounded' src={i.urlToImage} alt={i.title} />
                <span className='text-base font-semibold'>{i.title}</span>
            </div>
        </Link>
        </>
    )})}
    </div>
  )
}

export default TelsaNews