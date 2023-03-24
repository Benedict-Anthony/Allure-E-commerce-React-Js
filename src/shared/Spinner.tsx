import React from 'react'
import { ColorRing, LineWave, ProgressBar } from 'react-loader-spinner'
import "../css/spinner.css"


export const FormLoadingSpiner = () => {
    return (
        <section className="container spinner section">
            <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#ffc0cb', '#1c3825', '#ffc0cb', '#1c3825', '#ffc0cb']}
            />
<ProgressBar
  height="80"
  width="80"
  ariaLabel="progress-bar-loading"
  wrapperStyle={{}}
  wrapperClass="progress-bar-wrapper"
  borderColor = '#F4442E'
  barColor = '#51E5FF'
/>
        </section>
    )
}

export const FecthLoadingSpiner = () => {
    return (<section className="container spinner section">
        <LineWave
            height="200"
            width="00"
            color="#ffc0cb"
            ariaLabel="line-wave"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            firstLineColor=""
            middleLineColor=""
            lastLineColor=""
        />
    </section>)
}