import React, { CSSProperties } from 'react'

type alertProps = {
    message: string
    styles?: CSSProperties
}

const Alert = ({ message, styles }: alertProps) => {
    return (
        <div style={styles}>
            {message}
        </div>
    )
}

export default Alert
