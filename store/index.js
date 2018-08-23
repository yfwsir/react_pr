import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import homeReducer from './homeReducer'
import classifyReducer from './classifyReducer'

const reducer = combineReducers({
    homeReducer,
    classifyReducer
})
const store = createStore(reducer,applyMiddleware(thunk,logger))

export default store ;