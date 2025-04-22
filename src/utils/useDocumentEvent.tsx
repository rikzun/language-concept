import { useEffect } from "react"

export function useDocumentEvent<Event extends keyof DocumentEventMap>(
    event: Event,
    callback: (ev: DocumentEventMap[Event]) => any
) {
    useEffect(() => {
        document.addEventListener(event, callback)
        return () => document.removeEventListener(event, callback)
    }, [callback])
}