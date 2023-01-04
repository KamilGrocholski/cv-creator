import jsPDF from "jspdf"
import { useCredentialsStore } from "../../../../../../store/credentials-store"

export const CredentialsPreview = (doc: jsPDF) => {
    const name = useCredentialsStore(state => state.name)
    const surname = useCredentialsStore(state => state.surname)
    const email = useCredentialsStore(state => state.email)
    const phone = useCredentialsStore(state => state.phone)
    const address = useCredentialsStore(state => state.address)

    return (
        <div style={{
            backgroundColor: 'blue'
        }}>
            <div>{name}</div>
            <div>{name}</div>
            <div>{name}</div>
            <div>{name}</div>
        </div>
    )
}
