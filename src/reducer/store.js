import {createStore,applyMiddleware} from 'redux'
import reducer from './rootReducer'
const middleware=[]
const store=createStore(reducer,applyMiddleware(...middleware))
export default store