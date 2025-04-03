import React,{useState,useContext,createContext, useEffect} from 'react';

export const ThemeProvider=createContext();

export const useTheme=()=>{
    return useContext(ThemeProvider);
}

const ThemeContext=({children})=>{

    const [isDark,setIsDark]=useState(false);

    const toggleTheme=()=>{
        setIsDark((prev)=>!prev);
    }

    const theme=isDark?"dark":"light";

    useEffect(()=>{
        document.documentElement.setAttribute("data-color",theme)
    },[isDark])

    return <ThemeProvider.Provider value={{theme,toggleTheme}}>
        {children}
    </ThemeProvider.Provider>
}

export default ThemeContext;