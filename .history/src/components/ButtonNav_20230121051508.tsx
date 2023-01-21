import React from 'react'
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai"
import { BiShoppingBag, BiLogIn } from "react-icons/bi"
import { MdOutlinePlayLesson } from "react-icons/md"




const ButtonNav = () => {
    return (
        <nav>
            <ul>
                <li><AiOutlineHome /></li>
                <li><BiShoppingBag /></li>
                <li><MdOutlinePlayLesson /></li>
                <li><AiOutlineUser /></li>
            </ul>
        </nav>
    )
}

export default ButtonNav
