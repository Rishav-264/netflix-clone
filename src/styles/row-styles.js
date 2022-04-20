import styled from 'styled-components';
import { keyframes } from 'styled-components';

export const enterFromLeft = keyframes`
from {opacity: 0;width:0;}
to {opacity: 1;width:100%;}
`;

export const RowTitle = styled.p`
  color: #e5e5e5;
  line-height: 1.25vw;
  font-size: 1.4vw;
  font-weight: 700;
  font-family: 'Open Sans', sans-serif;
  cursor: pointer;
  width: 18vw;
  margin-top: 0;
`;
export const ExploreNow = styled.p`
  display: inline;
  font-size: 1vw;
  font-weight: 500;
  color: #e5e5e5;
  font-family: 'Open Sans', sans-serif;
  padding-left: 10px;
  width: 0;
  opacity: 1;
  animation-name: ${enterFromLeft};
  animation-duration: 1s;
  animation-iteration-count: 1;
  cursor: pointer;
`;

export const Poster = styled.img`
  transition: transform 0.2s;
  margin: 0;
  padding: 0;
  width: 200px;
  &:hover {
    transform: scale(1.08);
  }
`;

export const Button = styled.a`
  position: relative;
  bottom: 70px;
  appearance: none;
  border: 2px solid white;
  border-radius: 15px;
  box-sizing: border-box;
  color: grey;
  cursor: pointer;
  display: inlne-block;
  font-family: Roobert, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin-top: 10px;
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
    transform: translateY(-2px);
    border: 2px solid #1a1a1a;
  }
  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;

export const ButtonContainer = styled.div`
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  display: none;
`;
