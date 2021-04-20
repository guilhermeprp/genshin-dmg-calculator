import styled from "styled-components";

export const ContainerCenter = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Righteous&display=swap");
  z-index: 0;
  display: flex;
  width: 100%;
  height: 100%;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding-top: 85px;
  padding-bottom: 20px;
  background-repeat: no-repeat;
  padding-bottom: 20px;

  .obrigatorio {
    font-weight: 900;
    color: #b21c1c;
  }
  .img-wrapper {
    max-width: 100vw;
    width: 100vw;
    height: 2160px;
    position: absolute;
    z-index: 1;
    top: 0;
    overflow: hidden;
    display: flex;
    justify-content: center;
    img {
      height: 2160px;
      position: absolute;
      opacity: 0.05;
      z-index: 1;
      object-fit: cover;
    }
  }
  form {
    background-color: rgba(15, 17, 26, 0.5);
    box-shadow: 0 0 20px black;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 100px;
    padding: 20px;
    z-index: 2;
    h1 {
      display: block;
      align-self: center;
      max-height: 10vw;
      color: #b21c1c;
      font-family: "Righteous", cursive;
      font-weight: bold;
      text-shadow: 0px 0px 2px #b21c1c;
    }
    > .inputs-area {
      justify-content: center;
      display: grid;
      grid-template-columns: repeat(4, 25%);
      align-self: center;

      .row {
        width: 100%;
        max-width: 100%;
        display: block;
        margin: 0 20px;

        .input-block {
          margin-top: 50px;
          label {
            margin-top: -65px;
            margin-left: 8px;
            display: block;
            color: white;
            position: absolute;
            width: auto;
            text-align: center;
            transition: all 0.3s ease;
          }

          input {
            height: 35px;
            position: relative;
            outline: none;
            background-color: transparent;
            border: none;
            border-radius: 15px;
            box-shadow: inset 2px 2px 7px #000000b5;
            margin-top: 20px;
            color: white;
            text-align: center;
            width: 200px;
            transition: all 0.3s ease;
            &:focus {
              border: solid 2px #b21c1c;
              box-shadow: 0px 0px 2px #b21c1c;
            }
            &:focus + label {
              text-shadow: 0px 0px 1px #b21c1c;
              font-size: 13px;
              transform: translate3d(0px, 15px, 0px);
              padding: 0px 10px;
              background-color: #0f111a;
              color: #b21c1c;
              text-align: center;
              border-radius: 10px;
            }
          }
          .input-text-focus {
            border: solid 2px #b21c1c;
            box-shadow: 0px 0px 2px #b21c1c;
          }
        }
      }
    }
    .row-button {
      display: flex;
      align-content: center;
      margin: 40px 0;
      align-self: center;
      > button[type="submit"] {
        background: #b21c1cb3;
        color: #fff;
        font-size: 16px;
        padding: 10px 20px;
        border: 0;
        border-radius: 5px;
        outline: none;
        &:focus {
          background: #b21c1c7a;
        }
      }
    }
    #result-box {
      margin: 20px 0;
    }
  }

  @media screen and (min-width: 427px) and (max-width: 768px) {
    form {
      margin-top: 80px;
      width: 70%;
      h1 {
        font-size: 27px;
      }
      .inputs-area {
        grid-template-columns: repeat(2, 50%);
      }
    }
  }
  @media screen and (max-width: 426px) {
    form {
      h1 {
        font-size: 25px;
      }
      width: 80%;
    }
    .inputs-area {
      display: flex !important;
      flex-direction: column;
      align-self: center;
    }
  }
  @media screen and (max-width: 375px) {
    form {
      h1 {
        font-size: 22px;
      }
    }
  }
  @media screen and (max-width: 320px) {
    form {
      width: 90%;
    }
  }
`;
