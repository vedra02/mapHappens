import React from 'react'
import { Home, RoutePage, About, Feedback } from './pages'
import { Sidebar, Header } from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {

  return (
    <>
      <Header />
      <Sidebar />
      <main className='pl-28 pt-28'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/routes' element={<RoutePage />} />
          <Route path='/about' element={<About />} />
          <Route path='/feedback' element={<Feedback />} />
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