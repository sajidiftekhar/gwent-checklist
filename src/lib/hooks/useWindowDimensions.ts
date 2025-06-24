import {useEffect, useState} from "react";

const getWindowDimensions = (): { width: number, height: number } => {

    const {innerWidth: width, innerHeight: height} = window

    return {width, height}
}

const useWindowDimensions = () => {
    const [size, setSize] = useState(getWindowDimensions())

    useEffect(() => {
        function handleResize() {
            setSize(getWindowDimensions())
        }

        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, []);

    return size;
}

export const useWindowHeight = () => {
    return useWindowDimensions()?.height
}

export const useWindowWidth = () => {
    return useWindowDimensions()?.width
}

export default useWindowDimensions