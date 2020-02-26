import React from 'react';

import './css/main.css';
import SearchBar from './components/SearchBar';
import Gallery from './components/Gallery';
import SavedQueries from './components/SavedQueries';
import SaveButton from './components/SaveButton';


const App = (props) => {

    return (
      <div className="App">
            <SearchBar>
              <SaveButton />
            </SearchBar>
        <section className="main">    
            <Gallery />
            <SavedQueries />
        </section>
      </div>
    )
  }

export default App

