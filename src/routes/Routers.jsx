import React from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import App from '../App'
import { LoginScreen } from '../screens/LoginScreen'
import { Inicio } from '../screens/Inicio'

export const Routers = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/login' element={<LoginScreen/>}/>
            <Route path='/inicio' element={<Inicio/>}/>
        </Routes>
    </BrowserRouter>
  )
}


export default Routers
