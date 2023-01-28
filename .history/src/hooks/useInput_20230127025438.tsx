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



    const { email, password } = createAccount

    return { createAccount, setCreateAccount, email, password }

}

export default useForm