import { createStore, applyMiddleware } from 'redux';
import PromiseMiddlware from './middleware';

const defaultState = {
  appName: 'V-Medium',
  articles: null
};

const reducer = function (state = defaultState, action) {
  switch (action.type) {
    case 'HOME_LOADED':
      return { ...state, articles: action.payload.articles };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(PromiseMiddlware));

export default store;