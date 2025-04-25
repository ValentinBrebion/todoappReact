import React, { useState } from "react";

const Form = props => {
  const {
      onAdd
  } = props

  const [stateForm, setStateForm] = useState('')

  const handleChange = evt => {
    setStateForm(evt.target.value)
  }

    const handleSubmit = evt => {
        evt.preventDefault()
        onAdd(stateForm)
    }
    return <form onSubmit={handleSubmit}>
    <input
            className="new-todo"
            placeholder="Qu'avez vous à faire ?"
            autoFocus
            onChange={handleChange}
        />
    <input className="hidden" type="submit" value="valider" />
  </form>
}

export default Form