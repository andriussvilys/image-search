import React from 'react';
import { useDispatch } from 'react-redux'

import queryActions from '../redux/actions/query'

const SearchBar = (props) => {

    const dispatch = useDispatch()

    return(
        <form>
            <input 
                id="searchField" 
                type="search" 
                name="" 
                defaultValue="" 
            />
            <input type="submit" value="Search" onClick={(e) => {
                e.preventDefault()
                const keyword = document.getElementById("searchField").value
                dispatch(queryActions.queryRequest(keyword))
            }}/>
      </form>
    )
}

export default SearchBar