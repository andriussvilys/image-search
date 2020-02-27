import React from 'react'
import { useDispatch } from 'react-redux'
import queryActions from '../redux/actions/query'

const SaveButton = (props) => {
    const mobile = () => {
        if(document.documentElement.clientWidth < 768){
            return true
        }
        else return false;
    }
    const dispatch = useDispatch()

    // window.addEventListener("resize", () => {
    //     console.log("resize")
    //     mobile = document.documentElement.clientWidth < 768 ? true : false;
    //     })

    return(
        <div className="saveButton-wrapper">
            <button 
                className={`searchField-button button saveButton ${props.className}`}
                onClick={(e) => {
                    e.preventDefault()
                        if(mobile()){
                            document.getElementById("savedQueries").classList.add("savedQueries-wrapper_display")
                        }
                    dispatch(queryActions.saveQuery())
                }}
            >
                <span>SAVE</span>
            </button>

            <button 
                className="hamburger"
                onClick={(e) => {e.preventDefault(); document.getElementById("savedQueries").classList.toggle("savedQueries-wrapper_display")}}    
            >
                    <span role="img" aria-label="hamburger icon">🍔</span>
            </button>
            
        </div>
    )
}

export default SaveButton