import React from "react";
import "./container.scss";
import Book from "../book/Book";
import data from '../data';

const Container  = () => {
    
    return(
        <div className="container">
            {data.map((book)=>{
                return <Book id={book.id} image={book.image} text={book.desc} price={book.price} />
            })}
        </div>
    )
}

export default Container;
