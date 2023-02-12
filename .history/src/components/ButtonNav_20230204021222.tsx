import React from 'react'
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai"
import { BiShoppingBag, BiLogIn } from "react-icons/bi"
import { MdOutlinePlayLesson } from "react-icons/md"
import { GrBlog } from "react-icons/gr"
import { Link } from 'react-router-dom'




const ButtonNav = () => {
    window.addEventListener("scroll", () => {
        if (window.scrollY) {
            console.log(window.scrollY)
        }
    })
    return (
        <nav className="nav__bottom">
            <ul>
                <li><Link to={"/"}><AiOutlineHome /></Link></li>
                <li><Link to={"/shop"}><BiShoppingBag /></Link></li>
                <li><Link to={"/tutorials"}><MdOutlinePlayLesson /></Link></li>
                <li><Link to={"/blog"}><GrBlog /></Link></li>
                <li><Link to={"/account"}><AiOutlineUser /></Link></li>
            </ul>
        </nav>
    )
}

export default ButtonNav
