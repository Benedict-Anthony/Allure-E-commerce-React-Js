import { useRef } from "react"

type inputRefTypes = {
    value: string
}

export const useInput = () => {
    const inputRef = useRef<inputRefTypes>(null)
    const ref = { inputRef, }
    const refValue = inputRef.current?.value
    return [refValue, ref]
}