import { ChangeEvent, useState } from "react"

type createAccountType = {
    firstName: string
    lastName: string
    email: string
    password: string
    passowrdcomfirm: string
}
const useForm = () => {
    const [createAccount, setCreateAccount] = useState<createAccountType>({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passowrdcomfirm: ""

    })

    const handleAccount = (event: ChangeEvent<HTMLInputElement>) => {
        setCreateAccount({ ...createAccount, [event.target.name]: event.target.value })
    }

    const { email, password } = createAccount

    return [createAccount, handleAccount, email, password]

}

export default useForm