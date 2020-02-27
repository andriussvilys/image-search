import React from 'react'
import { connect, useDispatch } from 'react-redux'

import queryActions from '../redux/actions/query'
import ErrorModal from './ErrorModal'


const SavedQueries = (props) => {
    const dispatch = useDispatch()
    return(
            <div className="savedQueries-wrapper" id="savedQueries">
                <div className="savedQueries-results">
                <ErrorModal 
                    customClass="savedQueries-modal"
                    message={props.queries.savePrompt}
                >
                        {
                            !props.queries.savedQueries.includes(props.queries.query) ? 

                            <React.Fragment>
                                <button className="button modal-button"
                                    onClick={(e) => {
                                        dispatch(queryActions.saveQueryConfirm())
                                    }}
                                >
                                    YES
                                </button>   

                                <button className="button modal-button"
                                    onClick={(e) => {
                                        dispatch(queryActions.saveQueryCancel())
                                    }}
                                >
                                    NO
                                </button> 
                                </React.Fragment> :
                                <button className="button modal-button"
                                    onClick={(e) => {
                                        dispatch(queryActions.saveQueryCancel())
                                    }}
                                >
                                    THANKS
                                </button>

                        }

                </ErrorModal>
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