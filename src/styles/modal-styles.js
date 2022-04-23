import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ModalContainer = styled(motion.div)`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  height: 88%;
  z-index: 10000000;
`;
export const ModalPoster = styled.div`
  position: relative;
  z-index: 11;
  width: 100%;
  aspect-ratio: 1.7/1;
  margin: 0;
  padding: 0;
  background-image: url(${props => props.imageBaseUrl + props.backdropPath});
  background-size: cover;
`;
export const ModalButton = styled.a`
  position: fixed;
  z-index: 11;
  top: 72%;
  transform: translate(-20%);
  appearance: none;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 15px;
  box-sizing: border-box;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin-left: 35px;
  min-height: 20px;
  max-width: 100px;
  outline: none;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;
  will-change: transform;
  &:disabled {
    pointer-events: none;
  }
  &:hover {
    color: black;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    border: 2px solid #1a1a1a;
  }
  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;
export const ModalTitle = styled.p`
  font-size: 55px;
  margin: 0;
  color: white;
  position: fixed;
  top: 60%;
  z-index: 11;
  left: 1%;
`;
export const MovieSummary = styled.p`
  font-size: 18px;
  color: white;
  position: fixed;
  top: 80%;
  left: 1%;
  z-index: 11;
  font-weight: 500;
`;
export const CloseButton = styled.div`
  left: 97%;
  top: 1%;
  position: fixed;
  font-size: 24px;
  cursor: pointer;
`;
