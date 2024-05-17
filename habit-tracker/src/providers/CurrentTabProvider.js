import React, { createContext, useState }from 'react';

const CurrentTabContext = createContext();

const CurrentTabProvider = ({ children }) => {
  const [currentTab, setCurrentTab] = useState("Tasks");
  return (
    <CurrentTabContext.Provider value={{ currentTab, setCurrentTab }}>
      {children}
    </CurrentTabContext.Provider>
  );
};

export { CurrentTabProvider, CurrentTabContext };
