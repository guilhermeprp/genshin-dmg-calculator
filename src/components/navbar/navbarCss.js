import styled from "styled-components";

export const Navbar = styled.nav`
  background-color: darkgrey;
  position: absolute;
  width: 100%;
  height: 50px;
  vertical-align: middle;
  top: 0;
  left: 0;

  button {
    display: none;
  }

  @media screen and (max-width: 576px) {
    button {
      display: block;
      background-color: transparent;
      border-color: transparent;
      padding: 15px 0;
      width: 50px;
      margin: 0;
    }
  } ;
`;
