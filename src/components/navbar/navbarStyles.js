import styled from "styled-components";

export const Navbar = styled.nav`
  background-color: #0f111a;
  width: 100%;
  height: 70px;
  display: block;
  text-align-last: center;

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    display: block;
    float: left;
    margin: 20px 0px 20px 30vw;
    color: #a6accd;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0px;
    :active {
      color: #c41e1e;
      transition: 0.3s ease;
    }
    :hover {
      cursor: pointer;
    }
  }

  img {
    position: absolute;
    top: 5px;
    width: auto;
    height: 60px;
    right: 45vw;
    left: 45vw;
  }

  button {
    display: none;
  }

  @media screen and (max-width: 576px) {
    img {
      right: 35vw;
      left: 35vw;
    }
    li {
      margin: 20px 0px 20px 35px;
      font-size: 20px;
      font-weight: 500;
    }

    button {
      display: block;
      background-color: #474c5c;
      border-color: transparent;
      height: 100%;
      width: 70px;
      float: right;
    }
  }
  @media screen and (max-width: 375px) {
    li {
      margin: 25px 0px 25px 30px;
      font-size: 17px;
    }
  }
  @media screen and (max-width: 320px) {
    height: 50px;
    li {
      margin: 1rem 0px 1rem 30px;
      font-size: 14px;
    }
    img {
      top: 0px;
      height: 50px;
    }
  }
`;
