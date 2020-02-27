import React from 'react'
import { connect, useDispatch } from 'react-redux'
import toggleModal from '../redux/actions/modalToggle'
import Loader from './Loader'

const ErrorModal = (props) => {
    console.log("ERORR MODAL")
    console.log(props)
    const dispatch = useDispatch()
    return(
        <div id="errorModal" className={`modal-wrapper ${props.customClass ? props.customClass : ""} ${props.message || props.loading ? "modal-message_display" : ""}`}>
            {
                props.message ? 
                    <div className="modal-box">
                        <p>{props.message ? props.message : ""}</p>
                        {
                            props.message ? 
                            <div>
                                {props.children}
                            </div>
                            : null
                        }
                    </div>
                    : props.loading ?
                    <Loader />
                    : null
            }
        </div>
    )
}

// const mapStateToProps = state => ({
//     photos: state.queries
// })

// export default connect(mapStateToProps, {})(ErrorModal) 
export default ErrorModal