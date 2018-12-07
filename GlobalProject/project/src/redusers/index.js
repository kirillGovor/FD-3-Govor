import {combineReducers} from 'redux';
import films from './films';
import filter from './filter';
import cart from './cart';

export default  combineReducers({
    films:films,
    filter:filter,
    cart:cart
})