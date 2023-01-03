import { useClauseStore } from "../../../../../../store/clause-store"
import { FormFieldTextArea } from "../../../../../common/FormField"

export const ClauseForm = () => {
    const clause = useClauseStore(state => state.clause)
    const setClause = useClauseStore(state => state.setClause)

    return (
        <form className='form'>
            <FormFieldTextArea
                label='Klauzula RODO'
                value={clause ?? ''}
                onChange={e => setClause(e.target.value)}
                placeholder='Wyrażam zgodę na...'
            />
        </form>
    )
}
