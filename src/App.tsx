import { Fragment } from 'react'
import './App.style.scss'
import Editor from '@monaco-editor/react'
import { Panel, ResizeBorder } from '@components'
import { useStorage, useWindowEvent } from '@utils/hooks'
import * as monacoConfig from './monaco'
import { useFileSystemContext } from '@contexts'

export function App() {
    const windowWidth = useStorage(document.body.clientWidth)
    const panelWidth = useStorage(windowWidth.value * .15)
    const fileContext = useFileSystemContext()

    useWindowEvent('resize', () => {
        windowWidth.set(document.body.clientWidth)
    })

    return (
        <Fragment>
            <Panel width={panelWidth.value} />

            <ResizeBorder.Vertical
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
