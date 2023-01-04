import { useCredentialsStore } from "../../../../../../store/credentials-store"
import { FormField } from "../../../../../common/FormField"
import '../Forms.scss'

export const CredentialsForm = () => {
    const name = useCredentialsStore(state => state.name)
    const surname = useCredentialsStore(state => state.surname)
    const email = useCredentialsStore(state => state.email)
    const phone = useCredentialsStore(state => state.phone)
    const address = useCredentialsStore(state => state.address)

    const setName = useCredentialsStore(state => state.setName)
    const setSurname = useCredentialsStore(state => state.setSurname)
    const setEmail = useCredentialsStore(state => state.setEmail)
    const setPhone = useCredentialsStore(state => state.setPhone)
    const setAddress = useCredentialsStore(state => state.setAddress)

    return (
        <form className='form'>
            <FormField
                label="Imię"
                value={name ?? ''}
                onChange={e => setName(e.target.value)}
                placeholder='Jan'
            />
            <FormField
                label="Nazwisko"
                value={surname ?? ''}
                onChange={e => setSurname(e.target.value)}
                placeholder='Kowalski'
            />
            <FormField
                label="E-mail"
                value={email ?? ''}
                onChange={e => setEmail(e.target.value)}
                placeholder='jankowalski@gmail.com'
            />
            <FormField
                label="Telefon"
                value={phone ?? ''}
                onChange={e => setPhone(e.target.value)}
                placeholder='777111555'
            />
            <FormField
                label="Adres"
                value={address ?? ''}
                onChange={e => setAddress(e.target.value)}
                placeholder='Warszawa 11-333'
            />
        </form>
    )
}
