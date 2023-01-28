import { useRef } from "react"

type inputRefTypes = {
    value: string
}

export const useInput = () => {
    const ref = useRef<inputRefTypes>(null)

    return [ref?.current?.value]
}