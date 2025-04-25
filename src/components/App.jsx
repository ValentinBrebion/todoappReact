import React, { useState } from 'react'
import TodoItem from '../../src/components/TodoItem'
import Form from '../../src/components/Form'
import FilterButton from '../../src/components/filterButton'

const initialList = [{ //todo list de base
  id: 'todo-1',
  name: 'Tester React',
  completed: true,
  editing: false
}, {
  id: 'todo-2',
  name: 'Terminer le TP',
  completed: true,
  editing: false
}, {
  id: 'todo-3',
  name: 'Manger tous les chocolats de Pâques',
  completed: false,
  editing: false
}]

const App = () => {
  const clearCompleted = () => {
    setList(list.filter(todo => !todo.completed))
  }
  const [editing, setEditing] = useState(null)

  const handleChange = (id, name) => {
    setList(
      initialList.map(todo => todo.id === id
        ? {
          ...todo,
          name
        }
        : todo
      )
    )
    setEditing(null)
}
 const lenghtTodo = initialList.filter(todo => !todo.completed).length

  const filterItem = todo => filter === 'complétés'
      ? todo.completed
      : filter === 'Actifs'
      ? !todo.completed
      : true

      const handleDestroy = todoId => {
        setList(list.filter(todo => todo.id !== todoId))
      }

  const handleComplete = todoId => {
    setList(
        list.map((todo) => todoId === todo.id
            ? {
                ...todo,
                completed: !todo.completed
            }
            : todo
        )
    )
}
  
  const [list, setList] = useState(initialList)
  const [filter, setFilter] = useState(null)

  const addTask = name => {
    setList([
     {
      name,
      id:"todo-"+Date.now(),
      completed: false
     },
     ...list,
    ])
  }

  return <section className="todoapp">
    <header className="header">
      <h1>Todo</h1>
      <Form onAdd={addTask} />
    </header>
    {/* Cette section doit être cachée par défaut et affichée quand il y a des todos */}
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
      />
      <label htmlFor="toggle-all">Tout compléter</label>
      <ul className="todo-list">
          {list.filter(filterItem).map(todo => <TodoItem
            id={todo.id}
            name={todo.name}
            key={todo.id}
            completed={todo.completed}
            onComplete={() => handleComplete(todo.id)}
            onDestroy={() => handleDestroy(todo.id)}
            onChange={() => handleChange(todo.id, todo.name) }
            onEdit={todo.editing}
          />)}
        
        <li className="editing">
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>Manger tous les chocolats de Pâques</label>
            <button className="destroy" />
          </div>
        </li>
      </ul>
      
    </section>
    {/* Ce footer doit être caché par défaut et affichée quand il y a des todos */}
    <footer className="footer">
      {/* Ceci devrait être "0 restants" par défaut */}
      <span className="todo-count">
      {lenghtTodo <= 1
        ? `${lenghtTodo} tâche restante`
        : `${lenghtTodo} tâches restantes`}
    </span>
      <ul className="filters">
        <li>
        <FilterButton
        label="Tous"
        onClick={() => setFilter(null)}
        selected={filter === null}
        />
        </li>
        <li>
        <FilterButton
        label="Actifs"
        onClick={() => setFilter('Actifs')}
        selected={filter === 'Actifs'}
        />
        </li>
        <li>
        <FilterButton
        label="complétés"
        onClick={() => setFilter('complétés')}
        selected={filter === 'complétés'}
        />
        </li>
      </ul>
      {/* Caché si aucun élément complété restant */}
      {list.some(todo => todo.completed) && (
        <button className="clear-completed" onClick={clearCompleted}>
          Effacer les complétés
        </button>
      )}
    </footer>
  </section>
}

export default App

