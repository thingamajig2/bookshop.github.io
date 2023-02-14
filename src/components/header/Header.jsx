import React, {useState,useEffect} from "react";
import logo from '../../assets/images/bookshop-logo.png';
import { NavLink } from "react-router-dom";
import "./header.scss"
import basket from '../../assets/images/shoppingcart2.png';
import data from '../data';

const Header  = () => {
    const [cacheData, setCacheData] = React.useState();
  
    // Function to get single cache data
    const getSingleCacheData = async (cacheName, url) => {
      if (typeof caches === 'undefined') return false;
      
      const cacheStorage = await caches.open(cacheName);
      const cachedResponse = await cacheStorage.match(url);
      
      // If no cache exists
      if (!cachedResponse || !cachedResponse.ok) {
        setCacheData(false)
      }
    
      return cachedResponse.json().then((item) => {
        setCacheData(item)
      });
    };
    
    // Cache Object 
    const cacheToFetch = { cacheName: 'MyCache', url: 'https://localhost:3000' }

    const [isOpen, setIsOpen] = useState(false);
    useEffect(()=>{
        getSingleCacheData(cacheToFetch.cacheName, cacheToFetch.url)
    },[cacheData])
    return(
        <header className="header">
            <NavLink to="/"><div className="logo"><img src={logo} alt={logo}/></div></NavLink>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
            <ul className="menu">
                <img src = {basket} alt = "basket" onClick={() => setIsOpen(current => !current)} />
                <li><NavLink to="/book">Books</NavLink></li>
                {/* <li><a href="audiobooks">Audiobooks</a></li>
                <li><a href="eBooks">Ebooks</a></li>
                <li><a href="Fiction">Fiction</a></li>
                <li><a href="Nonfiction">Nonfiction</a></li> */}
                {isOpen ? <div className = "bookcart">
                    {cacheData ? <h6>Cache Data is: {cacheData} </h6> : ''}
                </div> : ''}
            </ul>
        </header>
    )
}

export default Header;
