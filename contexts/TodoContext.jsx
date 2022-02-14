import { createContext, useState } from 'react'

const todoContext = createContext(null)

const TodoContextProvider = ({ children }) => {
  // useStates
  const [todo, setTodo] = useState([])
  const [displayTodo, setDisplayTodo] = useState(todo)
  const [input, setInput] = useState('')
  const [showCheckBox, setShowCheckBox] = useState(false)
 
  // Get User Input Value
  const handleUserInput = (e) => {
    setInput(e.target.value)
  }

  // Random ID generator
  const id = Math.floor(Math.random() * 100000000000)

  // Add Todo in the List
  const handleAddTodo = () => {
    if (input !== '') {
      setTodo([...todo, { id: id, message: input, isDone: false }]),
      setDisplayTodo([...todo, { id: id, message: input, isDone: false }])
      setInput('')
    } 
  }

  // Delete a Single Todo
  const handleDeleteTodo = (id) => {
    let updatedList = []

    updatedList = todo.filter((todo) => {
      if (todo.id !== id) {
        return todo
      }
    })
    setTodo(updatedList)
    setDisplayTodo(updatedList)
  }

  // To Determine if it is checked or not
  const handleIsDone = (id) => {
    let updatedList = []

    updatedList = todo.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isDone:true
        } 
      }
      return todo
    })
    setTodo(updatedList)
    setDisplayTodo(updatedList)
  }

  // To Show All Todos
  const handleShowAll = () => {
    setShowCheckBox(false)
    setDisplayTodo(todo)
  }

  // To Show All Checked Todos
  const handleShowChecked = () => {
    let checkedTodos = []
    checkedTodos = todo.filter(todo => todo.isDone === true)
    setShowCheckBox(false)
    setDisplayTodo(checkedTodos)
  }

  // To Show All Unchecked Todos
  const handleShowUnchecked = () => {
    let uncheckedTodos = []
    uncheckedTodos = todo.filter(todo => todo.isDone === false)
    setDisplayTodo(uncheckedTodos)
  }

  // To Delete All Todos
  const handleDeleteAll = () => {
    setShowCheckBox(false)
    setTodo([])
    setDisplayTodo([])
  }

  // To Checked All Todos
  const handleCheckedAll = () => {
    let updatedList = []
    setShowCheckBox(false)

    updatedList = todo.map((todo) => {
      if(todo.isDone === false) {
        return {
          ...todo,
          isDone:true
        }
      }
      return todo
    })
    setTodo(updatedList)
    setDisplayTodo(updatedList)
  }

  // To Unchecked All Todos
  const handleUncheckedAll = () => {
    let updatedList = []
    setShowCheckBox(false)

    updatedList = todo.map((todo) => {
      if(todo.isDone) {
        return {
          ...todo,
          isDone:false
        }
      }
      return todo
    })
    setTodo(updatedList)
    setDisplayTodo(updatedList)
  }
  
  // To Track Selected Todos
  const handleSeletedTodos = (e,id) => {
    let updatedList = []

    updatedList = todo.map((todo) => {
      if (todo.id === id) {
        if(e.type.checked) {
          return {
            ...todo,
            isDone:true
          } 
        }
      }
      return todo
    })
    setTodo(updatedList)
    setDisplayTodo(updatedList)
  }

  // To Delete Selected Todos
  const handleDeleteSelected = () => {
    let updatedList = []
    setShowCheckBox(false)
    updatedList = todo.filter(todo => todo.isDone === false)
    setTodo(updatedList)
    setDisplayTodo(updatedList)
  }

  // To Show Checkbox if Selec Multiple Button is clicked
  function handleShowCheckbox() {
    setShowCheckBox(true)
  }


  return (
    <todoContext.Provider
      value={{
        todo,
        setTodo, 
        displayTodo, 
        setDisplayTodo,
        input,
        handleUserInput,
        handleAddTodo,
        handleDeleteTodo,
        handleIsDone,
        handleShowAll,
        handleShowChecked,
        handleShowUnchecked,
        handleDeleteAll,
        handleCheckedAll,
        handleUncheckedAll,
        handleSeletedTodos,
        handleDeleteSelected,
        showCheckBox,
        handleShowCheckbox,
      }}
    >
      {children}
    </todoContext.Provider>
  )
}

export { todoContext, TodoContextProvider }
