import React, { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import {
  ModalContainer,
  ModalPoster,
  ModalButton,
  ModalTitle,
  MovieSummary,
  CloseButton,
} from '../styles/modal-styles';
import { FaWindowClose } from 'react-icons/fa';

const imageBaseUrl = 'https://image.tmdb.org/t/p/original';

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

function Modal({ showModal, movie, setShowModal }) {
  useEffect(() => {
    console.log('Movie Modal', movie);
    console.log('Image', imageBaseUrl + movie.poster_path);
  });

  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <ModalContainer variants={backdrop} initial="hidden" animate="visible">
          <ModalPoster
            imageBaseUrl={imageBaseUrl}
            backdropPath={movie.backdrop_path}
          >
            <CloseButton
              onClick={() => {
                setShowModal(false);
              }}
            >
              <FaWindowClose />
            </CloseButton>
            <ModalTitle>{movie.title}</ModalTitle>
            <MovieSummary>{movie.overview}</MovieSummary>
            <ModalButton>Play</ModalButton>
          </ModalPoster>
        </ModalContainer>
      )}
    </AnimatePresence>
  );
}

export default Modal;
