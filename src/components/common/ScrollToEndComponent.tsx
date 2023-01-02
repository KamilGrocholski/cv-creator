import { useRef } from "react"

interface ScrollToEndComponentProps {
    listWithScroll: (scrollToEnd: () => void) => React.ReactNode
}

export const ScrollToEndComponent: React.FC<ScrollToEndComponentProps> = ({
    listWithScroll
}) => {
    const scrollToEndRef = useRef<HTMLDivElement>(null)

    const handleScrollToEnd = () => {
        scrollToEndRef.current?.scrollIntoView({
            block: 'end',
            behavior: 'smooth'
        })
    }

    return (
        <div ref={scrollToEndRef}>
            {listWithScroll(handleScrollToEnd)}
        </div>
    )
}
