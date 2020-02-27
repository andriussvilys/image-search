import React from 'react'
import { connect } from 'react-redux'

const Loader = (props) => {
    let progress = props.photos.loadProgress ? props.photos.loadProgress : 0
    let length = props.photos.onDisplay && props.photos.onDisplay > 0 ? props.photos.onDisplay.length : 10
    return(
        <div className="loader-wrapper modal-box">
            <div className="loader-bar">
                <div className="loader-length"></div>
                <div 
                    className="loader-progress"
                    style={{width: `${(progress / length) * 100}%`}}
                ></div>
            </div>
            <div className="loader-counter">
            <p>{!progress > 0 ? "Initiating query..." : `loading images: ${(progress / length) * 100}%`}</p>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    photos: state.queries
})

export default connect(mapStateToProps, {})(Loader) 