import { useState } from "react";

export function userInput(defaultValue, validationFn) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const valueIsInvalid = validationFn(enteredValue);

  function handleInputChange(e) {
    setEnteredValue(e.target.value);
    setDidEdit(false);
  }

  function handleInputBlur() {
    setDidEdit(true);
  }

  function validate() {
    setDidEdit(true);
    return valueIsInvalid;
  }

  return {
    value: enteredValue,
    handleInputChange,
    handleInputBlur,
    validate,
    hasError: didEdit && valueIsInvalid,
  };
}
