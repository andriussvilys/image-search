import React from 'react';
import Unsplash, {toJson} from 'unsplash-js';
import { useSelector } from 'react-redux'

import './css/main.css'
import SearchBar from './components/SearchBar'
import Gallery from './components/Gallery'
import SavedQueries from './components/SavedQueries';


const App = (props) => {

    return (
      <div className="App">
        <div className="search">
          <section className="searchBar">
            <SearchBar />
          </section>
    
          <section className="searchResults">
              <Gallery />
          </section>
        </div>
            <SavedQueries />
      </div>
    )
  }

export default App

