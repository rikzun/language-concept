import { useEffect } from "react"

export function useWindowEvent<Event extends keyof WindowEventMap>(
    event: Event,
    callback: (ev: WindowEventMap[Event]) => any
) {
    useEffect(() => {
        window.addEventListener(event, callback)
        return () => window.removeEventListener(event, callback)
    }, [callback])
}