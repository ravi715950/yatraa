import React, { useState } from 'react'
import './Navbarr.css';
import { MenuItems } from './MenuItems';
import { NavLink } from 'react-router-dom';


function Navbarr() {
  const [click, setClick] = useState(false)
  const handleClick = () =>{
    setClick(!click)
  }
  return (
    <>
   <nav className="NavbarItems">
    <h1 className="navbar-logo">Yatraa</h1>
    <div className="menu-icons" onClick={handleClick}>
      <i className={ click ? "fas fa-times" : "fas fa-bars"}></i>
    </div>
    <ul className={click ? "nav-menu active" : "nav-menu"}>
      {MenuItems.map((item, index)=>{
        return(

      <li key={index}>
      <NavLink className={item.cName} to={item.url}><i className={item.icon}></i>{item.title}</NavLink>
      </li>
        )
      })}
      <button>Sign Up</button>
    </ul>
   </nav>
    </>
  )
}

export default Navbarr