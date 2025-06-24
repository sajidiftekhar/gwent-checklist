import type {
    GameExpansion,
    GameTerritory,
    GwentDeck,
    ObtainMethod,
} from '../../@types/gwent-types'

export const gwentDecks: GwentDeck[] = [
    'nilfgaard',
    'monsters',
    'northernRealms',
    'scoiatael',
    'skellige',
    'neutral',
]

export const gameTerritories: GameTerritory[] = [
    'default',
    'whiteOrchard',
    'novigrad',
    'velen',
    'skellige',
    'toussaint',
    'palaceOfVizima',
    'any',
]
export const obtainMethods: ObtainMethod[] = [
    'baseDeck',
    'buy',
    'winNPC',
    'winTutorial',
    'loot',
    'gwentQuest',
    'secondaryQuest',
]

export const gameExpansions: GameExpansion[] = [
    'Base Game',
    'Hearts of Stone',
    'Blood and Wine',
]
