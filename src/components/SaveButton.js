import React from 'react'
import { useDispatch } from 'react-redux'
import queryActions from '../redux/actions/query'

const SaveButton = (props) => {
    const mobile = () => document.documentElement.clientWidth < 721 ? true : false;
    const dispatch = useDispatch()
    return(
        <button 
            className={`searchField-button button ${props.className}`}
            onClick={(e) => {
                e.preventDefault()
                if(mobile()){
                    document.getElementById("savedQueries").classList.toggle("savedQueries-wrapper_display")
                    return
                }
                dispatch(queryActions.saveQuery())
            }}
        >
            {mobile() ? 
                <span role="img" aria-label="star icon representing the list of favourites">⭐</span> :
                <span>SAVE</span>
            }
            
        </button>
    )
}

export default SaveButton