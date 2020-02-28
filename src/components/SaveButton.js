import React from 'react'
import { useDispatch } from 'react-redux'
import queryActions from '../redux/actions/query'
// import savedQueries from '../redux/actions/savedQueries'
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
        <div className="saveButton-wrapper"
        >
            <button 
                className={`searchField-button button saveButton ${props.className}`}
                onClick={(e) => {
                    e.preventDefault()
                        if(mobile()){
                            document.getElementById("savedQueries").classList.add("savedQueries-wrapper_display")
                        }
                    dispatch(queryActions.savedQueries.saveQueryRequest())
                }}
                onMouseDown={e => e.target.classList.add('clicked')}
                onMouseUp={e => e.target.classList.remove('clicked')}
            >
                SAVE
            </button>

            <div className="hamburger">
                <Hamburger />
            </div>

        </div>
    )
}

export default SaveButton