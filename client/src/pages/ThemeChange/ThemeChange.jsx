import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../Context/ThemeContext'
import {Link} from 'react-router-dom';
import Theme from '../Theme/Theme';

function ThemeChange() {
  // const [dark,setDark] = useState(false);
  const{dark,themeToggle} = useContext(ThemeContext)
  return (
    <div style={{color:`${dark?"white":"black"}`, background:`${dark?"black":"white"}`}}>
      <h1>Heading</h1>
      <Link to='/theme'>button</Link>
      <button onClick={themeToggle}>set {dark?"light ":"dark "}theme</button>
    </div>
  )
}

export default ThemeChange
