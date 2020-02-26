import search from './search'
import { combineReducers } from 'redux'

const combined = combineReducers({
    "queries": search
})

export default combined