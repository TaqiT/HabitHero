import React from 'react'
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet, TouchableOpacity, Text, View, ScrollView
} from 'react-native';
import { Button } from '@rneui/themed'; // run 'npm install @rneui/themed'
var reward_list = [];

class Reward{
  constructor(name, point_value){
    this.id = reward_list.length;
    this.name = name;
    this.point_value = point_value;
    reward_list.push(this);
  }
}

const ShopTab = () => {
  var reward1 = new Reward('Skip the gym', 100);
  var reward2 = new Reward('Go get fast food', 50);
  var reward3 = new Reward('Buy concert tickets', 400);
  var reward4 = new Reward('Weekend getaway', 200);
  var reward5 = new Reward('Fine dining experience', 150);
  var reward6 = new Reward('Spa Day', 100);
  var reward7 = new Reward('Get your nails done', 250);
  var reward8 = new Reward('Skip a chore', 60);
  var reward9 = new Reward('Night out', 120);
  var reward10 = new Reward('DIY beauty night', 140);
  var reward11 = new Reward('Indulge in junk food', 240);
  var reward12 = new Reward('Shopping spree', 400);
  return (
    DisplayRewardList(reward_list)
  )
}


const DisplayRewardList = (rewardList) => {
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
              onPress={() => alert('Redeemed!')}
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
    borderColor: '#000',
    borderWidth: 1,
    alignItems: 'center',
    display: 'flex',
    borderRadius: 5,
  },
  divider: {
    height: 23,
    width: 5,
    backgroundColor: '#8A2BE2',
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
      fontSize: 15,
    }
  }
});

export default ShopTab;
