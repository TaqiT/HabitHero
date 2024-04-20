import React, { useContext, useState } from 'react'
import {
	StyleSheet, TouchableOpacity, Text, View, Switch
} from 'react-native';
import { PointsContext } from '../providers/PointsProvider';


const TaskComponent = ({task}) => {
	const [isEnabled, setIsEnabled] = useState(false);
	const { pointTotal, setPointsTotal } = useContext(PointsContext);
	const toggleSwitch = () => { setIsEnabled(previousState => !previousState) }

	return (
		<TouchableOpacity
			style={[styles.touchable, {borderColor: task.color==='default' ? 'black' : task.color}]}>
			<View style={styles.spacer}/>
			<View style={styles.spacer}/>
			<View style={styles.task_name.view}>
				<Text style={styles.task_name.text}>
					{task.name}
				</Text>
			</View>
			<View style={styles.spacer}/>
			<View style={[styles.divider, {backgroundColor: task.color==='default' ? 'pink' : task.color}]}/>
			<View style={styles.task_points.view}>
				<Text style={styles.task_points.text}>
					{task.point_value}
				</Text>
			</View>
			<View style={[styles.divider, {backgroundColor: task.color==='default' ? 'pink' : task.color}]}/>
			<View style={styles.spacer}/>
			<View>
				<Switch
					value={isEnabled}
					thumbColor={task.color==='default' ? 'white' : task.color}
					onValueChange={(state) => {
						{state ? setPointsTotal(pointTotal + Number(task.point_value)) :
						setPointsTotal(pointTotal - Number(task.point_value))}
						toggleSwitch();
					}}
				/>
			</View>
		</TouchableOpacity>
	);
}


const styles = StyleSheet.create({
	task_name: {
		view: {
			flex: 20,
			justifyContent: 'center',
		},
		text: {
			color: '#000',
			fontSize: 15,
		},
	},
	task_points: {
		view: {
			flex: 5.5,

			alignItems: 'center',
		},
		text: {
			color: '#000',
			fontSize: 18,
			justifyContent: 'center',
		},
	},
	spacer: {
		flex: 1,
		height: 10,

	},
	check_box: {
		flex: 4,
		height: 20,

		borderWidth: 1,
	},
	touchable: {
		flexDirection: 'row',
		alignSelf: 'center',
		padding: 5,
		width: 375,
		height: 50,
		marginTop: 10,
		borderColor: '#000',
		borderWidth: 1.5,
		alignItems: 'center',
		justifyContent: 'left',
		display: 'flex',
		borderRadius: 15,
	},
	divider: {
		height: 23,
		width: 5,
		backgroundColor: 'pink',
		borderRadius: 5,
	},
});


export default TaskComponent;
