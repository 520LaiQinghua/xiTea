import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import home from './modules/home'
import menu from './modules/menu'
import cart from './modules/cart'

const reducer = combineReducers({
    home,
    menu,
    cart,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
