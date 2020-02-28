import React from 'react';
import { connect, useDispatch } from 'react-redux'

import queryActions from '../redux/actions/query'

const SearchBar = (props) => {
    const dispatch = useDispatch()

    const search = (e, state) => {
        let timer = 0
        e.preventDefault()
        if(document.getElementById("savedQueries").classList.contains("savedQueries-wrapper_display")){
            document.getElementById("savedQueries").classList.toggle("savedQueries-wrapper_display")
            timer = 400
        }
        const keyword = document.getElementById("searchField").value
        setTimeout(() => {            
            dispatch(queryActions.queryRequest(keyword, state))
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
                        value={props.photos.query}
                        placeholder="enter your query"
                        onChange={e => {
                            dispatch(queryActions.newQuery(e.target.value))
                        }}
                    />
                <div className="searchBar-buttons-wrapper">
                    <input 
                        className="searchField-button button"
                        htmlFor="searchField" 
                        type="submit" 
                        value="Search" 
                        onClick={(e) => search(e, props.photos)}
                        onMouseDown={e => e.target.classList.add('clicked')}
                        onMouseUp={e => e.target.classList.remove('clicked')}
                    />
                    {props.children}
                </div>
          </form>
        </div>
    )
}

const mapStateToProps = state => ({
    photos: state
})

export default connect(mapStateToProps, {})(SearchBar) 