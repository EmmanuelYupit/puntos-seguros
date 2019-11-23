import { combineReducers } from 'redux';

function appReducer(state = {}, { type, payload }) {
  switch (type) {
    case 'ACTION':
      return { ...state, attr: payload };
    default:
      return state;
  }
}

export default combineReducers({
  app: appReducer,
});
