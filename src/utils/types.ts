import { ReactNode, MouseEvent as ReactMouseEvent } from "react"

export interface Children {
    children: ReactNode | ReactNode[]
}

export type ContextEvent = ReactMouseEvent<HTMLDivElement, MouseEvent>