import { alpha } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import AppNavbar from './Components/Layout/AppNavbar'
import Header from './Components/Layout/Header'
import SideMenu from './Components/Layout/SideMenu'

import AppTheme from './lib/AppTheme'
import MainContent from './Components/Layout/MainContent.tsx'
import Copyright from './Components/Layout/Copyright.tsx'

function App() {
    return (
        <AppTheme>
            <CssBaseline enableColorScheme />
            <Box sx={{ display: 'flex' }}>
                <SideMenu />
                <AppNavbar />
                <Box
                    component="main"
                    sx={(theme) => ({
                        flexGrow: 1,
                        backgroundColor: theme.vars
                            ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
                            : alpha(theme.palette.background.default, 1),
                        overflow: 'auto',
                    })}
                >
                    <Stack
                        spacing={2}
                        sx={{
                            alignItems: 'center',
                            mx: 3,
                            pb: 5,
                            mt: { xs: 8, md: 0 },
                        }}
                    >
                        <Header />
                        <MainContent />
                        <Copyright sx={{ my: 4 }} />
                    </Stack>
                </Box>
            </Box>
        </AppTheme>
    )
}

export default App
