import React, { FormEvent, useState } from 'react'
import Button from '../shared/Button'
import useAddressForm from '../hooks/useAddressForm'
import useError from '../hooks/useError'
import Alert from "../shared/Alert"
import { sendUserData } from '../utils/sendData'
import Dropzone, { useDropzone } from 'react-dropzone'



const Settings = () => {
    const [avatar, setAvatar] = useState<any>()
    const { addressData, handleChange, reset } = useAddressForm("")
    const { error, handleError } = useError()
    const form = new FormData()
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!addressData.city || !addressData.street || !addressData.state || !addressData.town || !addressData.description) {
            handleError("All fields are required!")
            return;
        }
        const response = await sendUserData("user/account", {
            city: addressData.city,
            street: addressData.street,
            state: addressData.state,
            town: addressData.town,
            description: addressData.description

        })
        console.log(response)
        if (response.status === 201 || response.status === 200) {
            reset()
            window.location.reload()
        }

    }

    const handleProfileChange = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        form.append("avatar", avatar[0])
        console.log({ form })
        const response = await sendUserData("user/account", form, "PATCH", "multipart/form-data")
        if (response.status === 200) {
            // window.location.reload()
            console.log(response)
            const data = await response.json()
            console.log(data)
        }
    }

    return (
        <section className="container section" style={{
            marginTop: "-.3rem"
        }}>
            <div className="login" style={{
                marginBottom: "20px"
            }}>

                <form action="" className='form' onSubmit={handleProfileChange}>
                    <h3>Update your picture</h3>

                    <Dropzone onDrop={acceptedFiles => setAvatar(acceptedFiles)}>
                        {({ getRootProps, getInputProps }) => (
                            <section>
                                <div {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    <p>Drag 'n' drop some files here, or click to select files</p>
                                </div>
                            </section>
                        )}
                    </Dropzone>
                    <Button type='submit'>Submit</Button>

                </form>
            </div>
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
                            <input type="text" placeholder='e.g Edo state' name="state" onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">city</label>
                            <input type="text" placeholder='e.g Benin city' name='city' onChange={handleChange} />
                        </div>
                    </div>
                    <div className="w-50">
                        <div className="form-group">
                            <label htmlFor="">town</label>
                            <input type="text" placeholder='june 12 lain' name='town' onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">street</label>
                            <input type="text" placeholder='st. steph..' name='street' onChange={handleChange} />
                        </div></div>
                    <div className="w-100">
                        <label htmlFor="">Description</label>
                        <textarea name="description" id="description" placeholder='e.g hall 4 hostel, uniben opp.....' onChange={handleChange}></textarea>
                    </div>

                    <Button type='submit'>Submit</Button>

                </form>
            </div>

        </section>
    )
}

export default Settings
