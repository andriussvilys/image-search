import React from 'react'
import { connect, useDispatch } from 'react-redux'
import toggleModal from '../redux/actions/modalToggle'
import Loader from './Loader'

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
                    // : <Spinner />
                    : 
                    <Loader />
            }
        </div>
    )
}

const mapStateToProps = state => ({
    photos: state.queries
})

export default connect(mapStateToProps, {})(ErrorModal) 