import './App.css'
import { useState } from 'react'
import LandingPage from './components/LandingPage'
import Game from './components/Game'

function App() {
  const [isStarted, setIsStarted] = useState(false)

  function toggleStart() {
    setIsStarted((value) => !value)
  }

  return (
    <>
      {isStarted ? <Game/> : <LandingPage toggle={toggleStart}/>}
      {/* <Game /> */}
    </>
  )
}

export default App
