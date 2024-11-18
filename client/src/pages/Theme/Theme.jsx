import React, { useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeContext'
function Theme() {
    const {dark, themeToggle} = useContext(ThemeContext);
  return (
        <div style={{color:`${dark?"white":"black"}`, background:`${dark?"black":"white"}`}}>
          <h1>Heading</h1>
          <p>test</p>
          <button onClick={themeToggle}>set {dark?"light ":"dark "}theme</button>
        </div>
    )
}
export default Theme;
