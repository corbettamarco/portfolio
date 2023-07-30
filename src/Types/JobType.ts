import { ReactElement, ReactFragment, ReactNode } from "react"
import { IconType } from "react-icons/lib"
import { JsxElement } from "typescript"

export type JobType={
    company: string,
    dates: string,
    role: string,
    img: string,
    location:string,
    desc: string,
    icons?: ReactElement[],
}