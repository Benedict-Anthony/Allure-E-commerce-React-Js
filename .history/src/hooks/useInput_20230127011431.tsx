import { useRef } from "react"

type inputRefTypes = {
    value: string
}

export const useInput = () => {
    const inputRef = useRef<inputRefTypes>(null)

    const refValue = inputRef.current?.value
    return [refValue, inputRef]
}