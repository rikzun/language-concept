import { createContext, useContext } from 'react';
import { useStorage, StorageDispatcher } from 'src/utils'
import { Children } from 'src/utils/types'

class FileContextHandler {
    readonly files: File[]
    private fileSetter: StorageDispatcher<File[]>
    
    constructor(fileValue: File[], fileSetter: StorageDispatcher<File[]>) {
        this.files = fileValue
        this.fileSetter = fileSetter
    }

    addFile() {
        this.fileSetter((files) => {
            const newID = Math.max(...files.map((v) => v.id), 1)

            return [
                ...files,
                {id: newID, parentId: 1, type: 'folder', name: 'aboba'}
            ]
        })
    }
}

export type FileType =
    'folder'

interface File {
    id: number
    parentId: number

    type: FileType
    name: string
}

const FileContext = createContext({} as FileContextHandler)
export function useFileContext() { return useContext(FileContext) }

export function FileProvider(props: Children) {
    const files = useStorage<File[]>([{id: 0, parentId: 1, type: 'folder', name: 'ab1'}])

    return (
        <FileContext.Provider
            value={new FileContextHandler(files.value, files.set)}
            children={props.children}
        />
    )
}