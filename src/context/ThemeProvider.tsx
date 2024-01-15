import React, { ReactNode, createContext, useState } from 'react'

export interface IThemeContext {
    dark: boolean;
    setDark: React.Dispatch<React.SetStateAction<boolean>>;
}
interface IThemeProviderProps {
    children: ReactNode
}

export const ThemeContext = createContext<IThemeContext | undefined>(undefined);

const ThemeProvider = ({children} : IThemeProviderProps) => {
    const [dark, setDark] = useState(false);
    const value = {
        dark,
        setDark
    }
  return (
    <ThemeContext.Provider value={value}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider