import { Storage, clamp, useDocumentEvent, useStorage } from 'src/utils'
import { ClassName } from 'src/utils/components'
import './ResizeBorder.styles.scss'

type ResizeBorderAnchor = "left" | "top" | "right" | "bottom"

interface ResizeBorderProps {
    maxValue?: number
    storage: Storage<number>
}

export namespace ResizeBorder {
    export function Left(props: ResizeBorderProps) { return component("left", props.storage, props.maxValue) }
    export function Top(props: ResizeBorderProps) { return component("top", props.storage, props.maxValue) }
    export function Right(props: ResizeBorderProps) { return component("right", props.storage, props.maxValue) }
    export function Bottom(props: ResizeBorderProps) { return component("bottom", props.storage, props.maxValue) }

    function component(anchor: ResizeBorderAnchor, storage: Storage<number>, maxValue?: number) {
        const hovered = useStorage(false)
        const pressed = useStorage(false)

        useDocumentEvent('mousemove', (e) => {
            if (!pressed.value) return

            const value = anchor == "left" || anchor == "right"
                ? e.pageX
                : e.pageY
            
            storage.set(
                clamp(value, 0, maxValue)
            )
        })

        useDocumentEvent('mouseup', (e) => {
            if (!pressed.value) return
            pressed.set(false)
        })

        return (
            <ClassName class={(hovered.value || pressed.value) && "resize-border__hovered"}>
                <div
                    className={`resize-border noselect resize-border__${anchor}`}
                    style={{left: (storage.value - 3) + 'px'}}
                    onMouseDown={() => pressed.set(true)}
                    onMouseEnter={() => hovered.set(true)}
                    onMouseLeave={() => hovered.set(false)}
                />
            </ClassName>
        )
    }
}