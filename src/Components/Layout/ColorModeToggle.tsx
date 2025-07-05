import { memo } from 'react'
import DarkModeIcon from '@mui/icons-material/DarkModeRounded'
import LightModeIcon from '@mui/icons-material/LightModeRounded'
import { type IconButtonOwnProps } from '@mui/material/IconButton'
import { useColorScheme } from '@mui/material/styles'
import MenuButton from './MenuButton.tsx'

function ColorModeToggle(props: IconButtonOwnProps) {
    const { mode, systemMode, setMode } = useColorScheme()

    const handleModeChange = () => {
        setMode(mode === 'dark' ? 'light' : 'dark')
    }

    const resolvedMode = (systemMode || mode) as 'light' | 'dark'
    const icon = {
        light: <LightModeIcon />,
        dark: <DarkModeIcon />,
    }[resolvedMode]
    return (
        <MenuButton onClick={handleModeChange} size="small" {...props}>
            {icon}
        </MenuButton>
    )
}

export default memo(ColorModeToggle)
