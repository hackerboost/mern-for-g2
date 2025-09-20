import React from 'react'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import CreateProduct from './pages/CreateProduct'
import { Route, Routes } from 'react-router-dom'
import ProfilePage from './pages/ProfilePage'

function App() {

  return (
    <main>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create' element={<CreateProduct />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Routes>
    </main>
  )
}

export default App
