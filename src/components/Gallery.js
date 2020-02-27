import React from 'react'
import { connect } from 'react-redux'

import ImagePreview from './ImagePreview'
import ErrorModal from './ErrorModal'

const Gallery = (props) => {
    const queryKeyword = props.photos.query
    const queryResult = props.photos.onDisplay
        return(
            <div className="gallery">
                <ErrorModal />
                {/* <div className="gallery-message"> */}
                    <div className="searchResults">
                        {
                            queryKeyword && queryResult ? 
                                queryResult.map((photo, index) => {
                                    return <ImagePreview 
                                                key={index}
                                                photo={photo}
                                            />
                                }) :
                                null
                        }
                    </div>
            </div>
    )
}

const mapStateToProps = state => ({
    photos: state.queries
})

export default connect(mapStateToProps, {})(Gallery) 