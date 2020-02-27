import React from 'react'
import { connect, useDispatch } from 'react-redux'

import queryActions from '../redux/actions/query'


const SavedQueries = (props) => {
    const dispatch = useDispatch()
    return(
            <div className="savedQueries-wrapper" id="savedQueries">
                <div className="savedQueries-results">
                    <ul>
                        {
                            props.queries.savedQueries ?
                                props.queries.savedQueries.map(query => {
                                    return  <li key={`savedQuer-${query}`}>
                                                <button
                                                    className={"savedQueries-button button"}
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