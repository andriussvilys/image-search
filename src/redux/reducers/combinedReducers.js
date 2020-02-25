import search from './search'
import { combineReducers } from 'redux'

const combined = combineReducers({
    "photos": search
})

export default combined