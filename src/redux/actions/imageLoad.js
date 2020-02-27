const imageLoad = (value) => {
    return dispatch => {
        dispatch({
            type: "IMAGE_LOADING",
            id: value
        })
    }
}

export default imageLoad