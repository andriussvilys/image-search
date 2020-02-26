
const initialState = {
    photos: {},
    error: null,
    loading: false,
    query: null,
    savedQueries: [],
    onDisplay: []
}

const saveQuery = (state = initialState, action) => {
    switch(action.type){
        case "QUERY_LOADING":
            return {
                ...state, 
                loading: true
            }
        case "QUERY_SUCCESS":
            return {
                ...state, 
                photos: {
                    ...state.photos,
                    [action.queryKeyword]: action.payload
                },
                error: null,
                loading: false,
                query: action.queryKeyword,
                onDisplay: action.payload
            }
        case "QUERY_FAILURE":
            return {
                ...state, 
                photos: {
                    ...state.photos,
                    [action.queryKeyword]: action.payload
                },
                error: action.error,
                loading: false,
                query: action.queryKeyword,
                onDisplay: []
            }
        case "QUERY_SAVE":
            if(!state.savedQueries.includes(state.query) && state.onDisplay.length > 0){
                return {
                    ...state, 
                    photos: {
                        ...state.photos,
                        [action.queryKeyword]: action.payload
                    },
                    error: action.error,
                    loading: false,
                    savedQueries: [...state.savedQueries, state.query]
                }
            }
            else{
                return{
                    ...state,
                    error: "Nothing to save"
                }
            }
        case "QUERY_LOAD_SAVED":
                return {
                    ...state, 
                    onDisplay: state.photos[action.query]
                }
        default: return state
    }
}


export default saveQuery