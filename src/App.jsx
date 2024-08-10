import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import BodyImage from './component/BodyImage'
import Projectinfo from './component/ProjectInfo'
import Skillsandexp from './component/Skillsandexp'
import Contact from './component/Contact'
import Topnavigator from './component/Topnavigator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <BodyImage />
      <Projectinfo />
      <Skillsandexp />
      <Contact/>
      <Topnavigator/>
    </>
  )
}

export default App;
