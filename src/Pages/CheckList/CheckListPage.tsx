import { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import cardDataTransformer from '../../data/cards/cardDataTransformer'
import CheckList from './CheckList.tsx'
import CardFilters from './CardFilters.tsx'
import type { GwentCard } from '../../@types/gwent-types'

function CheckListPage() {
    const [cardData, setCardData] = useState<GwentCard[] | null>(null)

    useEffect(() => {
        let cancelled = false

        import('../../data/cards/cards')
            .then((module) => cardDataTransformer(module.default) as GwentCard[])
            .then((transformedData) => {
                if (!cancelled) {
                    setCardData(transformedData)
                }
            })

        return () => {
            cancelled = true
        }
    }, [])

    if (!cardData) {
        return <Typography>Loading...</Typography>
    }

    return (
        <div>
            <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
                Details
            </Typography>
            <div style={{ height: '75vh' }}>
                <CardFilters />
                <CheckList cardData={cardData} />
            </div>
        </div>
    )
}

export default CheckListPage
