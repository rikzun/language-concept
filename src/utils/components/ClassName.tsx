import { cloneElement, isValidElement } from "react"
import { Children } from "src/utils/types"
import { toArrayIfNot } from "src/utils/utils"

interface ClassNameProps extends Children {
    class: (string|boolean) | (string|boolean)[]
}

export function ClassName(props: ClassNameProps) {
    const className = toArrayIfNot(props.class).filter(Boolean).join(' ')

    return toArrayIfNot(props.children).map((el) => {
        if (isValidElement(el)) {
            let currentClassName = (el.props.className as string) ?? ''
            if (!currentClassName.endsWith(' ')) currentClassName += ' '

            return cloneElement(el, {
                //@ts-ignore
                className: currentClassName + className
            })
        }

        return el
    })
}