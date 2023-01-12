import React from 'react'
import { ReactNode } from "react"

import "../css/button.css"
type ButtonProps = {
    children:ReactNode,
    type:"button" | "submit",
    hanldleOnclick?: () => void
}
const Button = ({children, type, hanldleOnclick}:ButtonProps) => {
  return (
    <button type={type} onClick={hanldleOnclick}> {children} </button>
  )
}

export default Button
