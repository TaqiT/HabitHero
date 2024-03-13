import React, { PropsWithChildren } from 'react';
import { createContext, useContext, useState } from 'react';

export const PointsContext = createContext({
	pointTotal: 0,
	addPoints: (points: any) => {console.log(points)},
});

const PointsProvider = ({ children }: PropsWithChildren) => {
	const [pointTotal, setPointsTotals] = useState(0);
	const addPoints = (points: number) => {
		console.log(points);
		setPointsTotals(pointTotal + points);
	};
	return (
		<PointsContext.Provider value={{ pointTotal, addPoints: () => {}}}>
			{children}
		</PointsContext.Provider>
	);
};

export default PointsProvider;
