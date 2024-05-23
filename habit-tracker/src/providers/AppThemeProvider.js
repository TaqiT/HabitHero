import React, { createContext, useState }from 'react';

const ThemeContext = createContext();


const themes = {
  "normal": {
    navBarColor: "#092635",
    backgroundColor: "#1B4242",
    highlightColor: "#9EC8B9",
    containerColor: "#5C8374"
  },
  "dark": {
    navBarColor: "#161A30",
    backgroundColor: "#31304D",
    highlightColor: "#B6BBC4",
    containerColor: "#F0ECE5"
  },
  "pink": {
    navBarColor: "#86469C",
    backgroundColor: "#BC7FCD",
    highlightColor: "#FB9AD1",
    containerColor: "#FFCDEA"
  },
  "blue": {
    navBarColor: "#F8F6E3",
    backgroundColor: "#97E7E1",
    highlightColor: "#6AD4DD",
    containerColor: "#7AA2E3"
  },
  "light": {
    navBarColor: "#F6F5F2",
    backgroundColor: "#F0EBE3",
    highlightColor: "#F3D0D7",
    containerColor: "#FFEFEF"
  }
};

const ThemeProvider = ({ children }) => {
  const [appTheme, setAppTheme] = useState("normal")
  const [navBarColor, setNavBarColor] = useState(themes["normal"].navBarColor);
  const [backgroundColor, setBackgroundColor] = useState(themes["normal"].backgroundColor);
  const [highlightColor, setHighlightColor] = useState(themes["normal"].highlightColor);
  const [containerColor, setContainerColor] = useState(themes["normal"].containerColor);
  const changeTheme = (newTheme) => {
    if(!(newTheme in themes)){
      return false
    };
    setAppTheme(newTheme);
    setNavBarColor(themes[newTheme].navBarColor);
    setBackgroundColor(themes[newTheme].backgroundColor);
    setHighlightColor(themes[newTheme].highlightColor);
    setContainerColor(themes[newTheme].containerColor);
    return true
  }
  return (
    <ThemeContext.Provider value={{
      navBarColor, backgroundColor, highlightColor, containerColor, appTheme, changeTheme
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
