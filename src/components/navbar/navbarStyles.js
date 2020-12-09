import styled from "styled-components";

export const Navbar = styled.nav`
  z-index: 100;
  background-color: #0f111a;
  width: 100%;
  position: fixed;
  display: flex;
  text-align-last: center;
  align-items: center;
  justify-content: center;
  vertical-align: middle;

  img {
    display: block;
    float: left;
    /* margin: 20px 0px 20px 30vw; */
    color: #a6accd;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0px;
    height: 100%;
    :active {
      color: #c41e1e;
      transition: 0.3s ease;
    }
    :hover {
      cursor: pointer;
    }
  }

  button {
    display: none;
  }

  @media screen and (max-width: 576px) {
    button {
      display: block;
      position: absolute;
      background-color: #474c5c;
      border-color: transparent;
      height: 100%;
      width: 70px;
      float: right;
      right: 0;
      outline: transparent;
    }
  }
  @media screen and (max-width: 375px) {
    z-index: 1;
  }

  @media screen and (max-width: 320px) {
    z-index: 1;
  }
`;
