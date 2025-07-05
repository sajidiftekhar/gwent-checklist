import Box from '@mui/material/Box'
import { Outlet } from 'react-router'

function MainContent() {
    return (
        <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
            <Outlet />
        </Box>
    )
}

export default MainContent
