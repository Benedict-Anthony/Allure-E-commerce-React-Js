import React from 'react'
import { LineWave, Puff } from 'react-loader-spinner'
import "../css/spinner.css"


export const FormLoadingSpiner = () => {
    return (
        <section className="spinner">
            <div className='spinner-card'>

                <Puff
                    color='#ffc0cb'
                    secondaryColor='#1c3825'
                    wrapperClass='spin'
                />
            </div>
        </section>
    )
}

export const FecthLoadingSpiner = () => {
    return (
        <section className="spinner">
            <div className="">
                <LineWave
                    color='#ffc0cb'

                    wrapperClass='spin2'
                />
            </div>
        </section>)
}