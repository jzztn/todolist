import { TodoContextProvider } from '../contexts/TodoContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <TodoContextProvider>
      <Component {...pageProps} />
    </TodoContextProvider>
  )
}

export default MyApp
