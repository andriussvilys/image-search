import React from 'react'
import { connect } from 'react-redux'

import ImagePreview from './ImagePreview'

const Gallery = (props) => {
    const queryKeyword = props.photos.query
    const queryResult = props.photos.onDisplay
    console.log("props.photos.error")
    console.log(props.photos.error)
        return(
            <div className="gallery">
                    <p>{props.photos.error ? props.photos.error : ""}</p>
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