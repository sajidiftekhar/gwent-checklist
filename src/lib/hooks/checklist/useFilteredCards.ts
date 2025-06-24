import type { GwentCard } from '../../../@types/gwent-types'
import { useMemo } from 'react'
import useCheckListStore from '../../../store/checkListStore.ts'
import {
    transformGameTerritory,
    transformGwentDeck,
    transformObtainMethod,
} from '../../../data/cards/cardDataTransformer.ts'

const useFilteredCards = (cards: GwentCard[]) => {
    const cardsArray = useMemo(() => [...cards], [cards])

    const filters = useCheckListStore((state) => state.filters)

    // Search Filter
    return cardsArray.filter((card) => {
        const matchesSearch =
            !filters.search ||
            card.name.toLowerCase().includes(filters.search.toLowerCase()) ||
            card.details?.toLowerCase().includes(filters.search.toLowerCase())

        const matchesDeck =
            !filters.deck || card.deck === transformGwentDeck(filters.deck)

        const matchesTerritory =
            !filters.territory ||
            card.territory === transformGameTerritory(filters.territory)

        console.log(
            !filters.expansion ||
                card.expansion.toLowerCase() ===
                    filters.expansion.toLowerCase(),
            card.expansion,
            filters.expansion
        )
        const matchesExpansion =
            !filters.expansion ||
            card.expansion.toLowerCase() === filters.expansion.toLowerCase()

        const matchesObtainMethod =
            !filters.obtainMethod ||
            card.obtainMethod === transformObtainMethod(filters.obtainMethod)

        return (
            matchesSearch &&
            matchesDeck &&
            matchesTerritory &&
            matchesExpansion &&
            matchesObtainMethod
        )
    })
}

export default useFilteredCards
