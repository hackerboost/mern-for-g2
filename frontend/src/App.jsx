import React from 'react'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import CreateProduct from './pages/CreateProduct'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <main>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create' element={<CreateProduct />} />
      </Routes>
    </main>
  )
}

export default App
