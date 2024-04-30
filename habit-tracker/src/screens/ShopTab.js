import React, { useContext } from 'react'
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet, TouchableOpacity, Text, View, ScrollView
} from 'react-native';
import { Button } from '@rneui/themed';
import { PointsContext } from '../providers/PointsProvider.js';
import { FrequencyContext } from "../providers/FrequencyProvider";
import { ShopModalContext } from '../providers/ShopModalProvider.js';
import FrequencyButtonGroup from '../components/SelectFrequency.js';
import ShopComponent from '../components/Shop.js';


var rewardCount = 0;

const colors = [
  'black',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple',
  'pink',
  'teal',
  'brown',
];


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

const removeReward = (reward) => {
  reward_list = reward_list.filter((t) => t.id !== reward.id);
};
const ShopTab = () => {
  const {
    modalType, setModalType, rewardModalVisible, setRewardModalVisible, newRewardName, setNewRewardName, newRewardPointValue, setNewRewardPointValue, newRewardColor, changeColor, selectedReward
  } = useContext(ShopModalContext);
  const {
    weekData, clearWeekData, monthData, clearMonthData, frequencyType, setFrequencyType
  } = React.useContext(FrequencyContext);
  var saveButtonPressed = false;
  const saveButtonPress = () => {
    if (newRewardName.length > 0 && newRewardPointValue.length > 0 && ( (frequencyType === 'Weekly' && weekData.length != 0) || (frequencyType === 'Monthly' && monthData.length != 0) || frequencyType === 'Daily')
    ){
      setRewardModalVisible(false);
      if (modalType === 'add') {
        newReward = new Reward(
          newRewardName, newRewardPointValue, frequencyType
        );
        ((frequencyType === 'Weekly') ? newReward.frequency_data = weekData : newReward.frequency_data = monthData);
        newReward.color = newRewardColor;
        rewardList.push(newReward);
      }
      else{
        selectedReward.name = newRewardName;
        selectedReward.point_value = newRewardPointValue;
        selectedReward.frequency = frequencyType;
        ((frequencyType === 'Weekly') ? selectedReward.frequency_data = weekData : selectedReward.frequency_data = monthData);
        selectedReward.color = newRewardColor;
      }
    }
    else if(saveButtonPressed) {
      alert('Please fill out all fields');
    }
  };
  saveButtonPressed = true;
  return (
    <ScrollView style={styles.scrollView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={rewardModalVisible}
        onRequestClose={() => {
          setRewardModalVisible(false);
      }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.topView}>
              <TouchableOpacity style={styles.backButton}
                onPress={() => setRewardModalVisible(false)}
              />
              <View style={styles.topViewDivider} />
              <Text style={styles.modalText}>New Reward</Text>
            </View>
            <TextInput
              style={styles.nameInput}
              value={newRewardName}
              onChangeText={setNewRewardName}
              placeholder='Reward Name'
              enablesReturnKeyAutomatically={true}
              maxLength={26}
              placeholderTextColor='black'
              returnKeyType={'done'}
            />
            <View style={{ height: 15 }} />
            <TextInput
              style={styles.pointValueInput}
              value={newRewardPointValue}
              onChangeText={setNewRewardPointValue}
              keyboardType="numeric"
              placeholder='Point Value'
              enablesReturnKeyAutomatically={true}
              maxLength={4}
              placeholderTextColor='black'
              returnKeyType={'done'}
            />
            <FrequencyButtonGroup />
            <View style={styles.colorsView}>
              {colors.map((color) => {
                return (
                  <TouchableOpacity
                    key={colors.indexOf(color)}
                    style={{
                      backgroundColor: color, width: 50, height: 50, borderRadius: 30, margin: 5,
                      borderColor: (color === 'black') ? 'grey' : 'black',
                      borderWidth: (newRewardColor === color) ? 3 : 0
                    }}
                    onPress={() => {changeColor(color)}}
                  />
                );
              })}
            </View>
            {modalType == 'edit' ? // If the modal is in edit mode, show delete button, else show spacer view
            <View style={styles.deleteButton.view}>
              <TouchableOpacity
                style={styles.deleteButton.touchable}
                onPress = {() => {
                  setRewardModalVisible(false); removeReward(selectedReward);
                }}
              >
                <Text style={styles.deleteButton.text}> Delete </Text>
              </TouchableOpacity>
            </View> :
            <View style={{ height: 70 }} />
            }
            <TouchableOpacity
              style={[styles.saveButton, styles.buttonClose]}
              onPress={() => {saveButtonPress()}}
            >
              <Text style={styles.saveButtonText}>Save Reward</Text>
            </TouchableOpacity>
            <View style={{ height: 30, width: 350 }} />
          </View>
        </View>
      </Modal>
      <View style={styles.container}>
      <TouchableOpacity
        style={[styles.addButton, styles.addButtonOpen]}
        onPress={() => {
          setRewardModalVisible(true);
          setModalType('add');
          setNewRewardName('');
          setNewRewardPointValue('');
          changeColor('');
          setFrequencyType('Daily');
          clearWeekData();
          clearMonthData();
          }}>
        <Text style={styles.addButtonText}>Create New Reward!</Text>
      </TouchableOpacity>
        {rewardList.map((reward, index) => (
          <ShopComponent key={index} reward={reward} />
        ))}
        <View style={{ height: 90 }} />
        <StatusBar style='auto' />
      </View>
    </ScrollView>
  );
};

const RewardComponent = ({ reward }) => {
  const { setPointsTotal } = useContext(PointsContext);
	const { pointTotal } = useContext(PointsContext);

  return (
    <TouchableOpacity
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
  );
}

export { ShopTab, RewardComponent };