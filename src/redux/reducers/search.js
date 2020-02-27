
const initialState = {
    photos: {},
    error: null,
    loading: false,
    query: null,
    savedQueries: [],
    onDisplay: [],
    loadProgress: 0,
    savePrompt: null,
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
        case "QUERY_SAVE_REQUEST":
            if(!state.savedQueries.includes(state.query) && state.onDisplay.length > 0){
                return {
                    ...state, 
                    savePrompt: `Do you want to save "${state.query}" to favourites?`
                }
            }
            else if(state.savedQueries.includes(state.query)){
                return{
                    ...state,
                    loadProgress: 0,
                    savePrompt: `"${state.query}" is already recorded`
                }
            }
            else{
                return{
                    ...state,
                    loadProgress: 0,
                    savePrompt: "Nothing to save"
                }
            }
        case "QUERY_SAVE_CONFIRM":
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
                        savedQueries: [...state.savedQueries, state.query],
                        savePrompt: null
                    }
                }

        case "QUERY_SAVE_CANCEL": 
            return {
                ...state,
                savePrompt: null
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