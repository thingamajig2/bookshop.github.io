import React from "react";
import "./book.scss";
import { Link } from "react-router-dom";

const Book = ({ id, image, text, price }) => {
    return (
        <Link to={`/item/${id}`}>
            <div className="book">
                <div className="bookImage" style={{ backgroundImage: `url(${image})` }}></div>
                <p className="bookIenseWorld"></p>
                <div className="bookDesc">
                    <div className="bookText">
                        {text}
                    </div>
                    <Link to="/item">
                        Learn more
                    </Link>
                </div>
                <div className="price">{price}</div>
            </div>
        .</Link>
    )
}

export default Book;
