import { checkListColumns } from './checkListData.tsx'
import { DataGrid, gridClasses, useGridApiRef } from '@mui/x-data-grid'
import { useCardsStore } from '../../store/cardsStore.ts'
import { memo, startTransition, useCallback, useEffect } from 'react'
import { Checkbox } from '@mui/material'
import useFilteredCards from '../../lib/hooks/checklist/useFilteredCards.ts'

const initialIds = useCardsStore.getState().collected

const INITIAL_STATE = {
    pagination: {
        paginationModel: {
            pageSize: 100,
        },
    },
}

const SLOTS = {
    baseCheckbox: (props) => {
        if (props.slotProps?.htmlInput?.name === 'select_all_rows') {
            return <></>
        }

        const { slotProps: _, ...rest } = props

        return <Checkbox color="primary" {...rest} />
    },
}

function CheckList({ cardData }: { cardData: any[] }) {
    const gridApiRef = useGridApiRef()
    const setCollected = useCardsStore((state) => state.setCollected)

    const handleRowSelect = useCallback(
        ({ ids }): void => {
            startTransition(() => setCollected(ids))
        },
        [setCollected]
    )

    useEffect(() => {
        if (gridApiRef.current) {
            gridApiRef.current?.setRowSelectionModel({
                type: 'include',
                ids: initialIds,
            })
        }
    }, [gridApiRef])

    const filteredCards = useFilteredCards(cardData)

    return (
        <DataGrid
            apiRef={gridApiRef}
            rows={filteredCards}
            columns={checkListColumns}
            pageSizeOptions={[50, 100]}
            getRowId={(row) => row.id}
            rowHeight={50}
            checkboxSelection
            getRowClassName={(params) => {
                return params.indexRelativeToCurrentPage % 2 === 0
                    ? 'even'
                    : 'odd'
            }}
            initialState={INITIAL_STATE}
            sx={{
                /* cells */
                [`& .${gridClasses.cell}:focus, & .${gridClasses.cell}:focus-within`]:
                    {
                        outline: 'none',
                    },
                /* headers – optional, if you want to remove it there too */
                [`& .${gridClasses.columnHeader}:focus, & .${gridClasses.columnHeader}:focus-within`]:
                    {
                        outline: 'none',
                    },
                '& .MuiCheckbox-root:not(.Mui-checked) .MuiSvgIcon-root': {
                    color: '#951919',
                },
            }}
            columnBufferPx={100}
            density="comfortable"
            disableColumnMenu
            onColumnResize={(_) => {}}
            onSortModelChange={(_) => {}}
            onRowSelectionModelChange={handleRowSelect}
            slots={SLOTS}
            keepNonExistentRowsSelected
        />
    )
}

export default memo(CheckList)
