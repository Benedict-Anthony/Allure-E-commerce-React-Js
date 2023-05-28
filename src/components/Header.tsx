import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Navigations } from '../scripts/topNavItems';
import cart from "../assets/cart.png";
import "../css/header.css"
import { useUserContext } from '../contexts/UserAndCartContext';
import Button from '../shared/Button';
import { FaUser, FaSearch } from "react-icons/fa"



const Header = () => {
  const { getCartTotal, isLoggedIn, logOutUser } = useUserContext()
  const cartTotal = getCartTotal()

  function addBar() {
    document.querySelector(".cart-toggler")?.addEventListener("click", () => {
      document.querySelector(".cart-bar")?.classList.add("active")

    })
  }

  function addSearchForm() {
    document.querySelector(".search-toggler")?.addEventListener("click", () => {
      document.querySelector(".search")?.classList.toggle("active")

    })
  }
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
                {item.page ? <NavLink to={`/${item.to}`}>{item.name}</NavLink> : <a href={`#${item.to}`}>{item.name}</a>}
              </li>
            ))}
          </ul>

          <ul className="nav_icons">
            {isLoggedIn ?
              <>
                <li><NavLink to={"/account"}><FaUser /></NavLink></li>
                <li><Button type="button" hanldleOnclick={() => logOutUser()}>Logout</Button> </li>

              </>
              :
              <>
                <li><NavLink to={"login"}><Button type="button">Login</Button></NavLink></li>
                <li><NavLink to={"sign-in"}><Button type="button">Sign Up</Button></NavLink></li>
              </>
            }
            <div className="search-toggler" onClick={addSearchForm}>
              <FaSearch />
            </div>

            <div className="cart cart-toggler" onClick={addBar}>
              <img src={cart} alt="" />
              <span className="cart-total">{cartTotal > 0 && cartTotal}</span>
            </div>

          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
