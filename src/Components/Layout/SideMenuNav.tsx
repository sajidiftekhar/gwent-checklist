import ListItemButton from '@mui/material/ListItemButton'
import { NavLink } from 'react-router'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import StyleIcon from '@mui/icons-material/Style'
import List from '@mui/material/List'
import { getRoutePath, ROUTES } from '../../lib/config/routes'

const mainListItems = [
    { text: 'Home', icon: <HomeRoundedIcon />, to: '/' },
    {
        text: 'Gwent Checklist',
        icon: <StyleIcon />,
        to: getRoutePath(ROUTES.CHECKLIST),
    },
]

function SideMenuNav() {
    return (
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
                    <ListItemText sx={{ ml: 1 }} primary={item.text} />
                </ListItemButton>
            ))}
        </List>
    )
}

export default SideMenuNav
