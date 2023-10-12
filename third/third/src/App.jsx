import { Provider } from 'react-redux'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import store from './store/store'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Test from './pages/Test'
import Deposit from './pages/Deposit'
import ProductDetail from './pages/ProductDetail'

function App() {

  let user = false

  return (
    <Provider store={store}>
      <Navbar />
      <BrowserRouter>
        <Routes>
          {user ?
            <Route path='/deposit' element={<Deposit/>} />
          :
            <>
              <Route path='/' element={<Home />} />
              <Route path='/test' element={<Test />} />
              <Route path='/product-detail' element={<ProductDetail />} />
            </>
          }
        </Routes>
      </BrowserRouter>
      {/* <h2>Oğuzhan</h2> */}
    </Provider>
  )
}

export default App
