import React from 'react';
import Row from './components/Row';
import Banner from './components/Banner';
import requests from './config/requests';
import Navbar from './components/Navbar';

function App() {
  return (
    <div style={{ backgroundColor: '#141414' }}>
      <Navbar />
      <Banner />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Originals" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
