import Box from '@mui/material/Box'
import Copyright from './Copyright.tsx'
import { Outlet } from 'react-router'

function MainContent() {
    return (
        <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
            <Outlet />
            <Copyright sx={{ my: 4 }} />
        </Box>
    )
}

export default MainContent
