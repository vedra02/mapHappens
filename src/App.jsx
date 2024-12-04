import React from 'react'
import { Home, RoutePage, About, Feedback, } from './pages'
import { Sidebar, Header, AdminSidebar, AdminHeader} from './components'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Posting from './pages/Posting'
import AddRouteSuggest from './pages/AddRouteSuggest'

const App = () => {
const { pathname } = useLocation();
  return (
    <>
      {/* <Header />
      <Sidebar /> */}
      <AdminHeader />
      <AdminSidebar />
     
      <main className={`md:pl-24 pl-4 md:pt-[5.3rem] pt-20 md:p-6 p-4 ${pathname === '/' ? 'h-screen' : ''}`}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/routes' element={<RoutePage />} />
          <Route path='/about' element={<About />} />
          <Route path='/feedback' element={<Feedback />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/Posting' element={<Posting />} />
          <Route path='/AddRouteSuggest' element={<AddRouteSuggest />} />
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