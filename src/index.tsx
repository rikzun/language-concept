import { createRoot } from 'react-dom/client'
import { App } from "./App"
import { FileProvider } from 'src/contexts/FileContext'
import { ContextMenuProvider } from 'src/contexts/ContextMenuContext'

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
    <ContextMenuProvider>
        <FileProvider>
            <App />
        </FileProvider>
    </ContextMenuProvider>
)
