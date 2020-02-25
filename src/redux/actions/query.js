import { toJson } from 'unsplash-js'

const Unsplash = require('unsplash-js').default;

const unsplash = new Unsplash({ 
accessKey: "G30dGv3bmlBVahi1AuWqaLxS7g7f4x0bABqwPhd8hHs",
secret: "RhWCrY76VVhLkjHkrLDtkSYGgnaL3pb19YdHv2OveBw"
});

const queryRequest = (value) => {
    console.log("query request runs")
    return dispatch => {
            return unsplash.search.photos(value, 1, 10, { orientation: "portrait" })
                  .then(toJson)
                  .then(res => {
                    console.log(res)
                    dispatch({
                        type: "QUERY_SUCCESS",
                        payload: res.results
                    })
                  })
                  .catch(rej => {console.log("request rejected"); return "FAILED"})
    }
}

const querySuccess = (payload) => {
    return{
        "type": "QUERY_SUCCESS",
        "payload": payload,
        "loading": false
    }
}
const queryFailure = () => {
    return{
        "type": "QUERY_FAILURE",
        "payload": "ERROR",
        "loading": false
    }
}

const query = (value) => {
    return{
        "type": 'QUERY',
        "value": value
    }
}

const queryActions = {
    queryRequest, querySuccess, queryFailure, query
}

export default queryActions