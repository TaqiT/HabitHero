import React, { createContext, useState }from 'react';

const ThemeContext = createContext();

// dark
{/* #161A30
#31304D
#B6BBC4
#F0ECE5 */}

// pink
{/* #86469C
  #BC7FCD
  #FB9AD1
  #FFCDEA */}

// blue
{/* #F8F6E3
#97E7E1
#6AD4DD
#7AA2E3 */}

// light
{/* #F6F5F2
#F0EBE3
#F3D0D7
#FFEFEF */}



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
