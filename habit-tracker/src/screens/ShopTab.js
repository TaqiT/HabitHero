import React, { useContext } from 'react'
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet, TouchableOpacity, Text, View, ScrollView
} from 'react-native';
import { Button } from '@rneui/themed';
import { PointsContext } from '../providers/PointsProvider.js';

var rewardCount = 0;

class Reward{
  constructor(name, point_value){
    this.id = rewardCount++;
    this.name = name;
    this.point_value = point_value;
  }
}
var reward_list = [
  new Reward('Skip the gym', 100),
  new Reward('Go get fast food', 50),
  new Reward('Buy concert tickets', 400),
  new Reward('Weekend getaway', 200),
  new Reward('Fine dining experience', 150),
  new Reward('Spa Day', 100),
  new Reward('Get your nails done', 250),
  new Reward('Skip a chore', 60),
  new Reward('Night out', 120),
  new Reward('DIY beauty night', 140),
  new Reward('Indulge in junk food', 240),
  new Reward('Shopping spree', 400),

];

const ShopTab = () => {
  return (
    DisplayRewardList(reward_list)
  )
}


const DisplayRewardList = (rewardList) => {
  const { setPointsTotal } = useContext(PointsContext);
	const { pointTotal } = useContext(PointsContext);

  return (
    <ScrollView>
      {rewardList.map((reward, index) => (
        <TouchableOpacity
          key = {index}
          style = {styles.touchable}>
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
      ))}
      <View style={{height: 20}}></View>
      <StatusBar style='auto' />
    </ScrollView>
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
      // backgroundColor: '#0f0',
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
    // backgroundColor: '#f00',
  },
  touchable:{
    flexDirection: 'row',
    alignSelf: 'center',
    padding: 5,
    width: 350,
    height: 50,
    marginTop: 10,
    borderColor: 'black',
    borderWidth: 1.5,
    alignItems: 'center',
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

export default ShopTab;
