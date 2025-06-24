import Box from '@mui/material/Box'
import { Grid } from '@mui/system'
import FormControl from '@mui/material/FormControl'
import {
    gameExpansions,
    gameTerritories,
    gwentDecks,
    obtainMethods,
} from '../../data/cards/values.ts'
import {
    transformGameTerritory,
    transformGwentDeck, transformObtainMethod,
} from '../../data/cards/cardDataTransformer.ts'
import useCheckListStore from '../../store/checkListStore.ts'
import FilterSelect from '../../Components/Filters/FilterSelect.tsx'
import { useShallow } from 'zustand/react/shallow'
import { memo } from 'react'
import InputAdornment from '@mui/material/InputAdornment'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import ClearIcon from '@mui/icons-material/Clear'
import IconButton from '@mui/material/IconButton'
import OutlinedInput from '@mui/material/OutlinedInput'
import Button from '@mui/material/Button'

function CardFilters() {
    const {
        setSearchFilter,
        setDeckFilter,
        setTerritoryFilter,
        setExpansionFilter,
        setObtainMethodFilter,
        clearFilters,
        filters,
    } = useCheckListStore(
        useShallow((state) => ({
            setSearchFilter: state.setSearchFilter,
            setDeckFilter: state.setDeckFilter,
            setTerritoryFilter: state.setTerritoryFilter,
            setExpansionFilter: state.setExpansionFilter,
            setObtainMethodFilter: state.setObtainMethodFilter,
            clearFilters: state.clearFilters,
            filters: state.filters,
        }))
    )

    return (
        <Box
            sx={{
                mb: 5,
            }}
        >
            <Grid container spacing={2}>
                <Grid size={3}>
                    <FormControl variant="outlined" fullWidth>
                        <OutlinedInput
                            id="searchInput"
                            placeholder="Search by name..."
                            value={filters.search || ''}
                            // label="Search"
                            onChange={(e) => {
                                setSearchFilter(
                                    e.target.value !== ''
                                        ? e.target.value
                                        : undefined
                                )
                            }}
                            startAdornment={
                                <InputAdornment position="start">
                                    <SearchRoundedIcon />
                                </InputAdornment>
                            }
                            endAdornment={
                                filters.search !== '' ? (
                                    <InputAdornment position="end">
                                        <IconButton onClick={() => setSearchFilter()} disableRipple>
                                            <ClearIcon />
                                        </IconButton>
                                    </InputAdornment>
                                ) : null
                            }
                        />
                    </FormControl>
                </Grid>
                <Grid size={2}>
                    <FilterSelect
                        options={gwentDecks}
                        label="Select Deck"
                        labelId="deckSelectorLabel"
                        value={filters.deck || ''}
                        transformerFn={transformGwentDeck}
                        onChange={setDeckFilter}
                    />
                </Grid>
                <Grid size={2}>
                    <FilterSelect
                        options={gameTerritories}
                        label="Select Territory"
                        labelId="territorySelectorLabel"
                        value={filters.territory || ''}
                        transformerFn={transformGameTerritory}
                        onChange={setTerritoryFilter}
                    />
                </Grid>
                <Grid size={2}>
                    <FilterSelect
                        options={gameExpansions}
                        label="Select Expansion"
                        labelId="expansionSelectorLabel"
                        value={filters.expansion || ''}
                        onChange={setExpansionFilter}
                    />
                </Grid>
                <Grid size={2}>
                    <FilterSelect
                        options={obtainMethods}
                        label="Select Obtain Method"
                        labelId="obtainMethodSelectorLabel"
                        value={filters.obtainMethod || ''}
                        onChange={setObtainMethodFilter}
                        transformerFn={transformObtainMethod}
                    />
                </Grid>
                <Grid size={1}>
                    <Button
                        onClick={() => clearFilters()}
                        color="primary"
                        variant="contained"
                        fullWidth
                    >
                        Clear Filters
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
}

export default memo(CardFilters)
