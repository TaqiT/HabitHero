import React, { createContext, useState }from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [navBarColor, setNavBarColor] = useState("#092635");
  const [backgroundColor, setBackgroundColor] = useState("#1B4242");
  const [highlightColor, setHighlightColor] = useState("#9EC8B9");
  const [containerColor, setContainerColor] = useState("#5C8374");
  return (
    <ThemeContext.Provider value={{
      navBarColor, setNavBarColor, backgroundColor, setBackgroundColor, highlightColor, setHighlightColor, containerColor, setContainerColor
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
