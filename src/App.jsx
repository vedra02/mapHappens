import React from 'react'
import { Home, RoutePage } from './pages'
import { Sidebar, Header } from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {

  return (
    <>
      <Header />
      <Sidebar />
      <main className='pl-24 pt-24'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Routes' element={<RoutePage />} />
        </Routes>
      </main>
    </>
  )
}

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

export default AppWrapper