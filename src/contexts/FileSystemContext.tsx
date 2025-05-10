import { createContext, useContext } from 'react';
import { useStorage, StorageDispatcher } from '@utils/hooks'
import { Children } from '@utils'

export class FileSystemContextHandler {
    readonly fs: FileItem[]
    private fsSetter: StorageDispatcher<FileItem[]>
    private currentItemIndex: number
    private currentItemIndexSet: StorageDispatcher<number>
    
    constructor(
        fs: FileItem[],
        fsSetter: StorageDispatcher<FileItem[]>,
        currentItemIndex: number,
        currentItemIndexSet: StorageDispatcher<number>
    ) {
        this.fs = fs
        this.fsSetter = fsSetter
        this.currentItemIndex = currentItemIndex
        this.currentItemIndexSet = currentItemIndexSet
    }

    private genID() {
        return Math.max(
            ...this.fs.map((v) => v.id), 0
        ) + 1
    }
    
    addFile(parentID: number | null) {
        this.fsSetter((items) => {
            return [
                ...items,
                { id: this.genID(), parentID, type: 'file', name: null, content: null }
            ]
        })
    }

    addFolder(parentID: number | null) {
        this.fsSetter((items) => {
            return [
                ...items,
                { id: this.genID(), parentID, type: 'folder', name: null, content: null }
            ]
        })
    }

    discardCreation(index: number) {
        this.fsSetter((items) => {
            items.splice(index, 1)
            return [...items]
        })
    }

    finishCreation(index: number, name: string) {
        this.fsSetter((items) => {
            items[index].name = name
            return [...items]
        })
    }

    inputCurrent(value: string) {
        this.fsSetter((items) => {
            items[this.currentItemIndex].content = value
            return [...items]
        })
    }

    contentCurrent() {
        return this.fs[this.currentItemIndex].content
    }
}

export type FileType =
    | 'folder'
    | 'file'

export interface FileItem {
    id: number
    parentID: number | null

    type: FileType
    name: string | null
    content: string | null
}

const FileSystemContext = createContext({} as FileSystemContextHandler)
export function useFileSystemContext() { return useContext(FileSystemContext) }

export function FileSystemProvider(props: Children) {
    const current = useStorage(0)
    const files = useStorage<FileItem[]>([
        { id: 0, parentID: null, type: 'file', name: 'file.txt', content: null }
    ])

    return (
        <FileSystemContext.Provider
            value={new FileSystemContextHandler(files.value, files.set, current.value, current.set)}
            children={props.children}
        />
    )
}