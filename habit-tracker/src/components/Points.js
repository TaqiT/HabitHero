import React, { useContext } from 'react'
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { PointsProvider, PointsContext } from "../providers/PointsProvider";




const Points = () => {
	const { pointTotal } = useContext(PointsContext);
	return (
		<PointsProvider>
			<TouchableOpacity style={styles.pointsContainer}>
				<Text style={styles.pointsText}>{`Points: ${pointTotal}`}</Text>
			</TouchableOpacity>
		</PointsProvider>
	);
}


const styles = StyleSheet.create({
	pointsContainer: {
		position: 'absolute',
		top: 45,
		left: 25,
		backgroundColor: 'pink',
		padding: 10,
		borderRadius: 5,
		elevation: 5,
	},
	pointsText: {
		fontSize: 16,
	},
});

export default Points;
