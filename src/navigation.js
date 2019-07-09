import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";



const toggleUnderline = e => {
  const boxes = document.querySelectorAll("a>span");
  boxes.forEach(el => el.classList.remove("underlined"));
  e.target.firstElementChild.classList.add("underlined");
};
 
export default function Navigation() {
    return (
        <Router>
            <div className="nav">
                <Link exact to="/" onClick={(e) => {toggleUnderline(e)}}>main page<span className="underlined" ></span></Link>            
                <Link to="/lookoftheday" onClick={(e) => {toggleUnderline(e)}}>look of the day<span></span></Link>
                <Link to="/mywardrobe" onClick={(e) => {toggleUnderline(e)}}>my wardrobe<span></span></Link>
                <Link to="/addelement" onClick={(e) => {toggleUnderline(e)}}>add element<span></span></Link>
            </div>
         </Router>
    )
}
