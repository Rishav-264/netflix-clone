import React, { useState, useEffect } from 'react';
import instance from '../config/axios';
import requests from '../config/requests';
import {
  BannerPoster,
  MovieTitle,
  MovieSummary,
  Button,
} from '../styles/banner-styles';

const imageBaseUrl = 'https://image.tmdb.org/t/p/original';

function Banner() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      instance
        .get(requests.fetchTopRated)
        .then(res => {
          let index = Math.floor(Math.random() * (res.data.results.length - 1));
          console.log('Index', index);
          setMovie(res.data.results[index]);
        })
        .catch(error => {
          console.log(error.response);
        });
      return;
    }
    fetchData();
  }, []);
  {
    console.log(movie);
  }
  return (
    <BannerPoster
      imageBaseUrl={imageBaseUrl}
      backdropPath={movie.backdrop_path}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <div style={{ marginTop: 'auto' }}>
        <MovieTitle>{movie.title}</MovieTitle>
        <div style={{ flexDirection: 'row' }}>
          <Button>Play</Button>
          <Button>Info</Button>
        </div>
        <MovieSummary>{movie.overview}</MovieSummary>
      </div>
    </BannerPoster>
  );
}

export default Banner;
