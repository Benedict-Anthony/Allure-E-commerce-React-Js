import { ChangeEvent, useState } from "react"

type formDataType = {
    first_name: string
    last_name: string
    email: string
    password: string
    passwordcomfirm: string
}
const useForm = (value: string) => {
    const [formData, setFormData] = useState<formDataType>({
        first_name: value,
        last_name: value,
        email: value,
        password: value,
        passwordcomfirm: value

    })

    const reset = () => {
        setFormData({
            first_name: value,
            last_name: value,
            email: value,
            password: value,
            passwordcomfirm: value
        })
    }
    const handleAccount = (event: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }


    const loginData = { email: formData.email, password: formData.password }

    return { formData, handleAccount, reset, loginData }

}

export default useForm