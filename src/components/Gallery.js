import React from 'react'
import { connect } from 'react-redux'

import ImagePreview from './ImagePreview'

const Gallery = (props) => {
    return(
            props.photos ? 
                props.photos.map((photo, index) => {
                    console.log("photo")
                    console.log(photo)
                    return <ImagePreview 
                                key={index}
                                photo={photo}
                            />
                })
                :
                null
    )
}

const mapStateToProps = state => ({
    photos: state.photos.photos
})

export default connect(mapStateToProps, {})(Gallery) 