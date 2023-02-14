import React from "react";
import Home from "../../components/Home";
import ItemDescription from "../itemDescription/ItemDescription";
import { Route, Routes } from 'react-router-dom';
import Container from "../container/Container";

const Routeing= () =>{
    
    return(
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/item/:id" element={<ItemDescription />}/>
                <Route path="/book" element={<Container />}/>
            </Routes>
        </>
    );
}
export default Routeing;
