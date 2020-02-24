import React from 'react'

const ImagePreview = (props) => {
    console.log("imagePreview props")
    console.log(props.photo)
    const utm = "?utm_source=your_app_name&utm_medium=referral"
    return(
        <div className="photoPreview-container">
            <img src={props.photo.urls.thumb} alt={props.photo.description} />
            <div className="photoPreview-attribution_wrapper">
                <div className="photoPreview-attribution">
                    <span>Photo by </span><a target="_blank" rel="noreferrer" href={`${props.photo.links.html}/${utm}`}><em>{props.photo.user.username}</em></a><span> on </span><a target="_blank" rel="noreferrer" href={`https://unsplash.com/${utm}`}><em>Unsplash</em></a>
                </div>
            </div>
        </div>
    )
}

export default ImagePreview