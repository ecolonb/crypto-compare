import styled from "styled-components"

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.width ? props.width : "auto")};
  position: relative;
  margin: ${(props) => (props.margin ? props.margin : "unset")};
`
export const Label = styled.label`
  color: #999;
  font-weight: normal;
  opacity: 0.75;
  order: 1;
  /*outline: 0;*/
  padding-left: 10px;
  pointer-events: none;
  text-shadow: none;
  text-transform: capitalize;
  transform-origin: left top;
  transform: scale(1) translate3d(0, 22px, 0);
  transition: 200ms ease all;
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
`

export const Input = styled.input`
  border-radius: 0;
  display: flex;
  font-size: 14px;
  line-height: 25px;
  text-shadow: none;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  color: #000;
  flex: 1 1 auto;
  order: 2;
  padding: 3px 5px;

  &:placeholder-shown + ${Label} {
    color: transparent !important;
  }

  &:valid + ${Label}, &:focus + ${Label} {
    color: #4d4d4d;
    opacity: 1;
    font-size: 16px;
    transform: scale(0.8) translate3d(0, 68px, 0);
  }

  &:focus {
    outline: 0;
  }

  &:not(:focus) {
    /* color: transparent; */
  }

  &:focus + ${Label} {
    color: #262626;
    font-weight: bold;
  }
`
