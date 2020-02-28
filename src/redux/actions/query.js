import { toJson } from 'unsplash-js'
import savedQueries from './savedQueries'

const Unsplash = require('unsplash-js').default;

const unsplash = new Unsplash({ 
accessKey: "G30dGv3bmlBVahi1AuWqaLxS7g7f4x0bABqwPhd8hHs",
secret: "RhWCrY76VVhLkjHkrLDtkSYGgnaL3pb19YdHv2OveBw"
});

const queryRequest = (value, state) => {
    return dispatch => {
        if(Object.keys(state.photos).indexOf(value) >= 0){
            return dispatch({
                    type: "QUERY_LOAD_SAVED",
                    query: value
                })
            }
            dispatch({
                type: "QUERY_LOADING",
                queryKeyword: value,
                error: null,
                loading: true,
                loadProgress: 0
            })
            return unsplash.search.photos(value, 1, 10, { orientation: "portrait" })
                  .then(toJson)
                  .then(res => {
                    if(res.results.length > 0){
                        dispatch({
                            type: "QUERY_SUCCESS",
                            payload: res.results,
                            queryKeyword: value,
                            error: null,
                            loadProgress: 0
                        })
                    }
                    else{
                        dispatch({
                            type: "QUERY_FAILURE",
                            payload: res.photos,
                            queryKeyword: value,
                            error: "Your query returned no results. Please try a different keyword",
                            loadProgress: 0
                        })
                    }
                  })
                  .catch(rej => {
                      return(
                        dispatch({
                          type: "QUERY_FAILURE",
                          queryKeyword: value,
                          error: "Your query returned no results. Please try a different keyword",
                          loadProgress: 0
                      })
                    )
                  })
            }
    }
const newQuery = (value) => {
    return dispatch => {
        dispatch({
            type: "QUERY_NEW",
            value: value
        })
    }
}

const queryActions = {
    queryRequest, 
    savedQueries,
    newQuery
}

export default queryActions