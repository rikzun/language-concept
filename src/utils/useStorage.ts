import { Dispatch, SetStateAction, useState } from "react"

export type StorageDispatcher<T> = Dispatch<SetStateAction<T>>
export interface Storage<T> { value: T, set: StorageDispatcher<T> }

export function useStorage<T>(value: T): Storage<T> {
    const [state, setState] = useState(value)
    return { value: state, set: setState }
}