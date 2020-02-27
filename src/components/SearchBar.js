import React from 'react';
import { useDispatch } from 'react-redux'

import queryActions from '../redux/actions/query'

const SearchBar = (props) => {

    const dispatch = useDispatch()

    const search = (e) => {
        e.preventDefault()
        const keyword = document.getElementById("searchField").value
        dispatch(queryActions.queryRequest(keyword))
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