import { ContextMenu } from '@components'
import { createContext, useContext } from 'react'
import { useStorage, Storage } from '@utils/hooks'
import { Children, ContextEvent } from '@utils'

class ContextMenuHandler {
    storage: Storage<ContextMenuData>

    constructor(storage: Storage<ContextMenuData>) {
        this.storage = storage
    }

    open(event: ContextEvent, options: ContextMenuOption[]) {
        event.preventDefault()
        event.stopPropagation()

        this.storage.set((v) => {
            v.x = event.pageX
            v.y = event.pageY
            v.options = options

            return {...v}
        })
    }
}

export interface ContextMenuData {
    x?: number
    y?: number
    options: ContextMenuOption[]
}

export interface ContextMenuOption {
    label: string
    action: () => void
}

const ContextMenuContext = createContext({} as ContextMenuHandler)
export function useContextMenuContext() { return useContext(ContextMenuContext) }

export function ContextMenuProvider(props: Children) {
    const storage = useStorage<ContextMenuData>({ options: [] })

    return (
        <ContextMenuContext.Provider value={new ContextMenuHandler(storage)}>
            <ContextMenu
                x={storage.value.x}
                y={storage.value.y}
                options={storage.value.options}
                onClose={() => storage.set({ options: [] })}
            />

            {props.children}
        </ContextMenuContext.Provider>
    )
}
