import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import BodyImage from './component/BodyImage'
import Projectinfo from './component/ProjectInfo'
import Skillsandexp from './component/Skillsandexp'
import Contact from './component/Contact'
import Topnavigator from './component/Topnavigator'
import SkillsShowcase from './component/Skillsandexp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <BodyImage />
      {/* <Projectinfo /> */}
      {/* <SkillsShowcase /> */}
      <Topnavigator/>
    </>
  )
}

export default App;
