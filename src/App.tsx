import { Fragment } from 'react'
import './App.style.scss'
import Editor from '@monaco-editor/react'
import { Panel } from '@components'
import { useStorage } from 'src/utils/useStorage'
import { ResizeBorder } from 'src/components'
import * as monacoConfig from 'src/monaco'
import { useWindowEvent } from 'src/utils/useWindowEvent'
import { useFileSystemContext } from 'src/contexts/FileSystemContext'

export function App() {
    const windowWidth = useStorage(document.body.clientWidth)
    const panelWidth = useStorage(windowWidth.value * .15)
    const fileContext = useFileSystemContext()

    useWindowEvent('resize', (e) => {
        windowWidth.set(document.body.clientWidth)
    })

    return (
        <Fragment>
            <Panel widthStorage={panelWidth} />

            <ResizeBorder.Left
                maxValue={windowWidth.value * .8}
                storage={panelWidth}
            />

            <div className="right" style={{width: `calc(100% - ${panelWidth.value}px)`}}>
                <Editor
                    loading=""
                    theme={monacoConfig.themeName}
                    language={monacoConfig.languageName}
                    options={{contextmenu: false}}
                    value={fileContext.contentCurrent() ?? ''}
                    onChange={(v) => fileContext.inputCurrent(v ?? '')}
                    beforeMount={monacoConfig.edit}
                    width={windowWidth.value - panelWidth.value}
                />
                <div className="terminal"></div>
            </div>
        </Fragment>
    )
}
