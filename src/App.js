import React from 'react';
import './App.css';
import Unsplash, {toJson} from 'unsplash-js'


export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    }

    this.Unsplash = require('unsplash-js').default;
    this.unsplash = new Unsplash({ 
      accessKey: "G30dGv3bmlBVahi1AuWqaLxS7g7f4x0bABqwPhd8hHs",
      secret: "RhWCrY76VVhLkjHkrLDtkSYGgnaL3pb19YdHv2OveBw"
    });

    this.searchImages = (searchKeyword) => {
      console.log(`saerch for ${searchKeyword}`)
      this.unsplash.search.photos(searchKeyword, 1, 10, { orientation: "portrait" })
        .then(toJson)
        .then(res => {
          console.log(res)
        })
    }
    // .then(toJson)
    // .then(json => {
    //   console.log(json)
    // });
  }

  render(){
    return (
      <div className="App">
        <section className="searchBar">
          <form>
            <input id="searchField" type="search" name="" defaultValue="" />
            <input type="submit" value="Search" onClick={() => {
              const keyword = document.getElementById("searchField").value
              this.searchImages(keyword)
            }}/>
          </form>
        </section>
  
        <section className="searchResults"></section>
      </div>
    )
  }
}


