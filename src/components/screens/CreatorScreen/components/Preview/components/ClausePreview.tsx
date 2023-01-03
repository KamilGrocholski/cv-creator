import { useClauseStore } from "../../../../../../store/clause-store"

export const ClausePreview = () => {
    const clause = useClauseStore(state => state.clause)

    if (!clause) return null

    return (
        <div>{clause}</div>
    )
}
