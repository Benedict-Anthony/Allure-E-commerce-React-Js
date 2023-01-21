import React from 'react'
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai"
import { BiShoppingBag, BiLogIn } from "react-icons/bi"
import { MdOutlinePlayLesson } from "react-icons/md"
import { GrBlog } from "react-icons/gr"




const ButtonNav = () => {
    return (
        <nav className="nav__bottom">
            <ul>
                <li><AiOutlineHome /></li>
                <li><BiShoppingBag /></li>
                <li><MdOutlinePlayLesson /></li>
                <li><GrBlog /></li>
                <li><AiOutlineUser /></li>
            </ul>
        </nav>
    )
}

export default ButtonNav
