import React from 'react'
import { useDispatch } from 'react-redux'
import queryActions from '../redux/actions/query'

const SaveButton = (props) => {
    const dispatch = useDispatch()
    return(
        <button 
            className={`searchField-button button ${props.className}`}
            onClick={(e) => {
                e.preventDefault()
                dispatch(queryActions.saveQuery())
            }}
        >
            SAVE
        </button>
    )
}

export default SaveButton