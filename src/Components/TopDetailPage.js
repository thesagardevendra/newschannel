import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ApiContext } from '../Contexts/ApiContext'

const TopDetailPage = () => {
    let {time}=useParams()
    const {topBusinessNewsData}=useContext(ApiContext)
  return (
    <>
    {topBusinessNewsData.map((i)=>{
     if(i.publishedAt==time){
         return(
             <div className='flex flex-col items-center justify-center mt-2  '>
                <span className='mb-3 text-3xl font-bold'>{i.title}</span>
                <div className='flex flex-col justify-center items-center  space-x-4'>
                    <img className='rounded-lg mb-3 w-auto h-96' src={i.urlToImage} />
                    <div className='flex flex-col items-center'>
                        <span className='w-1/2 text-lg'>{i.description}{i.content}</span>
                        <span className='uppercase font-bold text-lg font-mono'>Published At - {i.publishedAt}</span>   
                    </div>
                 </div>
             </div>
         )
     }
    })}</>
  )
}

export default TopDetailPage