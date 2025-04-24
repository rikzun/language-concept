import { ContextMenuOption, useContextMenuContext } from 'src/contexts/ContextMenuContext'
import { FileItem, FileSystemContextHandler, useFileSystemContext } from "src/contexts/FileSystemContext"
import './Explorer.styles.scss'
import { ContextEvent } from 'src/utils/types'
import { useStorage } from 'src/utils'
import { ChangeEvent, KeyboardEvent } from 'react'

export function Explorer() {
    const contextMenu = useContextMenuContext()
    const fileContext = useFileSystemContext()

    const onContextMenu = (e: ContextEvent) => {
        contextMenu.open(e, [
            { label: "Создать файл...", action: () => { fileContext.addFile(null) }},
            { label: "Создать папку...", action: () => { fileContext.addFolder(null) }}
        ])
    }

    return (
        <div className="explorer" onContextMenu={onContextMenu}>
            {fileContext.fs.map((item, i) => (
                <ExplorerItem
                    key={item.id}
                    file={item}
                    index={i}
                    fsContext={fileContext}
                />
            ))}
        </div>
    )
}

interface ExplorerRowProps {
    file: FileItem
    index: number
    fsContext: FileSystemContextHandler
}

export function ExplorerItem(props: ExplorerRowProps) {
    const tempName = useStorage('')
    const contextMenu = useContextMenuContext()

    const onContextMenu = (e: ContextEvent) => {
        const options: ContextMenuOption[] = []

        switch (props.file.type) {
            case 'file': {
                options.push(
                    { label: "Удалить файл", action: () => {  }},
                )
                break
            }

            case 'folder': {
                options.push(
                    { label: "Удалить папку", action: () => {  }},
                    { label: "Создать файл...", action: () => { props.fsContext.addFile(props.file.id) }},
                    { label: "Создать папку...", action: () => { props.fsContext.addFolder(props.file.id) }}
                )
                break
            }

            default: break
        }

        contextMenu.open(e, options)
    }

    const onBlur = () => {
        if (tempName.value.length > 0) {
            props.fsContext.finishCreation(props.index, tempName.value)
        } else {
            props.fsContext.discardCreation(props.index)
        }
    }

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        tempName.set(e.target.value)
    }

    const onKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
        switch (e.code) {
            case 'Enter':
            case 'NumpadEnter': {
                if (tempName.value.length > 0) {
                    props.fsContext.finishCreation(props.index, tempName.value)
                } else {
                    props.fsContext.discardCreation(props.index)
                }
                break
            }

            case 'Escape': {
                props.fsContext.discardCreation(props.index)
                break
            }

            default: break
        }
    }

    if (props.file.name == null) {
        return (
            <div className="explorer-item">
                <div className="icon" />
                <input
                    type="text"
                    autoFocus
                    onBlur={onBlur}
                    onChange={onChange}
                    onKeyUp={onKeyUp}
                />
            </div>
        )
    }

    return (
        <div className="explorer-item" onContextMenu={onContextMenu}>
            <div className="icon" />
            <div className="name">{props.file.name}</div>
        </div>
    )
}