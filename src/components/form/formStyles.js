import styled from "styled-components";

export const ContainerCenter = styled.div`
  z-index: 0;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  form {
    background-color: rgba(15, 17, 26, 0.7);
    box-shadow: 0 0 20px black;
    width: 50%;
    margin-top: 6%;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    padding-bottom: 50px;
    h1 {
      display: inline;
      max-height: 10vw;
      position: absolute;
      color: #b21c1c;
    }
    div {
      justify-content: center;
      margin-top: 60px;

      .input-block {
        margin-top: 50px;

        label {
          margin-top: -28px;
          display: block;
          color: white;
          position: absolute;
          width: 200px;
          text-align: center;
          transition: all 0.2s ease;
        }

        input {
          position: relative;
          outline: none;
          display: block;
          background-color: transparent;
          border-top: 0;
          border-left: 0;
          border-right: 0;
          border-color: whitesmoke;
          margin-top: 20px;
          padding: 0px 0px 5px 0px;
          color: white;
          text-align: center;
          width: 200px;
          &:focus {
            border-color: #b21c1c;
          }
          &:focus + label {
            font-size: 13px;
            transform: translateY(-15px);
            padding-left: 0px;
            color: #b21c1c;
            text-align: center;
          }
          &:focusout + label {
            font-size: 10px;
            transform: translateY(-20px);
            padding-left: 0px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1440px) {
    form {
      margin-top: 8%;
    }
  }
  @media screen and (max-width: 1024px) {
    form {
      margin-top: 12%;
    }
  }
  @media screen and (max-width: 768px) {
    form {
      margin-top: 15%;
      h1 {
        font-size: 27px;
      }
    }
  }
  @media screen and (max-width: 425px) {
    form {
      margin-top: 24%;
      width: 80%;
    }
  }
  @media screen and (max-width: 375px) {
    form {
      margin-top: 27%;
      h1 {
        font-size: 22px;
      }
    }
  }
  @media screen and (max-width: 320px) {
    form {
      margin-top: 30%;
      width: 90%;
    }
  }
`;
