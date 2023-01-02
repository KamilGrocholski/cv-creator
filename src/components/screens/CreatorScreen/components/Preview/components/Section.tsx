import { usePreviewSettingsStore } from "../../../../../../store/preview-settings-store"

export const Section: React.FC<{
  title?: string
  children: JSX.Element | JSX.Element[]
}> = ({
  title,
  children
}) => {
    const { headers, accent } = usePreviewSettingsStore()

    return (
      <section>
        {title ?
          <span style={{
            fontSize: headers.size,
            color: accent
          }}>{title}</span> : null}
        {children}
      </section>
    )
  }
