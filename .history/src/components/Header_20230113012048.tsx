import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Navigations } from '../scripts/landing';
import cart from "../assets/cart.png";
import "../css/header.css"

const Header = () => {
    const [activeMenu, setActiveMenu] = useState(false)

  return (
    <header>
        <div className="container">
                <nav className="nav__items">
                  <div className="logo">
                      <Link to={"/"}>Allure</Link>
                    </div>
                    
                        <ul className={`nav_links flex ${activeMenu && "active"} `}>
                        {Navigations.map((item) => (
                            <li key={item.id}>
                                {item.page ? <Link to={`/${item.to}`}>{item.name}</Link> : <a href={`#${item.to}`}>{item.name}</a>}
                            </li> 
                        ))}
                            <FaTimes className="close" onClick={() => setActiveMenu(false)}/>
                    </ul>

                    <ul className="nav_icons">
                            
                      <li><Link to={"login"}>Login</Link></li>
                      <li><Link to={"sign-in"}>Sign Up</Link></li>
                      <div className="cart">
                        <img src={cart} alt="" />
                          
                      </div>
                        <FaBars className="togglebar" onClick={()=> setActiveMenu(true) } />
                    </ul>
                </nav>
        </div>
           </header>
  )
}

export default Header
