import React, { useEffect, useState } from 'react';
import { Logo, Container, Avatar } from '../styles/nav-bar';

function Navbar() {
  const [opaqueNav, setOpaqueNav] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
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
    </Container>
  );
}

export default Navbar;
