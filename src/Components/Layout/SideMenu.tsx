import { styled } from '@mui/material/styles'
import MuiDrawer, { drawerClasses } from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import SideManuSelect from './SideManuSelect.tsx'
import { memo } from 'react'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import StyleIcon from '@mui/icons-material/Style'
import { NavLink } from 'react-router'
import { getRoutePath, ROUTES } from '../../lib/config/routes.ts'

const drawerWidth = 240

const Drawer = styled(MuiDrawer)({
    width: drawerWidth,
    flexShrink: 0,
    boxSizing: 'border-box',
    mt: 10,
    [`& .${drawerClasses.paper}`]: {
        width: drawerWidth,
        boxSizing: 'border-box',
    },
})

const mainListItems = [
    { text: 'Home', icon: <HomeRoundedIcon />, to: '/' },
    {
        text: 'Gwent Checklist',
        icon: <StyleIcon />,
        to: getRoutePath(ROUTES.CHECKLIST),
    },
]


function SideMenu() {
    return (
        <Drawer
            variant="permanent"
            sx={{
                display: { xs: 'none', md: 'block' },
                [`& .${drawerClasses.paper}`]: {
                    backgroundColor: 'background.paper',
                },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    mt: 'calc(var(--template-frame-height, 0px) + 4px)',
                    p: 1.5,
                }}
            >
                <SideManuSelect />
            </Box>
            <Divider />
            <Box
                sx={{
                    overflow: 'auto',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Stack
                    sx={{ flexGrow: 1, p: 0, justifyContent: 'space-between' }}
                >
                    <List
                        disablePadding
                        component="nav"
                        sx={{
                            width: '100%',
                            maxWidth: 360,
                            bgcolor: 'background.paper',
                            '&.MuiList-root': {
                                padding: '0',
                            },
                        }}
                    >
                        {mainListItems.map((item, index) => (
                            <ListItemButton
                                component={NavLink}
                                to={item.to}
                                key={index}
                                sx={{
                                    padding: '12px 15px',
                                    '&:hover': {
                                        color: 'inherit',
                                    },
                                }}
                            >
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText
                                    sx={{ ml: 1 }}
                                    primary={item.text}
                                />
                            </ListItemButton>
                        ))}
                    </List>
                </Stack>
            </Box>
        </Drawer>
    )
}

export default memo(SideMenu)
