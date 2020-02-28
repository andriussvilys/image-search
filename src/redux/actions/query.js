import { toJson } from 'unsplash-js'

const Unsplash = require('unsplash-js').default;

const unsplash = new Unsplash({ 
accessKey: "G30dGv3bmlBVahi1AuWqaLxS7g7f4x0bABqwPhd8hHs",
secret: "RhWCrY76VVhLkjHkrLDtkSYGgnaL3pb19YdHv2OveBw"
});

const queryRequest = (value) => {
    return dispatch => {
            dispatch({
                type: "QUERY_LOADING",
                queryKeyword: value,
                error: null,
                loading: true
            })
            return unsplash.search.photos(value, 1, 10, { orientation: "portrait" })
                  .then(toJson)
                  .then(res => {
                    if(res.results.length > 0){
                        dispatch({
                            type: "QUERY_SUCCESS",
                            payload: res.results,
                            queryKeyword: value,
                            error: null
                        })
                    }
                    else{
                        dispatch({
                            type: "QUERY_FAILURE",
                            payload: res.photos,
                            queryKeyword: value,
                            error: "Your query returned no results. Please try a different keyword"
                        })
                    }
                  })
                  .catch(rej => {
                      return(
                        dispatch({
                          type: "QUERY_FAILURE",
                          queryKeyword: value,
                          error: "Your query returned no results. Please try a different keyword"
                      })
                    )
                  })
            }
    }

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

const queryActions = {
    queryRequest, saveQueryRequest, saveQueryCancel, saveQueryConfirm, loadSaved
}

export default queryActions