import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { encryptedStorage } from './encryptedStorage.ts'

interface CardStoreState {
    collected: Set<number>
    addCollected: (id: number) => void
    removeCollected: (id: number) => void
    isCollected: (id: number) => boolean
    setCollected: (ids: number[] | Set<number>) => void
}

export const useCardsStore = create<CardStoreState>()(
    persist(
        (set, get) => ({
            collected: new Set(),
            addCollected: (id) =>
                set((state) => {
                    const newSet = new Set(state.collected)
                    newSet.add(id)

                    return {
                        ...state,
                        collected: newSet,
                    }
                }),
            removeCollected: (id) =>
                set((state) => {
                    const newSet = new Set(state.collected)
                    newSet.delete(id)

                    return {
                        ...state,
                        collected: newSet,
                    }
                }),

            setCollected: (ids: number[] | Set<number>) =>
                set((state) => {
                    const newSet = new Set(ids)

                    return {
                        ...state,
                        collected: newSet,
                    }
                }),

            // Helper functions
            isCollected: (id) => get().collected.has(id),
        }),
        {
            name: 'cards',
            partialize: (state) => ({
                ...state,
                collected: Array.from(state.collected),
            }),
            merge: (persistedState, currentState) => {
                const parsed = persistedState as any

                return {
                    ...currentState,
                    parsed,
                    collected: new Set(parsed.collected),
                }
            },
            storage: createJSONStorage(() => encryptedStorage),
        }
    )
)
