import {SET_LIST} from './actions';

const initialState = {
  list: [],
};

function listReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LIST:
      return {list: action.payload};
    default:
      return state;
  }
}
export default listReducer;
