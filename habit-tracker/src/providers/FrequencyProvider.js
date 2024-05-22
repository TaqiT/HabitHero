import React, { createContext, useState }from 'react';

const FrequencyContext = createContext();

const FrequencyProvider = ({ children }) => {
  const [frequencyType, setFrequencyType] = useState('Daily');
  const [weekData, setWeekData] = useState([]);
  const [monthData, setMonthData] = useState([]);
  const addWeekData = (data) => {
    setWeekData([...weekData, ...data]);
  };
  const removeWeekData = (data) => {
    setWeekData(weekData.filter((item) => item !== data));
  };
  const clearWeekData = () => {
    setWeekData([]);
  };
  const addMonthData = (data) => {
    setMonthData([...monthData, ...data]);
  };
  const removeMonthData = (data) => {
    setMonthData(monthData.filter((item) => item !== data));
  };
  const clearMonthData = () => {
    setMonthData([]);
  };
  return (
    <FrequencyContext.Provider value={{
      weekData, setWeekData, addWeekData, removeWeekData, clearWeekData, monthData, setMonthData, addMonthData, removeMonthData, clearMonthData, frequencyType, setFrequencyType
      }}>
      {children}
    </FrequencyContext.Provider>
  );
};

export { FrequencyProvider, FrequencyContext };
