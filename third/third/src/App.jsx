import { Provider } from 'react-redux'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import store from './store/store'

function App() {

  

  return (
    <Provider store={store}>
      <Navbar/>
      <Home/>
    </Provider>
  )
}

export default App
