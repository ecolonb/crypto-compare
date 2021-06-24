import styled, { css } from "styled-components"

const stylesBtn = css`
  cursor: pointer;
  border-color: transparent;
  text-align: center;
  white-space: nowrap;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 0.2px;
  font-family: "Mark-Bold", sans-serif;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  padding: 8px 21px;
  line-height: 1.5;
  &:hover {
    opacity: 0.9;
  }
  min-width: 233px;
`

export const PrimaryButton = styled.button`
  ${stylesBtn};
  display: block;
  background-color: #63d9fc;
  border-radius: 8px;
  color: #fff !important;
  border: 1px solid transparent;
  width: ${(props) => (props.width ? props.width : "unset")};
  &:disabled {
    background-color: #dcdbdb;
    cursor: not-allowed;
    color: #787676 !important;
  }
`

export const PrimaryOutlineButton = styled.button`
  ${stylesBtn};
  display: block;
  background-color: #ffffff;
  border-radius: 8px;
  color: #42b3ff !important;
  border: 1px solid #42b3ff;
`
