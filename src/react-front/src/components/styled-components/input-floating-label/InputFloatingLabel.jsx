import { InputContainer, Label, Input } from "./styled"

function InputFloatingLabel({ width,margin, ...props }) {
  return (
    <InputContainer width={width} margin={margin}>
      <Input type="text" {...props} />
      <Label>{props.placeholder}</Label>
    </InputContainer>
  )
}

export default InputFloatingLabel
