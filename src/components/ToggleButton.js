import React from 'react'
import {useToggle} from '../hooks/useToggle'
export function ToggleButton(){
  const [toggle,setToggle]= useToggle(true);

  return (
   <button onClick={setToggle}>
     {toggle ? 'On':'Off'}
   </button>
  );
}

export default ToggleButton;