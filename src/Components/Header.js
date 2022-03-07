import React,{useState,useContext} from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ApiContext } from '../Contexts/ApiContext'



const Search=()=>{
  const [search,setSearch]=useState("")
  const {searchChange,setSearchChange,}=useContext(ApiContext);
  return(
    <div className='flex flex-grow items-center mx-5 rounded overflow-hidden bg-white'>
      <input className='flex w-full items-center text-xl rounded text-gray-900 placeholder:text-base  outline-none p-2 py-1'  placeholder='Search......'  onChange={(e)=>{
        setSearch(e.target.value)
        
      }}/>
      <i className='fa fa-search cursor-pointer p-2.5  hover:bg-gray-200 hover:text-cyan-900  text-black'
      onClick={()=>{
        setSearchChange(search)
        console.log(searchChange)
      }}></i>
    </div>
  )
}

const OptionSearch=()=>{
  const {setDropDownCountry,setDropDownCategory,dropDownCountry,dropDownCategory,setTopSearch,topSearch}=useContext(ApiContext);
  return(
    <div className='flex text-gray-200  mr-2 items-center  md:space-x-4 duration-300'>
    <div className=' flex flex-col md:flex-row space-y-3 md:space-x-2 md:space-y-0 justify-center  items-center'>
    <select className='md:w-36 w-28 hello h-8 scroll-my-px md:text-base text-sm appearance-none text-center capitalize  rounded bg-gray-100 bg-opacity-20 border-2  border-gray-200 font-semibold outline-none' onChange={(e)=>{
        setDropDownCountry(e.target.value)
      }}>  
              <option value=""  >Select country</option>  
             
              <option value="at" >australia</option>
              <option value="be" >belgium</option>
              <option value="br" >brazil</option>
              <option value="ca" >Canada</option>
              <option value="cn" >China</option>
              <option value="eg" >Eygpt</option>
              <option value="fr" >france</option>
              <option value="de" >Germany</option>
              <option value="gr" >Greece</option>
              <option value="hk" >Hong Kong</option>
              <option value="hu" >Hungary</option>
              <option value="id" >Indonesia</option>
              <option value="in" >India</option>
              <option value="jp" >japan</option>
              <option value="kr" >kora</option>
              <option value="lt" >lithuania</option>
              <option value="lv" >latvia</option>
              <option value="ma" >morocoo</option>
              <option value="mx" >mexico</option>
              <option value="ng" >nigeria</option>
              <option value="nl" >netherlands</option>
              <option value="ph" >philippines</option>
              <option value="pl" >poland</option>
              <option value="ro" >Romania</option>
              <option value="ru" >russia</option>
              <option value="sa" >saudi arabia</option>
              <option value="za" >south africa</option>
              <option value="se" >sweden</option>
              <option value="th" >thailand</option>
              <option value="tr" >turkey</option>
              <option value="ae" >UAE</option>
              <option value="gb" >UK</option>
              <option value="ua" >ukraine</option>
              <option value="us" >USA</option>
              <option value="ve" >Venezuela</option>
      </select>
      <select className='md:w-36 w-28 hello h-8 scroll-my-px md:text-base text-sm appearance-none text-center capitalize  rounded bg-gray-100 bg-opacity-20 border-2  border-gray-200 font-semibold outline-none'  onChange={(e)=>{
       setDropDownCategory(e.target.value)
      }}> 
            <option>Select Category</option>   
            <option>business</option>
            <option>entertainment</option>
            <option>general</option>
            <option>health</option>
            <option>science</option>
            <option>sports</option>
            <option>technology</option>
      </select>
    </div>
      
      <button className='bg-gray-200 text-gray-500 md:px-4 md:py-1 px-2 ml-3 text-sm  rounded-sm font-semibold' onClick={(e)=>{
        setTopSearch(dropDownCountry,dropDownCategory)
        console.log(topSearch)
      
      }}>Search</button>
</div>
  )
}




const Header = () => {
  let location=useLocation()
  const [asideMobile,setAsideMobile]=useState(false)
  return (
    <div className='flex  items-center  justify-between h-24 md:h-16 shadow-sm bg-cyan-800 pl-2 text-white'>
      <div className='flex items-center'>
      <i className='fa fa-bars lg:hidden text-xl mr-2 mt-1' onClick={(e)=>{
        setAsideMobile(true)
      }}></i>
    <Link to="/">
     <span className='whitespace-nowrap md:text-3xl text-xl flex uppercase tracking-widest font-bold  items-center'>APi NEWs</span>
    </Link>
      </div>
    <div className={location.pathname=="/"?"md:flex flex-grow ":""}>
     {location.pathname==="/top"?<OptionSearch />:location.pathname==="/apple"?"":location.pathname==="/bitcoin"?"":<Search />}
    </div>
     <div className='lg:flex text-lg space-x-6 cursor-pointer hidden mx-4 uppercase'>
      <Link to="/top"><span className={`${location.pathname==="/top" ?"border-b":"" } hover:border-b whitespace-nowrap hover:scale-110`}>Top Headline</span></Link>
      <Link to="/apple" ><span className={`${location.pathname==="/apple"  ?"border-b":"" } hover:border-b  whitespace-nowrap hover:scale-110`}>Apple</span></Link>
      <Link to="/bitcoin"><span className={`${location.pathname==="/bitcoin" ?"border-b":"" } hover:border-b whitespace-nowrap hover:scale-110`}>bitcoin</span></Link>
     </div>


     {/* Aside Mobile */}
      <div className={`${!asideMobile?"hidden":"block"}  lg:hidden duration-700 bg-cyan-800 shadow-2xl shadow-gray-200 bottom-0 fixed top-0 right-0 w-1/2`} >
      <i className={`${!asideMobile?"hidden":"block"}  fa fa-times right-0 absolute p-3 text-2xl`} onClick={()=>{
        setAsideMobile(false)
      }}></i>
      <div className='lg:hidden text-lg  cursor-pointer space-y-5 flex mt-20 items-start w-full h-full flex-col  mx-4 uppercase'>
        <Link to="/top"><span className={`${location.pathname==="/top" ?"border-b":"" } hover:border-b whitespace-nowrap hover:scale-110`}>Top Headline</span></Link>
        <Link to="/apple" ><span className={`${location.pathname==="/apple"  ?"border-b":"" } hover:border-b  whitespace-nowrap hover:scale-110`}>Apple</span></Link>
        <Link to="/bitcoin"><span className={`${location.pathname==="/bitcoin" ?"border-b":"" } hover:border-b whitespace-nowrap hover:scale-110`}>bitcoin</span></Link>
      </div>
      </div>
     
    </div>
    
    
  )
}

export default Header