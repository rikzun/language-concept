import { Storage, useDocumentEvent, useStorage } from '@utils/hooks'
import { ClassName } from '@utils/components'
import './ResizeBorder.styles.scss'
import { clamp } from '@utils'

type ResizeBorderAnchor = "vertical" | "horizontal"

interface ResizeBorderProps {
    maxValue?: number
    storage: Storage<number>
}

export namespace ResizeBorder {
    export function Vertical(props: ResizeBorderProps) { return component("vertical", props.storage, props.maxValue) }
    export function Horizontal(props: ResizeBorderProps) { return component("horizontal", props.storage, props.maxValue) }

    function component(anchor: ResizeBorderAnchor, storage: Storage<number>, maxValue?: number) {
        const hovered = useStorage(false)
        const pressed = useStorage(false)

        useDocumentEvent('mousemove', (e) => {
            if (!pressed.value) return

            const value = anchor == "vertical"
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
            <ClassName resize-border__hovered={hovered.value || pressed.value}>
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