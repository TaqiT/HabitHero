import React, { PropsWithChildren } from 'react';
import { createContext, useContext, useState } from 'react';

const PointsContext = createContext();

const PointsProvider = ({ children }) => {
	const [pointTotal, setPointsTotals] = useState(0);
	const addPoints = (points) => {
		setPointsTotals(pointTotal + points);
	};
	return (
		<PointsContext.Provider value={{ pointTotal, addPoints }}>
			{children}
		</PointsContext.Provider>
	);
};

export { PointsProvider, PointsContext };
