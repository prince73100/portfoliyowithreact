import React from 'react'
import { IoIosArrowDropupCircle } from "react-icons/io";
function Topnavigator() {
    const scrolltop=()=>{
        window.scrollTo(0,0)
    }
  return (
    <div className='fixed bottom-8 right-0' onClick={scrolltop}>
      <IoIosArrowDropupCircle size={'60px'} color={'#ea3a0b'} />
    </div>
  )
}

export default Topnavigator
