import query from './query'
import { combineReducers } from 'redux'

const combined = combineReducers({
    "query": query
})

export default combined