import styled from 'styled-components';

export const BannerPoster = styled.div`
  background-size: cover;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 100%
    ),
    url(${props => props.imageBaseUrl + props.backdropPath});
  background-position: center center;
  min-height: 700px;
  margin-bottom: 3rem;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  position: relative;
`;

export const MovieTitle = styled.p`
  font-size: 55px;
  margin: 0;
  color: white;
  padding-left: 20px;
  padding-bottom: 10px;
`;

export const MovieSummary = styled.p`
  font-size: 18px;
  color: white;
  padding-left: 25px;
  width: 70%;
  font-weight: 500;
`;

export const Button = styled.a`
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
    transform: translateY(-2px);
    border: 2px solid #1a1a1a;
  }
  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;
