import React, { FormEvent, useState } from 'react'
import Button from '../shared/Button'
import useAddressForm from '../hooks/useAddressForm'
import useError from '../hooks/useError'
import Alert from "../shared/Alert"
import { sendUserData, updateAccount } from '../utils/sendData'
import { useUserContext } from "../contexts/UserAndCartContext"
import { FormLoadingSpiner } from '../shared/Spinner'
import { motion } from "framer-motion"
import { PageFadeInOut } from '../shared/motion'

const Settings = () => {
    const { profile, logOutUser, startSpining, spinning } = useUserContext()
    const [avatar, setAvatar] = useState<any>()
    const [phone, setPhone] = useState<number>(profile.user?.phone as number)
    const { addressData, handleChange, reset } = useAddressForm()
    const { error, handleError } = useError()
    const [update, setUpdate] = useState<"avatar" | "address" | "phone" | "">("")

    const { state, city, town, street, description } = addressData
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const addressForm = new FormData()
        if (!addressData.city || !addressData.street || !addressData.state || !addressData.town || !addressData.description) {
            handleError("All fields are required!")
            return;
        }
        startSpining()
        addressForm.append("city", city)
        addressForm.append("street", street)
        addressForm.append("state", state)
        addressForm.append("town", town)
        addressForm.append("description", description)
        const method = profile.address !== null ? "PUT" : "POST"
        const response = await sendUserData("user/account", addressForm, method, "multipart/form-data")
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
        startSpining()
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
        startSpining()
        if (response.ok) {
            window.location.reload()

        }
    }

    return (
        <motion.section className="container section" style={{
            marginTop: "-.1rem",
        }}
            variants={PageFadeInOut}
            initial="initial"
            animate="animate"
        >
            {spinning && <FormLoadingSpiner />}

            {update !== "" ?
                <motion.div
                    variants={PageFadeInOut}
                    initial="initial"
                    animate="animate"
                >
                    <Button type='button' hanldleOnclick={() => setUpdate("")} >Cancle</Button>

                </motion.div>
                :
                <motion.div
                    variants={PageFadeInOut}
                    initial="initial"
                    animate="animate"
                >
                    <Button type='button' hanldleOnclick={() => setUpdate("avatar")} >Update Avata</Button>
                    <Button type='button' hanldleOnclick={() => setUpdate("phone")}>Update Contact</Button>
                    <Button type='button' hanldleOnclick={() => setUpdate("address")}> Update Address</Button>
                    <Button type='button' hanldleOnclick={logOutUser}>Log Out</Button>
                </motion.div>
            }

            {update === "phone" ?

                <motion.div className="login" style={{
                    marginBottom: "20px"
                }}
                    variants={PageFadeInOut}
                    initial="initial"
                    animate="animate"
                >

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
                </motion.div>
                : update === "avatar" ?
                    <motion.div className="login"
                        variants={PageFadeInOut}
                        initial="initial"
                        animate="animate"
                    >
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
                    </motion.div>

                    : update === "address" ?
                        <>
                            <motion.div className="login"
                                variants={PageFadeInOut}
                                initial="initial"
                                animate="animate"
                            >

                                <form action="" className='form' onSubmit={handleSubmit} >
                                    <h3>Default Address</h3>
                                    {error.status && <Alert message={error.message} styles={{
                                        fontSize: "16px",
                                        color: "darkred",
                                        marginTop: "10px",
                                        padding: "4px 1px"

                                    }} />}
                                    <div className="w-50">
                                        <div className="form-group">
                                            <input type="text" placeholder=' state e.g Edo state' name="state" value={state} onChange={handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" placeholder='city e.g Benin city' name='city' value={city} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="w-50">
                                        <div className="form-group">
                                            <input type="text" placeholder='town' name='town' value={town} onChange={handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" placeholder='street' name='street' value={street} onChange={handleChange} />
                                        </div></div>
                                    <div className="w-100">
                                        <textarea name="description" id="description" value={description} placeholder='a short description...' onChange={handleChange}></textarea>
                                    </div>

                                    <Button type='submit'>Submit</Button>

                                </form>
                            </motion.div>


                        </>

                        : null}



        </motion.section>
    )
}

export default Settings
