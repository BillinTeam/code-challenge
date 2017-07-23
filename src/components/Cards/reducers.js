import {
  SET_CARDS
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
    default:
      return state;
  }
}