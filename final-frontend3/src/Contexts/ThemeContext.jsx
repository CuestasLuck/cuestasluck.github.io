import { createContext, useState } from 'react';

export const ThemeContext = createContext();

function ThemeContextProvider(props){
    const [theme, setTheme] = useState(localStorage.getItem("theme"))

    // function toggleTheme() {
    //     setTheme((prevTheme)=>(prevTheme === "light" ? "dark" : "light"))
    // }
    
    function toggleTheme() {
        const newValue = theme === "light" ? "dark" : "light"
        setTheme((newValue))
        localStorage.setItem("theme", newValue)
    }

    const themeValues = {
        value: theme,
        changeTheme: toggleTheme,
    }

    console.log(theme)

    return (
        <ThemeContext.Provider value={themeValues}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;