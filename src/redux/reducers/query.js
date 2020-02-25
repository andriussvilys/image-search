const saveQuery = (state = null, action) => {
    switch(action.type){
        case "QUERY":
            return action.type;
        default: return state
    }
}
export default saveQuery