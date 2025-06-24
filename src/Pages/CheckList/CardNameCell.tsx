import HtmlTooltip from '../../Components/Tooltip/HtmlTooltip.tsx'
import { memo } from 'react'
import type { GwentCard } from '../../@types/gwent-types'
import VisibilityIcon from '@mui/icons-material/VisibilityOutlined'

const CardNameCell = ({ card }: { card: GwentCard }) => {
    return (
        <span
            style={{
                display: 'flex',
                alignItems: 'center',
            }}
        >
            {card.name}
            {card.total && card.number && ` #${card.number}`}
            <span
                style={{
                    marginLeft: 4,
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <HtmlTooltip
                    title={
                        <>
                            <img
                                style={{ maxWidth: '100%', width: 250 }}
                                src={`/cards/${card.picture}`}
                                alt=""
                            />
                        </>
                    }
                >
                    <VisibilityIcon fontSize={'small'} />
                </HtmlTooltip>
            </span>
        </span>
    )
}

export default memo(CardNameCell)
