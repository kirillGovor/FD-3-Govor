
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './redusers';

export default () => {
    const store = createStore(rootReducer, applyMiddleware(logger));
 return store;
};



