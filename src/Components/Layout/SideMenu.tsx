import { styled } from '@mui/material/styles'
import MuiDrawer, { drawerClasses } from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import SelectContent from './SelectContent'
import { memo } from 'react'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import StyleIcon from '@mui/icons-material/Style'
import { NavLink } from 'react-router'

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
        to: '/checklist',
    },
    // { text: 'List of cards', icon: <PeopleRoundedIcon />, to: 'cards' },
]

// const secondaryListItems = [
//     { text: 'Settings', icon: <SettingsRoundedIcon /> },
//     { text: 'About', icon: <InfoRoundedIcon /> },
//     { text: 'Feedback', icon: <HelpRoundedIcon /> },
// ]

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
                <SelectContent />
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
                    {/*<List dense>*/}
                    {/*    {secondaryListItems.map((item, index) => (*/}
                    {/*        <ListItem*/}
                    {/*            key={index}*/}
                    {/*            disablePadding*/}
                    {/*            sx={{ display: 'block' }}*/}
                    {/*        >*/}
                    {/*            <ListItemButton>*/}
                    {/*                <ListItemIcon>{item.icon}</ListItemIcon>*/}
                    {/*                <ListItemText primary={item.text} />*/}
                    {/*            </ListItemButton>*/}
                    {/*        </ListItem>*/}
                    {/*    ))}*/}
                    {/*</List>*/}
                </Stack>
            </Box>
            {/*<Stack*/}
            {/*    direction="row"*/}
            {/*    sx={{*/}
            {/*        p: 2,*/}
            {/*        gap: 1,*/}
            {/*        alignItems: 'center',*/}
            {/*        borderTop: '1px solid',*/}
            {/*        borderColor: 'divider',*/}
            {/*    }}*/}
            {/*>*/}
            {/*    <Avatar*/}
            {/*        sizes="small"*/}
            {/*        alt="Riley Carter"*/}
            {/*        src="/static/images/avatar/7.jpg"*/}
            {/*        sx={{ width: 36, height: 36 }}*/}
            {/*    />*/}
            {/*    <Box sx={{ mr: 'auto' }}>*/}
            {/*        <Typography*/}
            {/*            variant="body2"*/}
            {/*            sx={{ fontWeight: 500, lineHeight: '16px' }}*/}
            {/*        >*/}
            {/*            Riley Carter*/}
            {/*        </Typography>*/}
            {/*        <Typography*/}
            {/*            variant="caption"*/}
            {/*            sx={{ color: 'text.secondary' }}*/}
            {/*        >*/}
            {/*            riley@email.com*/}
            {/*        </Typography>*/}
            {/*    </Box>*/}
            {/*    <OptionsMenu />*/}
            {/*</Stack>*/}
        </Drawer>
    )
}

export default memo(SideMenu)
