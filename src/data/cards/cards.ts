import type { GwentCard } from 'gwent-types'
import rawCards from '../cards.json'

const cards = rawCards as unknown as GwentCard[]

export default cards
