import React, { ComponentType, useEffect, useState } from 'react'
import { accounts } from '../scripts/account'
import { FaChevronCircleRight } from 'react-icons/fa'
import Button from '../shared/Button'
import { BsFillArrowLeftSquareFill } from 'react-icons/bs'
import "../css/account.css"
import "../css/form.css"
import { useUserContext } from '../contexts/UserAndCartContext'
import { imageURL } from '../lib'



type profileProps = {
    orders: ComponentType
    address: ComponentType
    reviews: ComponentType
    setttings: ComponentType
    bookings: ComponentType
}

type componentType = "orders" | "address" | "payment" | "settings" | 'reviews' | string

const Profile = ({ orders: Orders, address: Address, reviews: Reviews, setttings: Settings, bookings: Bookings }: profileProps) => {
    const [activeComponent, setActiveComponent] = useState<componentType>("orders")
    const { profile, setUserProfile, getUserOrders } = useUserContext()

    const handleComponentState = (stateName: componentType) => {
        setActiveComponent(stateName)
        document.querySelector(".account__summary")?.classList.add("show")

    }

    const mobileComponentStateToggler = () => {
        document.querySelector(".account__summary")?.classList.remove("show")
    }

    useEffect(() => {
        setUserProfile()
        if (profile.data === null) {
            handleComponentState("settings")
        }

        getUserOrders()
    }, []) // eslint-disable-line

    return (
        <>
            <h2 style={{
                marginTop: "1rem",
                marginBottom: "1rem",
                fontSize: "1.4rem",
                textTransform: "capitalize"
            }}>my profile</h2>
            <section className="account">
                <div className="account__profile">
                    <div className='user'>
                        <img src={imageURL + profile?.avatar} alt="" />
                        <div>
                            <h1>{profile?.user?.name}</h1>
                            <p>{profile?.user?.email}</p>
                            <p>+234 {profile.user?.phone}</p>
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
                    <Button type="button" hanldleOnclick={mobileComponentStateToggler}>
                        <BsFillArrowLeftSquareFill />
                    </Button>
                    {activeComponent === "orders" ?
                        <Orders /> : activeComponent === "address"
                            ? <Address /> : activeComponent === "reviews"
                                ? <Reviews /> : activeComponent === "settings" ?
                                    <Settings /> : activeComponent === "bookings" ? <Bookings /> : null}

                </div>
            </section>
        </>

    )
}

export default Profile
