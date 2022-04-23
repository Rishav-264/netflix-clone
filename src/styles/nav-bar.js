import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  z-index: 100000;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  background-color: ${props => (props.show ? '#141414' : 'transparent')};
  height: 30px;
  transition-timing-function: ease-in;
  transition: all 0.5s;
`;

export const Logo = styled.img`
  position: fixed;
  left: 20px;
  width: 100px;
  object-fit: contain;
`;

export const Avatar = styled.img`
  position: fixed;
  right: 20px;
  width: 30px;
  object-fit: contain;
`;

export const SearchIcon = styled.div`
  position: fixed;
  top: 25px;
  right: 275px;
  width: 40px;
  font-size: 24px;
  object-fit: contain;
  color: white;
  cursor: pointer;
`;

export const SearchInput = styled.input`
  outline: 0;
  border-width: 0 0 3px;
  border-color: white;
  display: inline-block;
  position: fixed;
  right: 50px;
  margin: 5px 10px 0 10px;
  background-color: transparent;
  color: white;
  font-size: 18px;
`;
