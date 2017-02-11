import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/SearchBar';

const API_KEY = process.env.YouTube_DATA_API;

// Create a new component
// This component should produce some HTML

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Write it out to DO
ReactDOM.render(<App />, document.querySelector('.container'));
