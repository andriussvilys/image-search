import React from 'react'
import { connect, useDispatch } from 'react-redux'

import queryActions from '../redux/actions/query'


const SavedQueries = (props) => {
    const dispatch = useDispatch()
    console.log("SAVED QUERIES props")
    console.log(props)
    console.log("store")
    return(
        <div className="savedQueries-wrapper">

            <button className="savedQueries-button"
                onClick={() => {
                    dispatch(queryActions.saveQuery())
                }}
            >
                SAVE
            </button>

            <div className="savedQueries-results">
                <ul>
                    {
                        props.queries.savedQueries ?
                            props.queries.savedQueries.map(query => {
                                return  <li key={`savedQuer-${query}`}>
                                            <button
                                                onClick={() => {
                                                    dispatch(queryActions.loadSaved(query))
                                                }}
                                            >
                                                {query}
                                            </button>
                                        </li>
                            }) :
                            null
                    }
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    queries: state.queries
})

export default connect(mapStateToProps, {})(SavedQueries) 