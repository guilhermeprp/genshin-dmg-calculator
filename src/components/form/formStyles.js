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
      text-align: center;
      .row {
        margin: 0px 1rem;
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
  @media screen and (max-width: 321px) {
    form {
      width: 90%;
    }
  }
`;
