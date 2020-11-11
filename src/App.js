/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';


function App() {


  return (
    <div className="app">
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
