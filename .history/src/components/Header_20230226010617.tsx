import React from 'react'
import { Link } from 'react-router-dom'
import { Navigations } from '../scripts/topNavItems';
import cart from "../assets/cart.png";
import "../css/header.css"

const Header = () => {

  document.querySelector(".cart-toggler")?.addEventListener("click", () => {
    document.querySelector(".cart-bar")?.classList.add("active")
    document.body.style.opacity = "1"

  })
  return (
    <header>
      <div className="container">
        <nav className="nav__items">
          <div className="logo">
            <Link to={"/"}>Allure</Link>
          </div>

          <ul className={`nav_links flex `}>
            {Navigations.map((item) => (
              <li key={item.id}>
                {item.page ? <Link to={`/${item.to}`}>{item.name}</Link> : <a href={`#${item.to}`}>{item.name}</a>}
              </li>
            ))}
          </ul>

          <ul className="nav_icons">

            <li><Link to={"login"}>Login</Link></li>
            <li><Link to={"sign-in"}>Sign Up</Link></li>
            <div className="cart cart-toggler">
              <img src={cart} alt="" />

            </div>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
