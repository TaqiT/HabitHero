import React, { createContext, useState }from 'react';

const FrequencyContext = createContext();

const FrequencyProvider = ({ children }) => {
	const [weekData, setWeekData] = useState([]);
	const addWeekData = (data) => {
		setWeekData([...weekData, data]);
	};
	const removeWeekData = (data) => {
		setWeekData(weekData.filter((item) => item !== data));
	};
	const [monthData, setmonthData] = useState([]);
	const addMonthData = (data) => {
		setmonthData([...monthData, data]);
	};
	const removeMonthData = (data) => {
		setmonthData(monthData.filter((item) => item !== data));
	};
	const [frequencyType, setFrequencyType] = useState('Daily');
	return (
		<FrequencyContext.Provider value={{
			weekData, addWeekData, removeWeekData, monthData, addMonthData, removeMonthData, frequencyType, setFrequencyType
			}}>
			{children}
		</FrequencyContext.Provider>
	);
};

export { FrequencyProvider, FrequencyContext };
