import React from 'react'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Group from './Pages/Group'
import News from './Pages/News'
import Teacher from './Pages/Teacher'


const App = () => {
  return (
<>
<Header/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/Group' element={<Group/>}/>
<Route path='/News' element={<News/>}/>
<Route path='/Teacher' element={<Teacher/>}/>
</Routes>



</>
  )
}

export default App