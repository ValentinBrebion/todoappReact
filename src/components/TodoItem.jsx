import React, {useState} from 'react'
  
const TodoItem = (props) => {
  const {
        id,
        name,
        completed,
        editing,
        onChange,
        onComplete,
        onDestroy
  } = props

  const [value, setValue] = useState(name)

  const handleChange = evt => {
    setValue(evt.target.value)
}

const handleSubmit = evt => {
    evt.preventDefault()
    onChange(value)
}

        return <li className={editing
          ? 'editing'
          : completed
              ? 'completed'
              : ''} >
        <div className="view">
          <input className="toggle" type="checkbox" id={id} checked={props.completed} onChange={onComplete} />
          <label>{name}</label>
          <button className="destroy" />
          <button className="destroy" onClick={onDestroy} />
        </div>   
        {editing && <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="edit"
                autoFocus
                value={value}
                onChange={handleChange}
                onBlur={handleSubmit}
            />
            <input type="submit" className="hidden" value="Valider" />
        </form>}
      </li>
}

export default TodoItem

