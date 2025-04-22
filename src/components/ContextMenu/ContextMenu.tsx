import { ContextMenuData } from 'src/contexts/ContextMenuContext'
import { Fragment } from 'react/jsx-runtime'
import './ContextMenu.styles.scss'

interface ContextMenuProps extends ContextMenuData {
    onClose: () => void
}

export function ContextMenu(props: ContextMenuProps) {
    if (props.x == null || props.y == null) return null
    const position = {left: props.x + 'px', top: props.y + 'px'}

    return (
        <Fragment>
            <div
                className="context_menu_page_background"
                onClick={props.onClose}
                onMouseDownCapture={props.onClose}
            />

            <div className="context_menu" style={position}>
                {props.options.map((option) => {
                    const onClick = () => {
                        option.action()
                        props.onClose()
                    }

                    return (
                        <div className="context_menu__element" onClick={onClick}>
                            {option.label}
                        </div>
                    )
                })}
            </div>
        </Fragment>
    )
}