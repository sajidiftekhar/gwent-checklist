import {
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
} from '@mui/material'

import ClearIcon from '@mui/icons-material/Clear'

function FilterSelect<T>({
    options,
    transformerFn,
    label,
    labelId,
    value,
    onChange,
}: {
    options: any[]
    transformerFn?: (value: T) => string
    label: string
    labelId: string
    value: string | ''
    onChange: (value: T | undefined) => void
}) {
    return (
        <FormControl variant="outlined" fullWidth>
            <InputLabel id={labelId}>{label}</InputLabel>
            <Select
                variant="outlined"
                labelId={labelId}
                value={value}
                onChange={(e) => {
                    if (!e.target.value) {
                        return onChange(undefined)
                    }

                    onChange(e.target.value as T)
                }}
                input={
                    <OutlinedInput
                        label={label}
                        endAdornment={
                            value ? (
                                <InputAdornment position="end">
                                    <IconButton
                                        disableRipple
                                        size="small"
                                        onClick={(e) => {
                                            e.stopPropagation() // prevent Select menu from opening
                                            onChange(undefined)
                                        }}
                                    >
                                        <ClearIcon fontSize="small" />
                                    </IconButton>
                                </InputAdornment>
                            ) : null
                        }
                    />
                }
            >
                {options.map((option) => (
                    <MenuItem value={option}>
                        {transformerFn ? transformerFn(option) : option}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default FilterSelect
