import {combineReducers} from 'redux';
import films from './films';
import filter from './filter';
import cart from './cart';
import {routerReducer} from 'react-router-redux'
export default  combineReducers({
    routing:routerReducer,
    films:films,
    filter:filter,
    cart:cart,
})