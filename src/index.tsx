import { createRoot } from 'react-dom/client'
import { App } from "./App"
import { FileSystemProvider } from 'src/contexts/FileSystemContext'
import { ContextMenuProvider } from 'src/contexts/ContextMenuContext'

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
    <ContextMenuProvider>
        <FileSystemProvider>
            <App />
        </FileSystemProvider>
    </ContextMenuProvider>
)
