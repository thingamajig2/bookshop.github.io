import React, { useState } from "react";
import "../itemDescription/itemDescription.scss"
import {useParams} from 'react-router-dom';
import data from '../data';


const ItemDescription = () => {

    const addDataIntoCache = (cacheName, url, response) => {
        // Converting our response into Actual Response form
        const data = new Response(JSON.stringify(response));
      
        if ('caches' in window) {
          // Opening given cache and putting our data into it
          caches.open(cacheName).then((cache) => {
            cache.put(url, data);
          });
        }
      };

    let {id} = useParams();

    const {image,name,desc,audiobook,ebook,hardcover} = data.find((current)=>{
        if(current.id === +id){
            return current
        }
    })

    const [active,setActive] = useState(0);

    return (
        <div className = "bookItem">
            <div className = "Apollo">
                <img src={image} alt='img'/>
            </div>
            <div>
                <h1 className="bookName">{name}</h1>
                <div className = "descText">
                    <span>{desc}</span>
                </div>
                <div className = "options">
                    <p className={`audiobook ${active === 0 ? 'active' : ''}`} onClick={()=>{setActive(0)}}>audiobook</p>
                    <p className={`hardcover ${active === 1 ? 'active' : ''}`} onClick={()=>{setActive(1)}}>hardcover</p>
                    <p className={`ebook ${active === 2 ? 'active' : ''}`} onClick={()=>{setActive(2)}}>ebook</p>
                </div>
                <p>{active === 0 ? audiobook : active === 1 ? hardcover : ebook}$</p>
                <div className = "buy" onClick={()=>addDataIntoCache('MyCache',
                                                    'https://localhost:3000','SampleData')}>
                    BUY NOW
                </div>
            </div>
        </div>
    )
}


export default ItemDescription;