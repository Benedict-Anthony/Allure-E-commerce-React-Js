import React from 'react'
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai"
import { BiShoppingBag } from "react-icons/bi"
import { HiOutlineLogin } from "react-icons/hi"
import { GrBlog, GrServices } from "react-icons/gr"
import { Link } from 'react-router-dom'

import { useUserContext } from '../contexts/UserAndCartContext'


const ButtonNav = () => {
    const { isLoggedIn } = useUserContext()

    window.addEventListener("scroll", () => {
        if (window.scrollY) {
            document.querySelector(".nav__bottom")?.classList.remove("active__nav")
            return;
        } else {

            document.querySelector(".nav__bottom")?.classList.add("active__nav")
            setTimeout(() => {
                document.querySelector(".nav__bottom")?.classList.remove("active__nav")

            }, 7000)
            return;
        }

    })
    return (
        <nav className={`nav__bottom `} >
            <ul>
                <li><Link to={"/"}><AiOutlineHome /></Link></li>
                <li><Link to={"/shop"}><BiShoppingBag /></Link></li>
                <li><Link to={"/services"}><GrServices /></Link></li>
                <li><Link to={"/blog"}><GrBlog /></Link></li>
                {isLoggedIn
                    ?
                    <>
                        <li><Link to={"/account"}><AiOutlineUser /></Link></li>
                    </>
                    :
                    <li><Link to={"/login"}><HiOutlineLogin /></Link></li>
                }
            </ul>
        </nav>
    )
}

export default ButtonNav
