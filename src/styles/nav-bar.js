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
`;

// export const Logo = styled.img`
//   width: 70px;
//   height: 70px;
//   float: left;
//   margin-left: 20px;
// `;

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

// export const LeftAligned = styled.div`
//   display: inline-block;
//   width: 50%;
//   text-align: left;
//   color: white;
//   > a {
//     display: inline-block;
//     padding: 22px 20px;
//     margin-left: 30px;
//   }
// `;

export const LeftAligned = styled.div``;

// export const RightAligned = styled.div`
//   display: inline-block;
//   color: white;
//   width: 50%;
//   text-align: right;
//   > a {
//     display: inline-block;
//     padding: 20px;
//   }
// `;

export const RightAligned = styled.div``;
