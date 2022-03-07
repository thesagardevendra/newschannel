import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ApiContext } from '../Contexts/ApiContext';

const Dashboard = () => {
    const {dashboardNews}=useContext(ApiContext)
  return (
    <div className='flex flex-wrap justify-center bg-gray-100 p-2'>
     {dashboardNews.map((i)=>{ 
        return(
        <>
        <Link to={`more/${i.publishedAt}`}>
        <div className='flex flex-col h-aut0 w-auto justify-center bg-white items-center rounded hover:shadow-none cursor-pointer shadow-xl p-2 m-2'>
                <img className='h-72 w-72 object-cover rounded' src={i.urlToImage} alt={i.title} />
                <span className='text-base font-semibold w-96'>{i.title}</span>
            </div>
        </Link>
        </>
    )})}
    </div>
  )
}

export default Dashboard