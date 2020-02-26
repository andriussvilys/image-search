import React from 'react'
import { connect } from 'react-redux'

import ImagePreview from './ImagePreview'

const Gallery = (props) => {
    const queryKeyword = props.photos.query
    // const queryResult = props.photos.photos[props.photos.query]
    // return(
    //     queryKeyword && queryResult ? 
    //         queryResult.map((photo, index) => {
    //             return <ImagePreview 
    //                         key={index}
    //                         photo={photo}
    //                     />
    //         })
    //         :
    //         props.photos.error ?
    //             <p>{props.photos.error}</p> :
    //         null
    // )
    const queryResult = props.photos.onDisplay
        return(
        queryKeyword && queryResult ? 
            queryResult.map((photo, index) => {
                return <ImagePreview 
                            key={index}
                            photo={photo}
                        />
            })
            :
            props.photos.error ?
                <p>{props.photos.error}</p> :
            null
    )
}

const mapStateToProps = state => ({
    photos: state.queries
})

export default connect(mapStateToProps, {})(Gallery) 