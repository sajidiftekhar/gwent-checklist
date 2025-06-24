export type GameExpansion = 'Base Game' | 'Hearts of Stone' | 'Blood and Wine'

export type GwentDeck =
    | 'nilfgaard'
    | 'monsters'
    | 'northernRealms'
    | 'scoiatael'
    | 'skellige'
    | 'neutral'

export type GameTerritory =
    | 'default'
    | 'whiteOrchard'
    | 'novigrad'
    | 'velen'
    | 'skellige'
    | 'toussaint'
    | 'palaceOfVizima'
    | 'any'


export type ObtainMethod =
    | 'baseDeck'
    | 'buy'
    | 'winNPC'
    | 'winTutorial'
    | 'loot'
    | 'gwentQuest'
    | 'secondaryQuest'


export type SubTerritory = string

export interface GwentCard {
    id: string
    expansion: GameExpansion
    deck: GwentDeck
    territory: GameTerritory
    subTerritory?: SubTerritory
    isRandomWin?: bool
    name: string
    obtainMethod: ObtainMethod
    details?: string
    picture?: string
    number?: number
    total?: number
}
