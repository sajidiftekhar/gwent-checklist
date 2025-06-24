import useCheckListStore from '../../store/checkListStore.ts'
import { useShallow } from 'zustand/react/shallow'
import InfoRoundedIcon from '@mui/icons-material/InfoRounded'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'

function CardDetailCell({ value }: { value: string }) {
    const { showDetails, setShowDetails } = useCheckListStore(
        useShallow((state) => ({
            showDetails: state.showDetails,
            setShowDetails: state.setShowDetails,
        }))
    )

    return (
        <div>
            {showDetails ? (
                <>
                    {value}
                    <Button
                        onClick={() => setShowDetails(false)}
                        sx={{ ml: 1 }}
                        variant="outlined"
                        color="success"
                    >
                        Hide
                    </Button>
                </>
            ) : (
                <>
                    <Tooltip
                        title={
                            <>
                                <Typography fontSize={18}>{value}</Typography>
                            </>
                        }
                    >
                        <InfoRoundedIcon style={{ verticalAlign: 'middle' }} />
                    </Tooltip>
                    <Button
                        variant="outlined"
                        sx={{ ml: 1 }}
                        onClick={() => setShowDetails(true)}
                        color="secondary"
                        size="small"
                    >
                        Show
                    </Button>
                </>
            )}
        </div>
    )
}

export default CardDetailCell
