import { ChangeEvent, useState } from "react"

type createAccountType = {
    firstName: string
    lastName: string
    email: string
    password: string
    passwordcomfirm: string
}
const useForm = (value: string | null) => {
    const [createAccount, setCreateAccount] = useState<createAccountType>({
        firstName: value,
        lastName: value,
        email: value,
        password: value,
        passwordcomfirm: value

    })

    const reset = () => {
        setCreateAccount({
            firstName: value,
            lastName: value,
            email: value,
            password: value,
            passwordcomfirm: value
        })
    }
    const handleAccount = (event: ChangeEvent<HTMLInputElement>) => {
        setCreateAccount({ ...createAccount, [event.target.name]: event.target.value })
    }


    const { email, password } = createAccount

    return { createAccount, handleAccount, reset, email, password }

}

export default useForm