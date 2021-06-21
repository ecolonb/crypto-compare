import { useContext, useState, useEffect } from "react"

import useFormInput from "../../hooks/useFormInput"
import GlobalContext from "../../context/globalContext"

import { PrimaryButton } from "../styled-components/buttons"
import { TitleSection } from "../styled-components/text"
import InputFloatingLabel from "../styled-components/input-floating-label/InputFloatingLabel"
import { Row, StandardUserForm } from "../styled-components/layout"

import "./welcomeForm.scss"

function WelcomeForm({ history }) {
  const { setIsLoading, setUserInfo } = useContext(GlobalContext)
  const firstName = useFormInput("")
  const lastName = useFormInput("")
  const email = useFormInput("")
  const phoneNumber = useFormInput("")
  const [isDisabledForm, setIsDisabledForm] = useState(true)

  useEffect(() => {
    const resp = firstName.value.length !== 0 ? false : true
    setIsDisabledForm(resp)
  }, [firstName])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isDisabledForm) return
    setIsLoading(true)
    setTimeout(() => {
      setUserInfo({
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        phoneNumber: phoneNumber.value,
      })
      history.push("/dashboard")
    }, 1000)
  }

  return (
    <StandardUserForm
      width='80%'
      method='POST'
      onSubmit={handleSubmit}
      className='welcome-form-wrapper'
    >
      <TitleSection className='title-section'>Name</TitleSection>
      <Row className='row-name'>
        <InputFloatingLabel
          name='firstName'
          {...firstName}
          width='49%'
          placeholder='First'
          data-validate='text'
          margin='0 0 34px 0'
        />

        <InputFloatingLabel
          name='lastName'
          {...lastName}
          width='49%'
          placeholder='Last'
          data-validate='text'
          margin='0 0 34px 0'
        />
      </Row>
      <TitleSection className='title-section'>Email</TitleSection>
      <InputFloatingLabel
        name='email'
        {...email}
        width='100%'
        placeholder='Your email'
        data-validate='email'
        margin='0 0 34px 0'
      />
      <TitleSection className='title-section'>Phone Number</TitleSection>
      <InputFloatingLabel
        name='phoneNumber'
        {...phoneNumber}
        width='100%'
        placeholder='Your phone number'
        data-validate='number'
        margin='0 0 34px 0'
      />
      <PrimaryButton
        type='submit'
        className='submit-button'
        disabled={isDisabledForm}
      >
        Submit
      </PrimaryButton>
    </StandardUserForm>
  )
}

export default WelcomeForm
