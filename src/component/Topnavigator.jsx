import React from 'react'
import { IoIosArrowDropupCircle } from "react-icons/io";
function Topnavigator() {
    const scrolltop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
  return (
    <div className='fixed bottom-8 right-0 cursor-pointer' onClick={scrolltop}>
      <IoIosArrowDropupCircle size={'60px'} color={'#f3f3f3ff'} />
    </div>
  )
}

export default Topnavigator
