import React from 'react'

const ImagePreview = (props) => {
    console.log("imagePreview props")
    console.log(props.photo)
    const utm = "?utm_source=your_app_name&utm_medium=referral"
    return(
        <div className="photoPreview-container">
            <img src={props.photo.urls.thumb} alt={props.photo.description} />
            <div className="photoPreview-attribution">
            Photo by <a href={`${props.photo.links.html}/${utm}`}>{props.photo.user.username}</a> on <a href={`https://unsplash.com/${utm}`}>Unsplash</a>
            </div>
        </div>
    )
}

export default ImagePreview