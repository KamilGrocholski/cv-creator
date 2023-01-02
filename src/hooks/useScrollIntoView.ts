import React, { useRef } from "react"

export const useScrollIntoView = () => {
    const ref = useRef<HTMLDivElement>(null)

    const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        ref.current?.scrollIntoView({
            behavior: 'smooth'
        })
    }

    return {
        ref,
        onClick
    }
}