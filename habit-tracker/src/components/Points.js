import React, { useContext, useState } from 'react'
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { PointsProvider, PointsContext } from "../providers/PointsProvider";




const Points = () => {
	const { pointTotal } = useContext(PointsContext);
	return (
			<TouchableOpacity style={styles.pointsContainer}>
				<Text style={styles.pointsText}>{`Points: ${pointTotal}`}</Text>
			</TouchableOpacity>
	);
}


const styles = StyleSheet.create({
	pointsContainer: {
		position: 'absolute',
		top: 45,
		left: 25,
		backgroundColor: '#7FFFD4',
		padding: 10,
		borderRadius: 5,
		elevation: 5,
	},
	pointsText: {
		fontSize: 16,
	},
});

export default Points;
