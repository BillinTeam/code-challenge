import {
  SET_CARDS,
  REMOVE_CARD
} from './actions'

const initialState = {
  articles: []
};

export default function cards(state = initialState, action) {
  switch (action.type) {
    case SET_CARDS:
      return {
        ...state,
        articles: action.cards
      }
    case REMOVE_CARD:
      return {
        ...state,
        articles: state.articles.filter( e => e.id !== action.id)
      }
    default:
      return state;
  }
}