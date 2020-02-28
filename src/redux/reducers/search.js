
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
            if(action.queryKeyword === state.query){
                return state
            }
            return {
                ...state, 
                loading: true,
                burgerActive: false,
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
        // case "QUERY_SAVE_REQUEST":
        //     if(!state.savedQueries.indexOf(state.query) >= 0 && state.onDisplay.length > 0){
        //         return {
        //             ...state, 
        //             burgerActive: true,
        //             savePrompt: `Do you want to save "${state.query}" to favourites?`
        //         }
        //     }
        //     else if(state.savedQueries.indexOf(state.query) >= 0){
        //         return{
        //             ...state,
        //             loadProgress: 0,
        //             burgerActive: true,
        //             savePrompt: `"${state.query}" is already recorded`
        //         }
        //     }
        //     else{
        //         return{
        //             ...state,
        //             loadProgress: 0,
        //             burgerActive: true,
        //             savePrompt: "Nothing to save"
        //         }
        //     }
        // case "QUERY_SAVE_CONFIRM":
        //         if(!state.savedQueries.indexOf(state.query) >=0 && state.onDisplay.length > 0){
        //             return {
        //                 ...state, 
        //                 photos: {
        //                     ...state.photos,
        //                     [action.queryKeyword]: action.payload
        //                 },
        //                 error: null,
        //                 loading: false,
        //                 loadProgress: 0,
        //                 burgerActive: true,
        //                 savedQueries: [...state.savedQueries, state.query],
        //                 savePrompt: null
        //             }
        //         }
        //         break
        // case "QUERY_SAVE_CANCEL": 
        //     return {
        //         ...state,
        //         burgerActive: true,
        //         savePrompt: null
        //     }
        // case "QUERY_LOAD_SAVED":
        //         return {
        //             ...state, 
        //             onDisplay: state.photos[action.query],
        //             error: null,
        //             loadProgress: 0,
        //             query: action.query,
        //         }
        case "IMAGE_LOADING":
            if(state.loadProgress === state.onDisplay.length-1){                   
                return {
                    ...state,
                    loadProgress: state.loadProgress+1,
                    loading: false
                }       
            }
            else{
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
                error: null,
                // burgerActive: !state.burgerActive
            }
        case "TOGGLE_BURGER":
            return {
                ...state,
                burgerActive: !state.burgerActive
            }
        case "QUERY_NEW":
            return {
                ...state,
                query: action.value
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

