import useGlobalStore from "../../store/globalStore.ts";

const useTheme = () => {
    const {setTheme} = useGlobalStore()

    return {
        setTheme
    }
}

export default useTheme;