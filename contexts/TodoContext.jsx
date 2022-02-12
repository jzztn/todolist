import { createContext, useState } from 'react'

const todoContext = createContext(null)

const TodoContextProvider = ({ children }) => {
  const [todo, setTodo] = useState([])

  const [input, setInput] = useState('')

  const handleUserInput = (e) => {
    setInput(e.target.value)
  }

  const id = Math.floor(Math.random() * 100000000000)

  const handleAddTodo = () => {
    if(input !== '') {
      setTodo([
        ...todo, 
        {id: id, message: input, isDone: false}  
      ]),
      setInput('')
    }
  }

  const handleDeleteTodo = (id) => {
    let updatedList = []

    updatedList = todo.filter((todo) => {
      if(todo.id !== id) {
        return todo
      }
    })
    setTodo(updatedList)
  }

  const handleIsDone = (e,id) => {
    let updatedList = []

    updatedList = todo.map((todo) => {
      if(todo.id === id) {
        if(e.target.checked) {
          return {
            ...todo,
            isDone: true
          }
        }
      }
      return todo
    })

    setTodo(updatedList)
  }

  const handleAllBtn = () => {
    todo.map((todo) => {return todo})
  }

  return (
    <todoContext.Provider
      value={{ todo, setTodo, input, handleUserInput, handleAddTodo, handleDeleteTodo, handleIsDone, handleAllBtn}}
    >
      {children}
    </todoContext.Provider>
  )
}

export { todoContext, TodoContextProvider }
