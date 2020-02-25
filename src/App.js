import React from 'react';
import Unsplash, {toJson} from 'unsplash-js';
import { useSelector } from 'react-redux'

import './css/main.css'
import ImagePreview from './components/ImagePreview';
import SearchBar from './components/SearchBar'
import Gallery from './components/Gallery'


const App = (props) => {

    return (
      <div className="App">
        <section className="searchBar">
          <SearchBar />
        </section>
  
        <section className="searchResults">
            <Gallery />
        </section>
      </div>
    )
  }

export default App

