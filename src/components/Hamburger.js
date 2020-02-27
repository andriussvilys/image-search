import Burger from 'react-css-burger';
import React from 'react'
 
class Hamburger extends React.Component {
  state = {
    active: false,
  };
 
  render() {
    return (
      <Burger
        onClick={(e) => {
          e.preventDefault(); 
          document.getElementById("savedQueries").classList.toggle("savedQueries-wrapper_display")
          this.setState({ active: !this.state.active })
        }}
        active={this.state.active}
        burger="vortex"
        marginTop={"0"}
        marginLeft={"0"}
      />
    );
  }
}

export default Hamburger