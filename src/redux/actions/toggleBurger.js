const toggleBurger = () => {
    return dispatch => {
        dispatch({
            type: "TOGGLE_BURGER"
        })
    }
}

export default toggleBurger