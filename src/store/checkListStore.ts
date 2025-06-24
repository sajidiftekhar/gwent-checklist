import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { encryptedStorage } from './encryptedStorage.ts'
import type {
    GameExpansion,
    GameTerritory,
    GwentDeck,
    ObtainMethod,
} from '../@types/gwent-types'

export type CheckListColumn =
    | 'id'
    | 'name'
    | 'obtainedFrom'
    | 'deck'
    | 'territory'
    | 'expansion'
    | 'details'

type FilterSetter = (filter?: any | undefined) => void

export interface CheckListStore {
    showDetails: boolean
    setShowDetails: (showDetails: boolean) => void
    columns: CheckListColumn[]
    setColumns: (columns: CheckListColumn[]) => void
    sortBy: CheckListColumn
    setSortBy: (sortBy: CheckListColumn) => void
    perPage: number
    setPerPage: (perPage: number) => void
    filters: {
        search?: string
        deck?: GwentDeck
        territory?: GameTerritory
        expansion?: GameExpansion
        obtainMethod?: ObtainMethod
    }
    setSearchFilter: FilterSetter
    setDeckFilter: FilterSetter
    setTerritoryFilter: FilterSetter
    setExpansionFilter: FilterSetter
    setObtainMethodFilter: FilterSetter
    clearFilters: () => void
}

const useCheckListStore = create<CheckListStore>()(
    persist(
        (set) => ({
            showDetails: true,
            setShowDetails: (showDetails: boolean) =>
                set((state) => ({
                    ...state,
                    showDetails: showDetails,
                })),
            columns: [],
            setColumns: (columns: CheckListColumn[]) =>
                set((state) => ({
                    ...state,
                    columns,
                })),
            perPage: 100,
            setPerPage: (perPage: number) =>
                set((state) => ({
                    ...state,
                    perPage,
                })),
            sortBy: 'id',
            setSortBy: (sortBy: CheckListColumn) =>
                set((state) => ({
                    ...state,
                    sortBy,
                })),
            filters: {
                search: undefined,
                deck: undefined,
                territory: undefined,
                expansion: undefined,
            },
            setSearchFilter: (search: string | undefined) =>
                set((state) => ({
                    ...state,
                    filters: {
                        ...state.filters,
                        search,
                    },
                })),
            setDeckFilter: (deck: GwentDeck | undefined) =>
                set((state) => ({
                    ...state,
                    filters: {
                        ...state.filters,
                        deck,
                    },
                })),
            setTerritoryFilter: (territory: GameTerritory | undefined) =>
                set((state) => ({
                    ...state,
                    filters: {
                        ...state.filters,
                        territory,
                    },
                })),
            setExpansionFilter: (expansion: GameExpansion | undefined) =>
                set((state) => ({
                    ...state,
                    filters: {
                        ...state.filters,
                        expansion,
                    },
                })),
            setObtainMethodFilter: (obtainMethod: ObtainMethod | undefined) =>
                set((state) => ({
                    ...state,
                    filters: {
                        ...state.filters,
                        obtainMethod,
                    },
                })),
            clearFilters: () =>
                set((state) => ({
                    ...state,
                    filters: {},
                })),
        }),
        {
            name: 'checklist',
            storage: createJSONStorage(() => encryptedStorage),

            partialize: (state) => {
                // Don't persist the filters

                const { filters: _, ...rest } = state

                return {
                    ...rest,
                }
            },
        }
    )
)

export default useCheckListStore
