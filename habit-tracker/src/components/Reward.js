import React, { useContext } from 'react'
import {
  StyleSheet, TouchableOpacity, Text, View
} from 'react-native';
import { Button } from '@rneui/themed';
import { PointsContext } from '../providers/PointsProvider.js';
import { ShopModalContext } from '../providers/ShopModalProvider.js';




const RewardComponent = ({ reward }) => {
  const { setPointsTotal } = useContext(PointsContext);
	const { pointTotal } = useContext(PointsContext);
  const {
    setModalType, setRewardModalVisible, setNewRewardName, setNewRewardPointValue, setNewRewardColor, setSelectedReward
  } = useContext(ShopModalContext);

  return (
    <TouchableOpacity
      style = {styles.rewardTouchable}>
      <View style={styles.spacer}></View>
      <View style={styles.spacer}></View>
      <View style={styles.reward_name.view}>
        <Text style={styles.reward_name.text}>
          {reward.name}
        </Text>
      </View>
      <View style={styles.spacer}></View>
      <View style={styles.divider}></View>
      <View style={styles.reward_points.view}>
        <Text style={styles.reward_points.text}>
          {reward.point_value}
        </Text>
      </View>
      <View style={styles.divider}></View>
      <View style={styles.spacer}></View>
      <View style={styles.button.view}>
        <Button
          titleStyle={styles.button.textStyle}
          buttonStyle={styles.button.buttonStyle}
          title='Redeem'
          onPress={() => {
            pointTotal >= reward.point_value ? setPointsTotal(pointTotal - reward.point_value) : alert('Not enough points!');
            pointTotal >= reward.point_value ? alert('Redeemed!') : null
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
  button: {
    view: {
      flex: 7,
      height: 30,
      backgroundColor: '#fff',
      borderWidth: 1,
      borderRadius: 5,
    },
    buttonStyle: {
      borderRadius: 20,
      height: 30,
      width: 70,
      backgroundColor: '#fff'
    },
    textStyle: {
      color: '#000',
      fontSize: 10,
    }
  }

});

export default RewardComponent;
