import React, { FormEvent, useState } from 'react'
import Button from '../shared/Button'
import useAddressForm from '../hooks/useAddressForm'
import useError from '../hooks/useError'
import Alert from "../shared/Alert"
import { sendUserData, updateAccount } from '../utils/sendData'
import { useUserContext } from "../contexts/UserAndCartContext"


const Settings = () => {
    const { profile, logOutUser } = useUserContext()
    const [avatar, setAvatar] = useState<any>()
    const [phone, setPhone] = useState<number>(profile.user?.phone as number)
    const { addressData, handleChange, reset } = useAddressForm()
    const { error, handleError } = useError()

    const { state, city, town, street, description } = addressData
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const addressForm = new FormData()
        if (!addressData.city || !addressData.street || !addressData.state || !addressData.town || !addressData.description) {
            handleError("All fields are required!")
            return;
        }

        addressForm.append("city", city)
        addressForm.append("street", street)
        addressForm.append("state", state)
        addressForm.append("town", town)
        addressForm.append("description", description)
        const method = profile.address !== null ? "PUT" : "POST"
        const response = await sendUserData("user/account", addressForm, method, "multipart/form-data")
        console.log(response)
        if (response.status === 201 || response.status === 200) {
            reset()
            window.location.reload()
        }

    }

    const handleProfileChange = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = new FormData()
        form.append("avatar", avatar[0])
        console.log(form.get("avatar"))
        const response = await sendUserData("user/account", form, "PATCH")
        if (response.status === 200) {
            window.location.reload()

        }
    }


    const handleContactChange = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!phone) {
            handleError("feild is required")
            return;
        }

        if (String(phone).length < 10 || String(phone).length > 11) {
            handleError("Invalid phone Number")
            return;
        }
        const response = await updateAccount({ phone: phone })
        if (response.ok) {
            window.location.reload()

        }
    }

    return (
        <section className="container section" style={{
            marginTop: "-.3rem"
        }}>
            <div className="login" style={{
                marginBottom: "20px"
            }}>

                <form className='form' onSubmit={handleContactChange}>
                    <h3>Update your Contact</h3>
                    {error.status && <Alert message={error.message} styles={{
                        fontSize: "16px",
                        color: "darkred",
                        marginTop: "10px",
                        padding: "4px 1px"

                    }} />}
                    <div className="form-group">

                        <input type="number" value={phone} onChange={(e) => setPhone(parseInt(e.target.value))} />
                        <Button type='submit'>Submit</Button>
                    </div>

                </form>
            </div>

            <div className="login">
                <form className='form' onSubmit={handleProfileChange}>
                    <h3>Update your picture</h3>
                    {error.status && <Alert message={error.message} styles={{
                        fontSize: "16px",
                        color: "darkred",
                        marginTop: "10px",
                        padding: "4px 1px"

                    }} />}
                    <input type="file" onChange={(e) => setAvatar(e.target.files)} />
                    <Button type='submit'>Submit</Button>

                </form>
            </div>
            <br />
            <div className="login">

                <form action="" className='form' onSubmit={handleSubmit} >
                    <h3>Default delivery Address</h3>
                    {error.status && <Alert message={error.message} styles={{
                        fontSize: "16px",
                        color: "darkred",
                        marginTop: "10px",
                        padding: "4px 1px"

                    }} />}
                    <div className="w-50">
                        <div className="form-group">
                            <label htmlFor="" >State</label>
                            <input type="text" placeholder='e.g Edo state' name="state" value={state} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">city</label>
                            <input type="text" placeholder='e.g Benin city' name='city' value={city} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="w-50">
                        <div className="form-group">
                            <label htmlFor="">town</label>
                            <input type="text" placeholder='june 12 lain' name='town' value={town} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">street</label>
                            <input type="text" placeholder='st. steph..' name='street' value={street} onChange={handleChange} />
                        </div></div>
                    <div className="w-100">
                        <label htmlFor="">Description</label>
                        <textarea name="description" id="description" value={description} placeholder='e.g hall 4 hostel, uniben opp.....' onChange={handleChange}></textarea>
                    </div>

                    <Button type='submit'>Submit</Button>

                </form>
            </div>

            <Button type='button' hanldleOnclick={logOutUser}>Log Out</Button>
        </section>
    )
}

export default Settings
