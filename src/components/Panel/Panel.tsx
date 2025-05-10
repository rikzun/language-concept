import './Panel.styles.scss'
import { Explorer } from '@components'

interface PanelProps {
    width: number
}

export function Panel(props: PanelProps) {
    return (
        <div className="panel" style={{ width: props.width + 'px' }}>
            <Explorer />
            <div className="tasks"></div>
        </div>
    )
}