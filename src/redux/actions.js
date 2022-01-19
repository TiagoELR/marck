export const SET_LIST = 'SET_LIST';

export const setList = list => dispatch => {
  dispatch({
    type: SET_LIST,
    payload: list,
  });
};
