
import initialState from '../initialState'

const checkMobile = () => {
    if(document.documentElement.clientWidth < 769){
        return true
    }
    else{return false}
}

export const search = (state = initialState, action) => {
    switch(action.type){
        case "QUERY_LOADING":
            if(Object.keys(state.photos).indexOf(action.queryKeyword) > -1){
                return {...state,
                    onDisplay: state.photos[action.queryKeyword],
                    burgerActive: false,
                    loadProgress: 0
                }
            }
            return {
                ...state, 
                loading: true,
                burgerActive: false,
                loadProgress: 0
            }
        case "QUERY_SUCCESS":
                // const newIds = action.payload.map(photo => photo.id)
                // let combined = new Set([...state.allIds, ...newIds])
                // combined = Array.from(combined)
            return {
                ...state, 
                photos: {
                    ...state.photos,
                    [action.queryKeyword]: action.payload
                },
                error: null,
                query: action.queryKeyword,
                loadProgress: 0,
                onDisplay: action.payload,
                // allIds: combined
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
        case "IMAGE_LOADING":
            let newState = {...state,
                loading: true,
                allIds: [...state.allIds, action.id]
            }
            newState.loadProgress = state.loadProgress+1
            if(newState.loadProgress === state.onDisplay.length){
                newState.loadProgress = 0
                newState.loading = false
            }
            
            return newState
        case "TOGGLE_MODAL":
            return {
                ...state,
                loading: action.value,
                loadProgress: 0,
                error: null,
            }
        case "TOGGLE_BURGER":
            return {
                ...state,
                burgerActive: !state.burgerActive
            }
        case "QUERY_NEW":
            return {
                ...state,
                query: action.value,
                loadProgress: 0
            }
        default: return state
    }
}

export const savedQuery = (state = initialState, action) => {
    switch(action.type){
        case "QUERY_SAVE_REQUEST":
            if(state.savedQueries.indexOf(state.query) < 0 && state.onDisplay.length > 0){
                return {
                    ...state, 
                    burgerActive: checkMobile() ? true : false,
                    savePrompt: `Do you want to save "${state.query}" to favourites?`
                }
            }
            else if(state.savedQueries.indexOf(state.query) >= 0){
                return{
                    ...state,
                    loadProgress: 0,
                    burgerActive: checkMobile() ? true : false,
                    savePrompt: `"${state.query}" is already recorded`
                }
            }
            else{
                return{
                    ...state,
                    loadProgress: 0,
                    burgerActive: checkMobile() ? true : false,
                    savePrompt: "Nothing to save"
                }
            }
        case "QUERY_SAVE_CONFIRM":
                if(!state.savedQueries.indexOf(state.query) >=0 && state.onDisplay.length > 0){
                    return {
                        ...state, 
                        photos: {
                            ...state.photos,
                            [action.queryKeyword]: action.payload
                        },
                        error: null,
                        loading: false,
                        loadProgress: 0,
                        burgerActive: checkMobile() ? true : false,
                        savedQueries: [...state.savedQueries, state.query],
                        savePrompt: null
                    }
                }
                break
        case "QUERY_SAVE_CANCEL": 
            return {
                ...state,
                burgerActive: checkMobile() ? true : false,
                savePrompt: null
            }
        case "QUERY_LOAD_SAVED":
                return {
                    ...state, 
                    onDisplay: state.photos[action.query],
                    error: null,
                    loadProgress: 0,
                    query: action.query,
                }
        default: return state
    }
}

