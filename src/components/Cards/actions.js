export const SET_CARDS = 'SET_CARDS'
export const REMOVE_CARD = 'REMOVE_CARD'

export function setCards(cards) {
  return {
    type: SET_CARDS,
    cards
  }
}

export function removeCard(id) {
  return {
    type: REMOVE_CARD,
    id
  }
}