import React, { CSSProperties } from 'react'

type alertProps = {
    message: string
    styles: CSSProperties
}

const Alert = ({ message, styles }: alertProps) => {
    return (
        <div style={styles}>

            <h3>
                {message}
            </h3>
        </div>
    )
}

export default Alert
