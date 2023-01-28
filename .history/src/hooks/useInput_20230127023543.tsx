import { ChangeEvent, useState } from "react"

type createAccountType = {
    firstName: string
    lastName: string
    email: string
    password: string
    passowrdcomfirm: string
}
const useForm = (value: string) => {
    const [createAccount, setCreateAccount] = useState<createAccountType>({
        firstName: value,
        lastName: value,
        email: value,
        password: value,
        passowrdcomfirm: value

    })

    const handleAccount = (event: ChangeEvent<HTMLInputElement>) => {
        setCreateAccount({ ...createAccount, [event.target.name]: event.target.value })
    }
    const handleFormUpdate = {
        onChange: handleAccount,
        name: ''

    }

    const { email, password } = createAccount

    return [createAccount, handleFormUpdate, email, password]

}

export default useForm