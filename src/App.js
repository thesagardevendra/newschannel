import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter as  Router, Routes,Route } from "react-router-dom";
import AppleNews from "./Components/AppleNews";
import AppleDetailPage from "./Components/AppleDetailPage";
import TopBusinessNews from "./Components/TopBusinessNews"
import Header from "./Components/Header";
import NewsChannel from "./Components/NewsChannel";
import TopDetailPage from "./Components/TopDetailPage"
import TeslaNews from "./Components/TeslaNews";
import { ApiContext } from "./Contexts/ApiContext";
import TeslaDetailPage from "./Components/TeslaDetailPage";
import Dashboard from "./Components/Dashboard";
import DashboardDetailPage from "./Components/DashboardDetailPage";

function App() {
// Set Data
const [dashboardNews,setDashboardNews]=useState([])
const [appleNewsData,setAppleNewsData]=useState([]);
const [teslaNewsData,setTelsaNewsData]=useState([]);
const [topBusinessNewsData,setTopBusinessNewsData]=useState([]);
const [searchChange,setSearchChange]=useState("netflix")
const [dropDownCountry,setDropDownCountry]=useState("in")
const [dropDownCategory,setDropDownCategory]=useState("health")
const [topSearch,setTopSearch]=useState({})
// Api Call
 useEffect(()=>{
         axios.get(`https://newsapi.org/v2/everything?q=${searchChange}&apiKey=9118714b727f4e1b98d33cf2d38e2922`)
          .then(function(response){
            setDashboardNews(response.data.articles)
          })
         axios.get("https://newsapi.org/v2/everything?q=apple&from=2022-03-07&to=2022-03-07&sortBy=popularity&apiKey=9118714b727f4e1b98d33cf2d38e2922")
         .then(function(response){
          setAppleNewsData(response.data.articles)
         })
         axios.get("https://newsapi.org/v2/everything?q=bitcoin&from=2022-03-07&to=2022-03-07&sortBy=publishedAt&apiKey=9118714b727f4e1b98d33cf2d38e2922")
         .then(function(response){
          setTelsaNewsData(response.data.articles)
         })
         axios.get(`https://newsapi.org/v2/top-headlines?country=${dropDownCountry}&category=${dropDownCategory}&apiKey=9118714b727f4e1b98d33cf2d38e2922`)
         .then(function(response){
          setTopBusinessNewsData(response.data.articles)
         })
 },[searchChange,topSearch])

  return (
    <Router>
      <ApiContext.Provider value={{appleNewsData,teslaNewsData,topBusinessNewsData,setSearchChange,dashboardNews,searchChange,setDropDownCountry,setDropDownCategory,dropDownCountry,dropDownCategory,setTopSearch,topSearch}}>
        <div className="App">
          <Header />
          <Routes>
            <Route  path="/" element={<Dashboard />}/>
            <Route  path="/more/:time" element={<DashboardDetailPage />}/>
            <Route path="/bitcoin"  element={<TeslaNews />}/>
            <Route path="/apple"  element={<AppleNews />}/>
            <Route path="/top"  element={<TopBusinessNews />}/>
            <Route path="/apple/more/:time" element={<AppleDetailPage />} />
            <Route path="/bitcoin/more/:time" element={<TeslaDetailPage />} />
            <Route path="/top/more/:time" element={<TopDetailPage />} />
          </Routes>  
        </div>
      </ApiContext.Provider>
    </Router>

  );
}

export default App;
