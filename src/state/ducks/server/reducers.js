import { isAsyncAction } from '../../utils';

const initState = {
  fetching: false,
  errors: null,
};

const serverReducer = (state = initState, action) => {
  
  if (isAsyncAction(action))
    state = { ...state, fetching: true };
  else 
    state = { ...state, fetching: false };


  return state;
}

export default serverReducer;