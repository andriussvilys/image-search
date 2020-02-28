import Burger from 'react-css-burger';
import React from 'react'
import { connect, useDispatch } from 'react-redux'
import toggleBurger from '../redux/actions/toggleBurger'
 
const Hamburger = (props) => {
    const dispatch = useDispatch()
    let active = props.photos.burgerActive
    return (
      <Burger
        onClick={(e) => {
          e.preventDefault(); 
          active = !active
          dispatch(toggleBurger())
          document.getElementById("savedQueries").classList.toggle("savedQueries-wrapper_display")
        }}
        active={props.photos.burgerActive}
        burger="vortex"
        marginTop={"0"}
        marginLeft={"0"}
      />
    );
  }

  const mapStateToProps = state => ({
    photos: state
})

export default connect(mapStateToProps, {})(Hamburger) 