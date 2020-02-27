const toggleModal = (value) => {
    return dispatch => {
        dispatch({
            type: "TOGGLE_MODAL",
            value: value
        })
    }
}

export default toggleModal