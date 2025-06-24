import Divider from '@mui/material/Divider'
import Drawer, { drawerClasses } from '@mui/material/Drawer'
import Stack from '@mui/material/Stack'
import SideMenuNav from './SideMenuNav.tsx'

interface SideMenuMobileProps {
    open: boolean | undefined
    toggleDrawer: (newOpen: boolean) => () => void
}

export default function SideMenuMobile({
    open,
    toggleDrawer,
}: SideMenuMobileProps) {
    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={toggleDrawer(false)}
            sx={{
                zIndex: (theme) => theme.zIndex.drawer + 1,
                [`& .${drawerClasses.paper}`]: {
                    backgroundImage: 'none',
                    backgroundColor: 'background.paper',
                },
            }}
        >
            <Stack
                sx={{
                    maxWidth: '300px',
                    height: '100%',
                    minWidth: '70vw',
                }}
            >
                <Divider />
                <Stack sx={{ flexGrow: 1 }}>
                    <SideMenuNav />
                    <Divider />
                </Stack>
                {/*<Stack sx={{ p: 2 }}>*/}
                {/*  <Button variant="outlined" fullWidth startIcon={<LogoutRoundedIcon />}>*/}
                {/*    Logout*/}
                {/*  </Button>*/}
                {/*</Stack>*/}
            </Stack>
        </Drawer>
    )
}
