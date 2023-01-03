import { View, Text } from "@react-pdf/renderer"
import { useCredentialsStore } from "../../../../../../store/credentials-store"
import { usePreviewSettingsStore } from "../../../../../../store/preview-settings-store"

export const CredentialsPreview = () => {
    const name = useCredentialsStore(state => state.name)
    const surname = useCredentialsStore(state => state.surname)
    const email = useCredentialsStore(state => state.email)
    const phone = useCredentialsStore(state => state.phone)
    const address = useCredentialsStore(state => state.address)

    const { text, accent } = usePreviewSettingsStore()

    return (
        <View style={{
            backgroundColor: 'blue'
        }}>
            x
        </View>
    )
}
