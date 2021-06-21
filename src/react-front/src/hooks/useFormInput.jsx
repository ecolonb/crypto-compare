import { useState } from "react"

function useFormInput(inititalValue) {
  const [value, setValue] = useState(inititalValue || "")

  const onChange = (e) => {
    const validate = e.target.getAttribute("data-validate")
    let value
    switch (validate) {
      case "text":
        value = e.target.value.replace(/[^a-zA-Z ]+/g, "")
        break

      case "number":
        value = e.target.value.replace(/[^0-9]+/g, "")
        break

      case "email":
        value =
          e.target.value.length <= 0
            ? ""
            : e.target.value.replace(/([^a-zA-Z\-._+]+[@]{1,1})+/g, "")
        break

      default:
        value = e.target.value
        break
    }

    if (value !== undefined) setValue(value)
  }

  return {
    value,
    onChange,
  }
}

export default useFormInput
