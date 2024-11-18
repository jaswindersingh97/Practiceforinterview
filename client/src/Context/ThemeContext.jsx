import {  createContext, useState } from 'react'
const ThemeContext = createContext();
const ThemeProvider = ({children}) =>{
    const [dark,setDark] = useState(false); 
    const themeToggle = () =>{
        setDark(!dark);
    }

    return(
        <ThemeContext.Provider value={{
            dark,
            themeToggle
        }}>
        {children}
        </ThemeContext.Provider>
    );
};
export {ThemeProvider, ThemeContext};
