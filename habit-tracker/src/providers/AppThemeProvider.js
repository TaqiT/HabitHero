import React, { createContext, useState }from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
	const [mainColor, setMainColor] = useState("#8000FF");
	const [secondaryColor, setSecondaryColor] = useState("#000");
	return (
		<ThemeContext.Provider value={{
			mainColor, setMainColor, secondaryColor, setSecondaryColor
		}}>
			{children}
		</ThemeContext.Provider>
	);
};

export { ThemeProvider, ThemeContext };
