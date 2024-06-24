import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './components/Navbar'
import PageOne from './components/PageOne'

function App() {
  

  return (
<>
<div className='bg-blue-100 h-screen'>
<Navbar/>
<PageOne/>
</div>
</>
  )
}

export default App
