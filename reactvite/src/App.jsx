import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ICard from './components/ICard'
import ICardGallery from './ICardgallery'

function App() {
 

  return (
    <div style={{border:'10px solid red', height:'300px', width:'300px'}}>
      <ICardGallery/>
    </div>
  )
}

export default App
