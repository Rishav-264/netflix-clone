import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { RowTitle, ExploreNow, Poster } from '../styles/row-styles';
import Modal from './Modal';

import instance from '../config/axios';

const imageBaseUrl = 'https://image.tmdb.org/t/p/original/';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 12,
    width: '0',
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
    slidesToSlide: 8,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    width: '0',
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    width: '0',
  },
};

function Row({ title, fetchUrl, showModal, setShowModal }) {
  const [movies, setMovies] = useState([]);
  const [onHover, setOnHover] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      instance
        .get(fetchUrl)
        .then(res => {
          setMovies(res.data.results);
        })
        .catch(error => {
          console.log(error.response);
        });
      return;
    }
    fetchData();
  }, [fetchUrl]);

  const setCurrentMovie = id => {
    console.log(id);
    instance
      .get('/movie/' + id + '?api_key=501c756f41f315033560d33f7021957f')
      .then(res => {
        console.log('Movie By Id', res);
        setMovie(res.data);
      })
      .catch(error => {
        console.log(error.response);
      });
  };

  return (
    <>
      {movie !== {} && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          movie={movie}
        />
      )}
      <RowTitle
        onMouseOver={() => {
          setOnHover(true);
        }}
        onMouseLeave={() => {
          setOnHover(false);
        }}
      >
        {title}
        {onHover && <ExploreNow>Explore More</ExploreNow>}
      </RowTitle>
      <Carousel responsive={responsive} autoPlaySpeed={100000} infinite>
        {movies.map(movie => {
          return (
            <>
              <Poster
                key={movie.id}
                src={imageBaseUrl + movie.poster_path}
                alt="movie poster"
                onClick={() => {
                  setShowModal(true);
                  setCurrentMovie(movie.id);
                }}
              />
            </>
          );
        })}
      </Carousel>
      ;
    </>
  );
}

export default Row;
