import { ImgHTMLAttributes } from "react"

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string
}

export const Image = ({
  src,
  ...props
}: ImageProps): JSX.Element => {
  return (
    <img
      src={src}
      width={32}
      height={32}
      {...props}
    />
  )
}
