
const initialState = {
    photos: {},
    error: null,
    loading: false,
    query: null,
    savedQueries: [],
    onDisplay: [],
    loadProgress: 0
}

const saveQuery = (state = initialState, action) => {
    switch(action.type){
        case "QUERY_LOADING":
            if(action.queryKeyword === state.query){
                return state
            }
            return {
                ...state, 
                loading: true,
                loadProgress: 0
            }
        case "QUERY_SUCCESS":
            return {
                ...state, 
                photos: {
                    ...state.photos,
                    [action.queryKeyword]: action.payload
                },
                error: null,
                query: action.queryKeyword,
                loadProgress: 0,
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
                loadProgress: 0,
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
                    error: null,
                    loading: false,
                    loadProgress: 0,
                    savedQueries: [...state.savedQueries, state.query]
                }
            }
            else if(state.savedQueries.includes(state.query)){
                return{
                    ...state,
                    loadProgress: 0,
                    error: `"${state.query}" is already recorded`
                }
            }
            else{
                return{
                    ...state,
                    loadProgress: 0,
                    error: "Nothing to save"
                }
            }
        case "QUERY_LOAD_SAVED":
                return {
                    ...state, 
                    onDisplay: state.photos[action.query],
                    error: null,
                    loadProgress: 0,
                    query: action.query
                }
        case "IMAGE_LOADING":
            console.log(state.loadProgress)
            console.log(state.onDisplay.length-1)
            console.log(state.loadProgress === state.onDisplay.length-1)
            if(state.loadProgress === state.onDisplay.length-1){                   
                return {
                    ...state,
                    loadProgress: state.loadProgress+1,
                    loading: false
                }       
            }
            else{
                console.log("ELSE")
                return {
                    ...state,
                    loading: true,
                    loadProgress: state.loadProgress+1
                }
            }
        case "TOGGLE_MODAL":
            return {
                ...state,
                loading: action.value,
                loadProgress: 0,
                error: null
            }
        default: return state
    }
}

export default saveQuery