import { toJson } from 'unsplash-js'

const initialState = {
    photos: []
}

const saveQuery = (state = initialState, action) => {
    switch(action.type){
        case "QUERY_SUCCESS":
            return {
                ...state, 
                photos: action.payload
            }
            break;
        case "QUERY":
                const Unsplash = require('unsplash-js').default;

                const unsplash = new Unsplash({ 
                accessKey: "G30dGv3bmlBVahi1AuWqaLxS7g7f4x0bABqwPhd8hHs",
                secret: "RhWCrY76VVhLkjHkrLDtkSYGgnaL3pb19YdHv2OveBw"
                });

                const searchImages = (searchKeyword) => {
                    return new Promise((resolve, reject) => {
                        console.log(`saerch for ${searchKeyword}`)
                        unsplash.search.photos(searchKeyword, 1, 10, { orientation: "portrait" })
                          .then(toJson)
                          .then(res => {
                            console.log(res)
                            resolve(res.results);
                          })
                          .catch(rej => {console.log("request rejected"); reject("FAILED")})
                    })
                } 

                console.log("action.value")
                console.log(action.value)
                const searchResult = searchImages(action.value)
                    .then(res => {
                        console.log("search result")
                        console.log(res)
                        return state[action.value] = res}
                        )
                    .catch(rej => {
                        console.log(rej)
                        return state = state
                    })
                break;
        case "QUERY_REQUEST":
            return state = {...state, [action.value]: action.value}
            break;
        default: return state
    }
}
export default saveQuery