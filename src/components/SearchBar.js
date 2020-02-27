import React from 'react';
import { useDispatch } from 'react-redux'

import queryActions from '../redux/actions/query'

const SearchBar = (props) => {

    const dispatch = useDispatch()

    const search = (e) => {
        let timer = 0
        e.preventDefault()
        if(document.getElementById("savedQueries").classList.contains("savedQueries-wrapper_display")){
            document.getElementById("savedQueries").classList.toggle("savedQueries-wrapper_display")
            timer = 400
        }
        setTimeout(() => {            
            const keyword = document.getElementById("searchField").value
            dispatch(queryActions.queryRequest(keyword))
        }, timer);
    }

    return(
        <div className="searchBar-wrapper">
            <form className="searchField-form">
                    <input 
                        className="searchField-input"
                        id="searchField" 
                        type="search" 
                        name="" 
                        defaultValue="" 
                        placeholder="enter your query"
                    />
                <div className="searchBar-buttons-wrapper">
                    <input 
                        className="searchField-button button"
                        htmlFor="searchField" 
                        type="submit" 
                        value="Search" 
                        onClick={(e) => search(e)}
                    />
                    {props.children}
                </div>
          </form>
        </div>
    )
}

export default SearchBar