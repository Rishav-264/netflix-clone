import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import {
  RowTitle,
  ExploreNow,
  Poster,
  Button,
  ButtonContainer,
} from '../styles/row-styles';
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

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [onHover, setOnHover] = useState(false);

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

  return (
    <>
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
