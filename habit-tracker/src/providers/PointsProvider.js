import React from 'react';
import { createContext, useState } from 'react';

const PointsContext = createContext();

const PointsProvider = ({ children }) => {
	const [pointTotal, setPointsTotal] = useState(0);
	return (
		<PointsContext.Provider value={{ pointTotal, setPointsTotal }}>
			{children}
		</PointsContext.Provider>
	);
};

export { PointsProvider, PointsContext };
