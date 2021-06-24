import styled from "styled-components"

export const TitleSection = styled.h3`
  color: #393838;
  margin: 0 0 0 5px;
`

export const Label = styled.label`
  display: inline-block;
  font-size: ${(props) => props.fontSize || "21px"};
  width: 100%;
  text-align: center;
  cursor: ${(props) => props.cursor || "default"};
`
