import { toJson } from 'unsplash-js'

const initialState = {
    photos: {},
    error: null,
    loading: false,
    query: null
}

const saveQuery = (state = initialState, action) => {
    switch(action.type){
        case "QUERY_LOADING":
            return {
                ...state, 
                loading: true
            }
            break;
        case "QUERY_SUCCESS":
            return {
                ...state, 
                photos: {
                    ...state.photos,
                    [action.queryKeyword]: action.payload
                },
                error: null,
                loading: false,
                query: action.queryKeyword
            }
            break;
        case "QUERY_FAILURE":
            return {
                ...state, 
                photos: {
                    ...state.photos,
                    [action.queryKeyword]: action.payload
                },
                error: action.error,
                loading: false,
                query: action.queryKeyword
            }
            break;
        default: return state
    }
}
export default saveQuery