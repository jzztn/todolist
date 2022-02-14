import { useContext } from 'react'
import { todoContext } from '../contexts/TodoContext'
import { CheckCircleIcon } from '@heroicons/react/solid'
import Button from '../components/Button'

const Home = () => {
  const {
    displayTodo,
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
    handleDeleteSelected,
    handleShowCheckbox,
    showCheckBox
  } = useContext(todoContext)

  return (
    <div className='bg-black min-h-screen'>
      <div className='bg-black max-w-3xl mx-auto grid grid-rows-[auto,1fr,auto] gap-10 py-10'>
        <div className='grid grid-cols-[1fr,auto] gap-2'>
          <input
            className='w-full outline-none py-4 pl-4 rounded-md'
            placeholder='Add Todo'
            value={input}
            onChange={handleUserInput}
          />
          <button
            className='px-4 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all duration-300'
            onClick={handleAddTodo}
          >
            Add Todo
          </button>
        </div>

        <div className='grid grid-rows-[auto,1fr] gap-10'>
          <div className='flex gap-8'>
            <Button title='All' handler={handleShowAll}/>
            <Button title='Show Complete' handler={handleShowChecked}/>
            <Button title='Show Incomplete' handler={handleShowUnchecked}/>
            <Button title='Select Multiple' handler={handleShowCheckbox}/>
            <Button title='Delete' handler={handleDeleteSelected}/>
            <Button title='Delete All' handler={handleDeleteAll}/>
            <Button title='Complete All' handler={handleCheckedAll}/>
            <Button title='Incomplete All' handler={handleUncheckedAll}/>
            
          </div>

          <ul className='flex flex-col gap-4'>
            {displayTodo.map((todo) => (
              <li
                key={todo.id}
                className={showCheckBox ? 'border-b-[1px] py-3 grid grid-cols-[auto,1fr] items-center gap-10' : 'border-b-[1px] py-3 grid grid-cols-[1fr,auto] items-center gap-10'}
              >
                {showCheckBox ? (<input
                  type='checkbox'
                  className='w-5 h-5'
                  onClick={(e) => handleIsDone(e, todo.id)}
                />) : ''}
                
                <div className='grid grid-cols-[1fr,auto] items-center'>
                  <h1 className='text-white text-lg'>{todo.message}</h1>
                  <div className='flex gap-4 items-center'>
                      <button
                      className='bg-red-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-red-600 transition-all duration-300'
                      onClick={() => handleDeleteTodo(todo.id)}
                    >
                      Delete
                    </button>
                    <CheckCircleIcon className='w-6 h-6 text-cyan-300' onClick={() => handleIsDone(todo.id)}/>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <span className='text-white text-lg font-bold'>Total: {displayTodo.length}</span>
      </div>
    </div>
  )
}

export default Home
