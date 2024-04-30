import React, { useContext, useState } from 'react'
import {
	StyleSheet, TouchableOpacity, Text, View, Switch
} from 'react-native';
import { PointsContext } from '../providers/PointsProvider';
import { FrequencyContext } from '../providers/FrequencyProvider';
import { ShopModalContext } from '../providers/ShopModalProvider';


const ShopComponent = ({reward}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const { pointTotal, setPointsTotal } = useContext(PointsContext);
  const {
    setModalType, setRewardModalVisible, setNewRewardName, setNewRewardPointValue, setNewRewardColor, setSelectedReward
  } = useContext(ShopModalContext);
	const { setFrequencyType, addWeekData, addMonthData } = useContext(FrequencyContext);
	const toggleSwitch = () => { setIsEnabled(previousState => !previousState) }
  return (
    <TouchableOpacity
      style={[styles.rewardTouchable, {borderColor: reward.color==='' ? 'black' : reward.color}]}
      onPress={() => {
				setSelectedReward(reward);
				setModalType('edit');
        setRewardModalVisible(true);
        setNewRewardName(reward.name);
        setNewRewardPointValue(String(reward.point_value));
        setNewRewardColor(reward.color);
        setFrequencyType(reward.frequency);
        (reward.frequency === 'Weekly') ? addWeekData(reward.frequency_data) : addMonthData(reward.frequency_data);
      }}
    >
      <View style={styles.spacer}/>
      <View style={styles.spacer}/>
      <View style={styles.reward_name.view}>
        <Text style={styles.reward_name.text}>
          {reward.name}
        </Text>
      </View>
      <View style={styles.spacer}/>
      <View style={[styles.divider, {backgroundColor: reward.color==='' ? 'pink' : reward.color}]}/>
      <View style={styles.reward_points.view}>
        <Text style={styles.reward_points.text}>
          {reward.point_value}
        </Text>
      </View>
      <View style={[styles.divider, {backgroundColor: reward.color==='' ? 'pink' : reward.color}]}/>
      <View style={styles.spacer}/>
      <View>
        <Switch
          value={isEnabled}
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
	reward_name: {
		view: {
			flex: 20,
			justifyContent: 'center',
		},
		text: {
			color: '#000',
			fontSize: 15,
		},
	},
	reward_points: {
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
	rewardTouchable: {
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
		borderRadius: 12,
	},
	divider: {
		height: 23,
		width: 5,
		backgroundColor: 'pink',
		borderRadius: 5,
	},
});

export default ShopComponent;