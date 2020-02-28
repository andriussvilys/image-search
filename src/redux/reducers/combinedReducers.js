import {search, savedQuery} from './search'
import reduceReducers from 'reduce-reducers'
import initialState from '../initialState'

const combined = reduceReducers(initialState, search, savedQuery)
export default combined