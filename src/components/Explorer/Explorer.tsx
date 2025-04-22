import { useContextMenuContext } from 'src/contexts/ContextMenuContext'
import { FileType, useFileContext } from "src/contexts/FileContext"
import './Explorer.styles.scss'
import { ContextEvent } from 'src/utils/types'

export function Explorer() {
    const contextMenu = useContextMenuContext()
    const fileContext = useFileContext()

    const onContextMenu = (e: ContextEvent) => {
        contextMenu.open(e, [
            { label: "Создать файл...", action: () => { fileContext.addFile() }},
            { label: "Создать папку...", action: () => { fileContext.addFile() }}
        ])
    }

    return (
        <div className="explorer" onContextMenu={onContextMenu}>
            {fileContext.files.map((v) => (
                <ExplorerItem key={v.id} type={v.type} name={v.name} />
            ))}
        </div>
    )
}

interface ExplorerRowProps {
    type: FileType
    name: string
}

export function ExplorerItem(props: ExplorerRowProps) {
    const contextMenu = useContextMenuContext()

    const onContextMenu = (e: ContextEvent) => {
        contextMenu.open(e, [])
    }

    return (
        <div className="explorer-item" onContextMenu={onContextMenu}>
            <div className="icon" />
            <div className="name">{props.name}</div>
        </div>
    )
}