export const Section: React.FC<{
  title?: string
  children: JSX.Element | JSX.Element[]
}> = ({
  title,
  children
}) => {
    return (
      <section>
        {title ?
          <span>{title}</span> : null}
        {children}
      </section>
    )
  }
