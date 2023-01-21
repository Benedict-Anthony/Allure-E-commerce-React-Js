import React, { ComponentType, useState } from 'react'
import { accounts } from '../scripts/account'
import "../css/account.css"
import { FaChevronCircleRight } from 'react-icons/fa'


type profileProps = {
    orders: ComponentType
    address: ComponentType
    reviews: ComponentType
    setttings: ComponentType
}

type componentType = "orders" | "address" | "payment" | "settings" | 'reviews' | string

const Profile = ({ orders: Orders, address: Address, reviews: Reviews, setttings: Settings }: profileProps) => {
    const [activeComponent, setActiveComponent] = useState<componentType>("orders")

    const handleComponentState = (stateName: componentType) => {
        setActiveComponent(stateName)
    }
    return (
        <section className="account">
            <div className="account__profile">
                {/* <h2>my profile</h2> */}
                <div className='user'>
                    <img src="./images/beauty.jpg" alt="" />
                    <div>
                        <h1>Ughulu Benedict</h1>
                        <p>benwebdev@gmail.com</p>
                        <p>+234 9064941998</p>
                    </div>
                </div>

                <aside>
                    {accounts.map((item) => (
                        <article key={item.id} onClick={() => handleComponentState(item.state)}>
                            <div>
                                <p>{item.component}</p>
                                <span>{item.description}</span>

                            </div>
                            <FaChevronCircleRight />
                        </article>
                    ))}
                </aside>
            </div>
            <div className="account__summary">
                {activeComponent === "orders" ?
                    <Orders /> : activeComponent === "address"
                        ? <Address /> : activeComponent === "reviews"
                            ? <Reviews /> : activeComponent === "settings" ?
                                <Settings /> : null}

            </div>
        </section>
    )
}

export default Profile
