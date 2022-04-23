import React, { useEffect, useState } from 'react';
import {
  Logo,
  Container,
  Avatar,
  SearchIcon,
  SearchInput,
} from '../styles/nav-bar';
import { FaSistrix } from 'react-icons/fa';

function Navbar() {
  const [opaqueNav, setOpaqueNav] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setOpaqueNav(true);
      } else setOpaqueNav(false);
    });
    // return () => {
    //   window.removeAllListener('scroll');
    // };
  }, []);

  return (
    <Container show={opaqueNav}>
      <Logo src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" />
      <Avatar src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" />
      {/* <SearchInput />
      <SearchIcon>
        <FaSistrix />
      </SearchIcon> */}
    </Container>
  );
}

export default Navbar;
