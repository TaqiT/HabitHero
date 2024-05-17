import React, { createContext, useState }from 'react';

const FrequencyContext = createContext();

const FrequencyProvider = ({ children }) => {
  const [frequencyType, setFrequencyType] = useState('Daily');
  const [weekData, setWeekData] = useState([]);
  const addWeekData = (data) => {
    setWeekData([...weekData, ...data]);
  };
  const removeWeekData = (data) => {
    setWeekData(weekData.filter((item) => item !== data));
  };
  const clearWeekData = () => {
    setWeekData([]);
  };
  const [monthData, setMonthData] = useState([]);
  const addMonthData = (data) => {
    setMonthData([...monthData, ...data]);
  };
  const removeMonthData = (data) => {
    setMonthData(monthData.filter((item) => item !== data));
  };
  const clearMonthData = () => {
    setMonthData([]);
  }
  return (
    <FrequencyContext.Provider value={{
      weekData, addWeekData, removeWeekData, clearWeekData, monthData, addMonthData, removeMonthData, clearMonthData, frequencyType, setFrequencyType
      }}>
      {children}
    </FrequencyContext.Provider>
  );
};

export { FrequencyProvider, FrequencyContext };
