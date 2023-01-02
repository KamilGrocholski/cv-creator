import { useCredentialsStore } from "../../../../../../store/credentials-store"
import { Section } from "./Section"

export const CredentialsPreview = () => {
    const name = useCredentialsStore(state => state.name)
    const surname = useCredentialsStore(state => state.surname)
    const email = useCredentialsStore(state => state.email)
    const phone = useCredentialsStore(state => state.phone)
    const address = useCredentialsStore(state => state.address)

    return (
        <Section>
            <div><span>{name} {surname}</span></div>
            <div><span>{email}</span></div>
            <div><span>{address}</span></div>
            <div><span>{phone}</span></div>
        </Section>
    )
}
