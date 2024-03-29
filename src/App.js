import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Row from './components/Row';
import requests from './request';

function App() {

  return (
    <div className="App">
        <Navbar />
        <Banner fetchUrl= {requests.fetchTrending}/>
        <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchHorrorMovies}
         isLargePoster={true} />
        <Row title='Trending Now' fetchUrl={requests.fetchTrending}/>
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title='Action Movies' fetchUrl={requests.fetchActionMovies}/>
        <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies}/>
        <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies}/>
        <Row title='Romantic Movies' fetchUrl={requests.fetchRomanticMovies}/>
        <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
