import React from 'react'
import {ReactNode,} from "react"

import "../css/card.css"

interface CardType {
    children:ReactNode
}


const Card = ({children}:CardType) => {
  return (
      <div className="card">
          {children}
    </div>
  )
}

export default Card