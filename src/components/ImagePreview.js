import React from 'react'
import imageLoad from '../redux/actions/imageLoad' 
import { connect, useDispatch } from 'react-redux'

const ImagePreview = (props) => {
    const dispatch = useDispatch()
    const utm = "?utm_source=image-search&utm_medium=referral"
    return(
        <div className="photoPreview-container">
            <img src={props.photo.urls.thumb} alt={props.photo.description} onLoad={() =>{
                let loaded = false
                if(props.photos.allIds.includes(props.photo.id)){
                    loaded = true
                }
                dispatch(imageLoad(props.photo.id, loaded))
                }}/>
            <div className="photoPreview-attribution_wrapper">
                <div className="photoPreview-attribution">
                    <span>Photo by </span><a target="_blank" rel="noopener noreferrer" href={`${props.photo.links.html}/${utm}`}><em>{props.photo.user.username}</em></a><span> on </span><a target="_blank" rel="noopener noreferrer" href={`https://unsplash.com/${utm}`}><em>Unsplash</em></a>
                </div>
            </div>
        </div>
    )
}

// export default ImagePreview

const mapStateToProps = state => ({
    photos: state
})

export default connect(mapStateToProps, {})(ImagePreview) 