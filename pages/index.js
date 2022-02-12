import { useContext } from 'react'
import { todoContext } from '../contexts/TodoContext'

const Home = () => {
  const {
    todo,
    input,
    handleUserInput,
    handleAddTodo,
    handleDeleteTodo,
    handleIsDone,
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
            <button className='text-white font-semibold hover:text-slate-300 transition-colors duration-300'>
              All
            </button>
            <button className='text-white font-semibold hover:text-slate-300 transition-colors duration-300'>
              Checked
            </button>
            <button className='text-white font-semibold hover:text-slate-300 transition-colors duration-300'>
              Unchecked
            </button>
          </div>

          <ul className='flex flex-col gap-4'>
            {todo.map((todo) => (
              <li
                key={todo.id}
                className='border-b-[1px] py-3 grid grid-cols-[auto,1fr] items-center gap-10'
              >
                <input
                  type='checkbox'
                  className='w-5 h-5'
                  onClick={(e) => handleIsDone(e, todo.id)}
                />
                <div className='grid grid-cols-[1fr,auto] items-center'>
                  <h1 className='text-white text-lg'>{todo.message}</h1>
                  <button
                    className='bg-red-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-red-600 transition-all duration-300'
                    onClick={() => handleDeleteTodo(todo.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <span className='text-white font-semibold'>Total: {todo.length}</span>
      </div>
    </div>
  )
}

export default Home
