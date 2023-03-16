import { ChangeEvent, useState } from "react"

type formDataType = {
    state: string
    city: string
    town: string
    street: string
    description: string
    avatar: string

}
const useAddressForm = (value: string) => {
    const [addressData, setAddressFormData] = useState<formDataType>({
        state: value,
        city: value,
        town: value,
        street: value,
        description: value,
        avatar: ""


    })

    const reset = () => {
        setAddressFormData({
            state: "",
            city: "",
            street: "",
            town: "",
            description: "",
            avatar: ""
        })
    }
    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setAddressFormData({ ...addressData, [event.target.name]: event.target.value })
    }



    return { addressData, handleChange, reset, }

}

export default useAddressForm