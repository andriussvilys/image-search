import React from 'react'
import Loader from './Loader'

const ErrorModal = (props) => {
    console.log("ERORR MODAL")
    console.log(props)
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

export default ErrorModal