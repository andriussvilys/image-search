const toggleFavourites = () => {
    return dispatch => {
        dispatch({
            type: "TOGGLE_FAVOURITES"
        })
    }
}

export default toggleFavourites