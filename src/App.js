import React, { useState } from 'react';
import Row from './components/Row';
import Banner from './components/Banner';
import requests from './config/requests';
import Navbar from './components/Navbar';
import Modal from './components/Modal';

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div style={{ backgroundColor: '#141414' }}>
      <Navbar />
      <Banner showModal={showModal} setShowModal={setShowModal} />
      <Row
        title="Trending"
        fetchUrl={requests.fetchTrending}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <Row
        title="Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <Row
        title="Action"
        fetchUrl={requests.fetchActionMovies}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <Row
        title="Comedy"
        fetchUrl={requests.fetchComedyMovies}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <Row
        title="Horror"
        fetchUrl={requests.fetchHorrorMovies}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <Row
        title="Romance"
        fetchUrl={requests.fetchRomanceMovies}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
}

export default App;
