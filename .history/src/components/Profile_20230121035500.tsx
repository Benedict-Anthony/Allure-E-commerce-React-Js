import React, { ComponentType } from 'react'
import { accounts } from '../scripts/account'
import "../css/account.css"
import { FaChevronCircleRight } from 'react-icons/fa'


type profileProps = {
    orders: ComponentType
}

const Profile = ({ orders: Orders }: profileProps) => {
    return (
        <section className="account">
            <div className="account__profile">
                <h2>my profile</h2>
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
                        <article key={item.id}>
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

                <Orders />
            </div>
        </section>
    )
}

export default Profile
