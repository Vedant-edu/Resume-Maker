import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BasicDocument from './Components/BasicDocument'
import HomePage from './Components/HomePage'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Disclaimer from './Components/Disclaimer'
import MainPage from './Components/MainPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
     
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/edit" element={<BasicDocument />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
