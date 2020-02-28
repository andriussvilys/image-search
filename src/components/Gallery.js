import React from 'react'
import { connect, useDispatch } from 'react-redux'

import ImagePreview from './ImagePreview'
import ErrorModal from './ErrorModal'
import toggleModal from '../redux/actions/modalToggle'

const Gallery = (props) => {
    const dispatch = useDispatch()
    const queryKeyword = props.photos.query
    const queryResult = props.photos.onDisplay
        return(
            <div className="gallery">
                
                <ErrorModal 
                    message={props.photos.error}
                    loading={props.photos.loading}
                >
                    <button className="button modal-button"
                        onClick={(e) => {
                            dispatch(toggleModal(false))
                        }}
                        onMouseDown={e => e.target.classList.add('clicked')}
                        onMouseUp={e => e.target.classList.remove('clicked')}
                    >OKAY
                    </button>    
                </ErrorModal>

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
    photos: state
})

export default connect(mapStateToProps, {})(Gallery) 