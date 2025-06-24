import type {
    GameTerritory,
    GwentCard,
    GwentDeck,
    ObtainMethod,
} from '../../@types/gwent-types'

export const TERRITORY_MAPPING: { [K in GameTerritory]: string } = {
    any: 'Any',
    default: 'Starter Deck',
    palaceOfVizima: 'Palace of Vizima',
    novigrad: 'Novigrad',
    skellige: 'Skellige',
    toussaint: 'Toussaint',
    velen: 'Velen',
    whiteOrchard: 'White Orchard',
}

export const OBTAIN_METHOD_MAPPING: { [K in ObtainMethod]: string } = {
    buy: 'Bought  from NPC',
    baseDeck: 'Start Deck',
    gwentQuest: 'Gwent Quest',
    loot: 'Loot',
    secondaryQuest: 'Secondary Quest',
    winNPC: 'Won from NPC',
    winTutorial: 'Gwent Tutorial',
}

export const GWENT_DECK_MAPPING: { [K in GwentDeck]: string } = {
    skellige: 'Skellige',
    monsters: 'Monsters',
    neutral: 'Neutral',
    nilfgaard: 'Nilfgaard',
    northernRealms: 'Northern Realms',
    scoiatael: "Scoia'tael",
}

export const transformObtainMethod = (method: ObtainMethod) => {
    return Object.keys(OBTAIN_METHOD_MAPPING).includes(method)
        ? OBTAIN_METHOD_MAPPING[method]
        : method
}

export const transformGameTerritory = (territory: GameTerritory) => {
    return Object.keys(TERRITORY_MAPPING).includes(territory)
        ? TERRITORY_MAPPING[territory]
        : territory
}

export const transformGwentDeck = (deck: GwentDeck) => {
    return Object.keys(GWENT_DECK_MAPPING).includes(deck)
        ? GWENT_DECK_MAPPING[deck]
        : deck
}

const cardDataTransformer = function (data: GwentCard[]): any[] {
    return data.map((card) => ({
        ...card,
        deck: transformGwentDeck(card.deck),
        obtainMethod: transformObtainMethod(card.obtainMethod),
        territory: transformGameTerritory(card.territory),
    }))
}

export default cardDataTransformer
