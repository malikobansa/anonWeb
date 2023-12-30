import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Auth/Login.jsx'
import SignUp from './components/Auth/SignUp.jsx'
import Friends from './components/Pages/Friends.jsx'
import Notifs from './components/Pages/Notifs.jsx'
import Chat from './components/Pages/Chat.jsx'
import Explore from './components/Pages/Explore.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/> 
      <Route path='/friends' element={<Friends/>}/> 
      <Route path='/notification' element={<Notifs/>}/>
      <Route path='/chat' element={<Chat/>}/>
      <Route path='/explore' element={<Explore/>}/>  
    </Routes>
  </BrowserRouter>
)
