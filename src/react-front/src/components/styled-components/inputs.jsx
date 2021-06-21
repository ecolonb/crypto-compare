import styled from "styled-components"

export const InputStandard = styled.input`
  padding: 5px;
  border-radius: 8px;
  width: ${(props) => (props.width ? props.width : "auto")};
`
