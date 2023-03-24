import { ChangeEvent, useState } from "react"
import { useUserContext } from "../contexts/UserAndCartContext"

type formDataType = {
    state: string
    city: string
    town: string
    street: string
    description: string

}
const useAddressForm = () => {
    const { profile } = useUserContext()
    const { address } = profile
    const [addressData, setAddressFormData] = useState<formDataType>({
        state: address?.state as string,
        city: address?.city as string,
        town: address?.town as string,
        street: address?.street as string,
        description: address?.description as string,


    })

    const reset = () => {
        setAddressFormData({
            state: "",
            city: "",
            street: "",
            town: "",
            description: "",
        })
    }
    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setAddressFormData({ ...addressData, [event.target.name]: event.target.value })
    }



    return { addressData, handleChange, reset, }

}

export default useAddressForm