import { Explorer } from 'src/components'
import './Panel.styles.scss'
import { Storage } from "src/utils/useStorage"

interface PanelProps {
    widthStorage: Storage<number>
}

export function Panel(props: PanelProps) {
    return (
        <div className="panel" style={{ width: props.widthStorage.value + 'px' }}>
            <Explorer />
            <div className="tasks"></div>
        </div>
    )
}