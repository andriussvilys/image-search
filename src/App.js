import React from 'react';
import Unsplash, {toJson} from 'unsplash-js';
import { useSelector } from 'react-redux'

import './css/main.css'
import ImagePreview from './components/imagePreviews'


export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      images: []
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
          const imagePreviews = res.results.map((result, index) => {
            return(
              <ImagePreview
                key={`${searchKeyword}-${index}`}
                photo={result}
              />
            )
          })
          this.setState({images: imagePreviews})
        })
    }
  }

  render(){
    return (
      <div className="App">
        <section className="searchBar">
          <form>
            <input 
            id="searchField" 
            type="search" 
            name="" 
            defaultValue="" 
            placeholder={useSelector(state => state.query)}
            />
            <input type="submit" value="Search" onClick={(e) => {
              e.preventDefault()
              const keyword = document.getElementById("searchField").value
              this.searchImages(keyword)
            }}/>
          </form>
        </section>
  
        <section className="searchResults">
            {this.state.images}
        </section>
      </div>
    )
  }
}


