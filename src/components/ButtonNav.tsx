import React, { useEffect } from 'react'
import { AiOutlineHome } from "react-icons/ai"
import { BiShoppingBag } from "react-icons/bi"
import { HiOutlineLogin } from "react-icons/hi"
import { GrBlog, GrServices } from "react-icons/gr"
import { FaUser } from "react-icons/fa"
import { Link, NavLink } from 'react-router-dom'
import { useUserContext } from '../contexts/UserAndCartContext'


const ButtonNav = () => {
    const { isLoggedIn } = useUserContext()

    window.addEventListener("scroll", () => {
        if (window.scrollY === 0) {
            document.querySelector(".nav__bottom")?.classList.remove("active__nav")
            return;
        } else {

            document.querySelector(".nav__bottom")?.classList.remove("active__nav")
            setTimeout(() => {
                document.querySelector(".nav__bottom")?.classList.add("active__nav")

            }, 7000)
        }

    })

    useEffect((() => {
        document.querySelector(".nav__bottom")?.classList.add("active__nav")

    }), [])
    return (
        <nav className={`nav__bottom `} >
            <ul>
                <li><NavLink to={"/"}><AiOutlineHome /> <span>Home</span></NavLink></li>
                <li><NavLink to={"/shop"}><BiShoppingBag /> <span>shop</span> </NavLink></li>
                <li><NavLink to={"/services"}><GrServices /> <span>Services</span> </NavLink></li>
                <li><NavLink to={"/blog"}><GrBlog /> <span>Blog</span> </NavLink></li>
                {isLoggedIn
                    ?
                    <>
                        <li><NavLink to={"/account"}><FaUser /> <span>Me</span> </NavLink></li>
                    </>
                    :
                    <li><Link to={"/login"}><HiOutlineLogin />Login</Link></li>
                }
            </ul>
        </nav>
    )
}

export default ButtonNav
