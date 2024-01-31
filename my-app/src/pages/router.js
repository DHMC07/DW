import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./home.js";
import Admin from "./admin.js";

const Rout = (props) => {
   return(
       <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home eventos={props.eventos}/>} />
                <Route path="/admin" element={<Admin eventos={props.eventos}/>} />
            </Routes>
       </BrowserRouter>
   )
}

export default Rout;