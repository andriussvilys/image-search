import React from 'react';
import { toJson } from 'unsplash-js';
import { useDispatch } from 'react-redux'

import ImagePreview from './ImagePreview';
import queryActions from '../redux/actions/query'
import search from '../redux/reducers/search'

const SearchBar = (props) => {

    let ImagePreviews = null

    const Unsplash = require('unsplash-js').default;

    const unsplash = new Unsplash({ 
      accessKey: "G30dGv3bmlBVahi1AuWqaLxS7g7f4x0bABqwPhd8hHs",
      secret: "RhWCrY76VVhLkjHkrLDtkSYGgnaL3pb19YdHv2OveBw"
    });

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