import { createStore, applyMiddleware} from 'redux';

import reducer from '../reducers';

let store = createStore(reducer,applyMiddleware());

export default store;