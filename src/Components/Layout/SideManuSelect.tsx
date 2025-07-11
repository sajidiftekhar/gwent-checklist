import { useState } from 'react'
import MuiAvatar from '@mui/material/Avatar'
import MuiListItemAvatar from '@mui/material/ListItemAvatar'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import Select, {
    type SelectChangeEvent,
    selectClasses,
} from '@mui/material/Select'
import { styled } from '@mui/material/styles'
import witcher3Icon from '../../assets/witcher3.png'

const Avatar = styled(MuiAvatar)(({ theme }) => ({
    width: 28,
    height: 28,
    backgroundColor: (theme.vars || theme).palette.background.paper,
    color: (theme.vars || theme).palette.text.secondary,
    border: `1px solid ${(theme.vars || theme).palette.divider}`,
}))

const ListItemAvatar = styled(MuiListItemAvatar)({
    minWidth: 0,
    marginRight: 12,
})

export default function SideManuSelect() {
    const [company, setCompany] = useState('')

    const handleChange = (event: SelectChangeEvent) => {
        setCompany(event.target.value as string)
    }

    return (
        <Select
            labelId="company-select"
            id="company-simple-select"
            value={company}
            onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Select company' }}
            fullWidth
            sx={{
                maxHeight: 56,
                width: 215,
                '&.MuiList-root': {
                    p: '8px',
                },
                [`& .${selectClasses.select}`]: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2px',
                    pl: 1,
                },
            }}
        >
            <MenuItem value="">
                <ListItemAvatar>
                    <Avatar alt="Sitemark web">
                        <img
                            style={{ width: 24, height: 24 }}
                            src={witcher3Icon}
                        />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Witcher 3" secondary="The Wild Hunt" />
            </MenuItem>
        </Select>
    )
}
