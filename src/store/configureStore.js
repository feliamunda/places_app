import {createStore,combineReducers,compose,applyMiddleware} from 'redux';
import persistState from 'redux-localstorage';
import {connectRouter,routerMiddleware} from 'connected-react-router';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk'

import reducers from '../reducers';

export const history= createBrowserHistory()

const enhancer = compose(
    applyMiddleware(
      routerMiddleware(history),
      thunk
    ),
    persistState('user')

);
const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  ...reducers
});

export default function configureStore(preloadedState={}) {
  return createStore(rootReducer(history),preloadedState,enhancer)
}
