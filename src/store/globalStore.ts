import {create} from 'zustand'
import {createJSONStorage, persist} from "zustand/middleware";

export type AppTheme = 'light' | 'dark' | 'default';


interface GlobalState {
    theme: AppTheme,
    setTheme: (theme: AppTheme) => void,
    getTheme: () => AppTheme,
}

const useGlobalStore = create<GlobalState>()(
    persist(
        (set, get) => ({
            theme: 'dark',
            setTheme: theme => set(state => ({
                ...state,
                theme
            })),
            getTheme: () => get().theme
        }),
        {
            name: 'global',
            storage: createJSONStorage(() => localStorage)
        }
    )
)

export default useGlobalStore