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
                            props.queries.savedQueries.indexOf(props.queries.query) >= 0 || !props.queries.query || props.queries.onDisplay.length <= 0 ? 
                            <button className="button modal-button"
                                onClick={(e) => {
                                    dispatch(queryActions.savedQueries.saveQueryCancel())
                                }}
                                onMouseDown={e => e.target.classList.add('clicked')}
                                onMouseUp={e => e.target.classList.remove('clicked')}
                            >
                                OKAY
                            </button>:

                            <React.Fragment>
                                <button className="button modal-button"
                                    onClick={(e) => {
                                        dispatch(queryActions.savedQueries.saveQueryConfirm())
                                    }}
                                    onMouseDown={e => e.target.classList.add('clicked')}
                                    onMouseUp={e => e.target.classList.remove('clicked')}
                                >
                                    YES
                                </button>   

                                <button className="button modal-button"
                                    onClick={(e) => {
                                        dispatch(queryActions.savedQueries.saveQueryCancel())
                                    }}
                                    onMouseDown={e => e.target.classList.add('clicked')}
                                    onMouseUp={e => e.target.classList.remove('clicked')}
                                >
                                    NO
                                </button> 
                                </React.Fragment>
                        }

                </ErrorModal>
                    <ul>
                        {
                            props.queries.savedQueries.length > 0 ?
                                props.queries.savedQueries.map(query => {
                                    return  <li key={`savedQuer-${query}`}>
                                                <button
                                                    className={"savedQueries-button button"}
                                                    onClick={() => {
                                                        dispatch(queryActions.savedQueries.loadSaved(query))
                                                    }}
                                                    onMouseDown={e => e.target.classList.add('clicked')}
                                                    onMouseUp={e => e.target.classList.remove('clicked')}
                                                >
                                                    {query}
                                                </button>
                                            </li>
                                }) :
                                <li className="saveQueries-message"><span>You haven't saved any queries yet.</span></li>
                        }
                    </ul>
                </div>
            </div>
    )
}

const mapStateToProps = state => ({
    queries: state
})

export default connect(mapStateToProps, {})(SavedQueries) 