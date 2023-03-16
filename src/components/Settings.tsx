import React, { FormEvent } from 'react'
import Button from '../shared/Button'
import useAddressForm from '../hooks/useAddressForm'
import useError from '../hooks/useError'
import Alert from "../shared/Alert"
import { sendUserData } from '../utils/sendData'

const Settings = () => {

    const { addressData, handleChange, reset } = useAddressForm("")
    const { error, handleError } = useError()


    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(addressData)
        if (!addressData.city || !addressData.street || !addressData.state || !addressData.town || !addressData.description) {
            handleError("All fields are required!")
            return;
        }

        try {

            const response = await sendUserData("user/account", {
                address: {
                    city: addressData.city,
                    street: addressData.street,
                    state: addressData.state,
                    town: addressData.town,
                    description: addressData.description
                },
                // avatar: addressData.avatar
            })
            console.log(response)
            if (response.status === 201 || response.status === 200) {
                reset()
                window.location.reload()
            }

        } catch (err) {
            console.log(err)
        }


    }



    return (
        <section className="container section">
            <div className="login">

                <form action="" className='form' onSubmit={handleSubmit}>
                    <h3>set a profile</h3>
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

                    <div className="form-group">
                        <input type="file" name="avatar" id="" onChange={handleChange} />
                    </div>
                    <Button type='submit'>Submit</Button>

                </form>
            </div>

        </section>
    )
}

export default Settings
