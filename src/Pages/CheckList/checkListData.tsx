import type { GridColDef } from '@mui/x-data-grid'
import type { GwentCard } from '../../@types/gwent-types'
import Button from '@mui/material/Button'
import CardNameCell from './CardNameCell.tsx'
import CardDetailCell from './CardDetailCell.tsx'

export const checkListColumns: GridColDef<GwentCard>[] = [
    {
        field: 'id',
        headerName: 'ID',
        sortable: true,
        width: 70,
    },
    {
        field: 'name',
        headerName: 'Card Name',
        sortable: true,
        width: 300,
        renderCell: ({ row }) => <CardNameCell card={row} />,
    },
    {
        field: 'obtainMethod',
        headerName: 'Obtained from',
        sortable: true,
        width: 150,
    },
    {
        field: 'deck',
        headerName: 'Deck',
        sortable: true,
        width: 150,
    },
    {
        field: 'territory',
        headerName: 'Territory',
        sortable: true,
        width: 150,
    },
    {
        field: 'expansion',
        headerName: 'Expansion',
        sortable: true,
        width: 150,
    },
    {
        field: 'details',
        headerName: 'Details',
        width: 300,
        minWidth: 120,
        sortable: false,
        renderCell: ({ value }) => <CardDetailCell value={value} />,
    },
    {
        field: 'actions',
        renderHeader: () => null,
        width: 180,
        renderCell: () => (
            <>
                <Button color="error">Mark unobtainable</Button>
            </>
        ),
    },
]
