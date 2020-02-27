import React from 'react'
import { connect, useDispatch } from 'react-redux'
import toggleModal from '../redux/actions/modalToggle'
import Spinner from './Spinner'

const ErrorModal = (props) => {
    const dispatch = useDispatch()
    return(
        <div id="errorModal" className={`modal-wrapper ${props.photos.error || props.photos.loading ? "modal-message_display" : ""}`}>
            {
                props.photos.error ? 
                    <div className="modal-box">
                        <p>{props.photos.error ? props.photos.error : ""}</p>
                        {
                            props.photos.error ? 
                            <button className="button modal-button"
                                onClick={(e) => {
                                    dispatch(toggleModal(false))
                                }}
                            >OKAY
                            </button>
                            : null
                        }
                    </div>
                    : <Spinner />
            }
        </div>
    )
}

const mapStateToProps = state => ({
    photos: state.queries
})

export default connect(mapStateToProps, {})(ErrorModal) 