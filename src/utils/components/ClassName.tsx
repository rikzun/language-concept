import { ReactNode, cloneElement, isValidElement } from "react"
import { toArrayIfNot } from "src/utils/utils"

interface ClassNameProps {
    class: (string|boolean) | (string|boolean)[]
    children: ReactNode
}

export function ClassName(props: ClassNameProps) {
    const className = toArrayIfNot(props.class).filter(Boolean).join(' ')

    if (isValidElement(props.children)) {
        let currentClassName = (props.children.props.className as string) ?? ''
        if (!currentClassName.endsWith(' ')) currentClassName += ' '

        return cloneElement(props.children, {
            //@ts-ignore
            className: currentClassName + className
        })
    }

    return props.children
}