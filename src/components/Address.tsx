import React from 'react'
import { useUserContext } from '../contexts/UserAndCartContext'

const Address = () => {
    const { profile } = useUserContext()
    return (

        <div className="address">

            <h1>Default shipping address</h1>

            <article>

                <p>State: <span>{profile?.address?.state}</span> </p>
                <p>City: <span>{profile?.address?.city}</span> </p>
                <p>Town: <span>{profile.address?.town}</span> </p>
                <p>Address Description: <span>{profile.address?.description}</span> </p>
            </article>
        </div>
    )
}

export default Address
