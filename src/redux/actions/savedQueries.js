const saveQueryRequest = () => {
    return dispatch => {
        dispatch({
            type: "QUERY_SAVE_REQUEST",
        })
    }
}
const saveQueryCancel = () => {
    return dispatch => {
        dispatch({
            type: "QUERY_SAVE_CANCEL",
        })
    }
}
const saveQueryConfirm = () => {
    return dispatch => {
        dispatch({
            type: "QUERY_SAVE_CONFIRM",
        })
    }
}

const loadSaved = (query) => {
    return dispatch => {
        dispatch({
            type: "QUERY_LOAD_SAVED",
            query: query
        })
    }
}

const saveActions = {
    saveQueryRequest,
    saveQueryCancel,
    saveQueryConfirm,
    loadSaved
}

export default saveActions