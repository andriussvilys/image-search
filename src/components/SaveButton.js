import React from 'react'
import { useDispatch } from 'react-redux'
import queryActions from '../redux/actions/query'
import Hamburger from './Hamburger'

const SaveButton = (props) => {
    const mobile = () => {
        if(document.documentElement.clientWidth < 768){
            return true
        }
        else return false;
    }
    const dispatch = useDispatch()

    return(
        <div className="saveButton-wrapper">
            <button 
                className={`searchField-button button saveButton ${props.className}`}
                onClick={(e) => {
                    e.preventDefault()
                        if(mobile()){
                            document.getElementById("savedQueries").classList.add("savedQueries-wrapper_display")
                        }
                    dispatch(queryActions.saveQueryRequest())
                }}
            >
                <span>SAVE</span>
            </button>

            <div className="hamburger">
                <Hamburger />
            </div>

        </div>
    )
}

export default SaveButton