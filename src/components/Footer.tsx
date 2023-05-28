import React from 'react'
import '../css/footer.css'


const Footer = () => {
    const date = new Date()
    return (
        <footer>
            <h3><span>Allure {date.getFullYear()} &copy; </span> | All right reserve</h3>
            <p>Developed and Design by <span>BenWebDev</span></p>
            <p>Benedict Anthony</p>
        </footer>
    )
}

export default Footer
