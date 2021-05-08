import styled from "styled-components";

export const ContainerCenter = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Righteous&display=swap");
  z-index: 0;

  background-repeat: no-repeat;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  input {
    outline: none;
    color: white;
    border-radius: 20px;
    box-shadow: inset 2px 2px 7px #000000b5 !important;
    background-color: transparent;
  }

  .input-block > div:not(.optional-input) input:valid + fieldset {
    /* border-color: #1cb2b2 !important; */
    border-color: #b21c1c !important;
    border-width: 2px !important;
    border-radius: 20px;
  }

  .MuiFormLabel-filled {
    /* color: #1cb2b2 !important; */
    color: #b21c1c !important;
  }

  .MuiOutlinedInput-root {
    border-radius: 20px;
  }

  .Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #b21c1c !important;
    border-radius: 20px;
  }

  .MuiFormLabel-root.Mui-focused {
    color: #b21c1c !important;
  }

  label {
    color: rgba(255, 255, 255, 0.5);
  }

  .content-wrapper {
    zoom: 1;
    margin: 0 auto;
    max-width: 1440px;
    min-width: 256px;
    padding: 0 96px;
    position: relative;
    height: 100vh;
  }

  .content-col-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .img-wrapper {
    max-width: 100vw;
    width: 100vw;
    height: 2160px;
    position: fixed;
    z-index: 1;
    top: 0;
    overflow: hidden;
    display: flex;
    justify-content: center;
    img {
      z-index: 1;
      opacity: 0.05;
      height: 2160px;
      bottom: 30%;
      position: absolute;
      object-fit: cover;
    }
  }

  form {
    width: 100%;
    background-color: rgba(15, 17, 26, 0.5);
    box-shadow: 0 0 20px black;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 20px;
      justify-content: center;
      align-self: center;
      text-align: center;
      padding: 0 20px;
      .row {
        .input-block {
          margin-top: 50px;
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
  }
  #normal-box {
    margin: 0 !important;
  }

  #critical-box {
    margin: 0 0 40px 0 !important;
  }

  @media screen and (max-width: 1024px) {
    .content-wrapper {
      padding: 100px 64px;
      height: 100%;
    }
    .content-col-center {
      justify-content: flex-start;
    }
    .inputs-area {
      grid-template-columns: repeat(2, 2fr) !important;
    }
  }

  @media screen and (min-width: 427px) and (max-width: 768px) {
    form {
      h1 {
        font-size: 27px;
      }
    }
  }
  @media screen and (max-width: 426px) {
    .content-wrapper {
      padding: 100px 24px;
    }
    form {
      h1 {
        font-size: 25px;
      }
      .inputs-area {
        width: 90%;
        grid-template-columns: 1fr !important;
      }
    }
  }
  @media screen and (max-width: 375px) {
    form h1 {
      font-size: 22px;
    }
  }
`;
