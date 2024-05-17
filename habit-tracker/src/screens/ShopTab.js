import React, { useContext } from 'react'
import {
  StyleSheet, ScrollView, View, StatusBar, Modal, Text, TouchableOpacity, TextInput
} from 'react-native';
import { Button } from '@rneui/themed';
import { PointsContext } from '../providers/PointsProvider.js';
import { ShopModalContext } from '../providers/ShopModalProvider.js';
import { ThemeContext } from '../providers/AppThemeProvider';
import RewardComponent from '../components/Reward.js';

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
  new Reward('Indulge in junk food', 240),
  new Reward('Shopping spree', 400),
];

const removeReward = (reward) => {
  reward_list = reward_list.filter((t) => t.id !== reward.id);
};

const ShopTab = () => {
  const {
    navBarColor, backgroundColor, highlightColor, containerColor
  } = useContext(ThemeContext);
  const {
    shopModalType, setShopModalType, shopModalVisible, setShopModalVisible, newRewardName, setNewRewardName, newRewardPointValue, setNewRewardPointValue, newRewardColor, changeRewardColor, selectedReward
  } = useContext(ShopModalContext);
  var saveButtonPressed = false;
  const saveButtonPress = () => {
    if (newRewardName.length > 0 && newRewardPointValue.length > 0){
      setShopModalVisible(false);
      if (shopModalType === 'add') {
        newReward = new Reward(
          newRewardName, newRewardPointValue
        );
        newReward.color = newRewardColor;
        reward_list.push(newReward);
      }
      else{
        selectedReward.name = newRewardName;
        selectedReward.point_value = newRewardPointValue;
        selectedReward.color = newRewardColor;
      }
    }
    else if(saveButtonPressed) {
      alert('Please fill out all fields');
    }
  };
  saveButtonPressed = true;
  return (
    <ScrollView style={{backgroundColor: containerColor}}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={shopModalVisible}
        onRequestClose={() => {
          setShopModalVisible(false);
      }}>
        <View style={styles.centeredView}>
          <View style={[styles.modalView, {borderColor: 'black', backgroundColor: containerColor}]}>
            <View style={styles.topView}>
              <TouchableOpacity style={styles.backButton}
                onPress={() => setShopModalVisible(false)}
              />
              <View style={styles.topViewDivider} />
              <Text style={styles.modalText}>New Reward</Text>
            </View>
            <TextInput
              style={[styles.nameInput, {borderColor: highlightColor}]}
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
              style={[styles.pointValueInput, {borderColor: highlightColor}]}
              value={newRewardPointValue}
              onChangeText={setNewRewardPointValue}
              keyboardType="numeric"
              placeholder='Point Value'
              enablesReturnKeyAutomatically={true}
              maxLength={4}
              placeholderTextColor='black'
              returnKeyType={'done'}
            />
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
                    onPress={() => {changeRewardColor(color)}}
                  />
                );
              })}
            </View>
            {shopModalType == 'edit' ? // If the modal is in edit mode, show delete button, else show spacer view
            <View style={styles.deleteButton.view}>
              <TouchableOpacity
                style={styles.deleteButton.touchable}
                onPress = {() => {
                  setShopModalVisible(false); removeReward(selectedReward);
                }}
              >
                <Text style={styles.deleteButton.text}> Delete </Text>
              </TouchableOpacity>
            </View>
            :
            <View style={{ height: 400 }} />
            }
            <TouchableOpacity
              style={[styles.saveButton, styles.buttonClose, {backgroundColor: highlightColor}]}
              onPress={() => {saveButtonPress()}}
            >
              <Text style={styles.saveButtonText}>Save Reward</Text>
            </TouchableOpacity>
            <View style={{ height: 30, width: 350 }} />
          </View>
        </View>
      </Modal>
      <View style={[styles.container, {backgroundColor: containerColor}]}>
        {reward_list.map((reward, index) => (
          <RewardComponent key={index} reward={reward} />
        ))}
        <View style={{ height: 90 }} />
        <StatusBar style='auto' />
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 12,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  deleteButton: {
    view: {
      marginTop: 340,
      width: 300,
      height: 50,
      backgroundColor: 'red',
      borderRadius: 10,
    },
    touchable: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 25,
      fontWeight: 'bold',
      color: 'white',
    }
  },
  topView: {
    flexDirection: 'row',
    justifyContent: 'left',
    alignItems: 'left',
  },
  modalView: {
    borderRadius: 40,
    borderWidth: 4,
    padding: 18,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  backButton: {
    position: 'absolute',
    borderBottomWidth: 4,
    borderLeftWidth: 4,
    top: 7,
    left: -90,
    height: 17,
    width: 17,
    transform: [{ rotate: '45deg' }],
  },
  colorsView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
    height: 120,
    width: 300,
    flexWrap: 'wrap',
  },
  addButton: {
    padding: 10,
    elevation: 2,
    flexDirection: 'row',
    alignSelf: 'center',
    padding: 5,
    width: 375,
    height: 50,
    marginTop: 10,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    borderRadius: 15,
  },
  saveButton: {
    padding: 10,
    marginTop: 20,
    width: 300,
    elevation: 2,
    borderRadius: 10,
  },
  addButtonText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  nameInput: {
    height: 50,
    width: 300,
    margin: 0,
    borderWidth: 2,
    padding: 5,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 15,
  },
  pointValueInput: {
    height: 50,
    width: 150,
    margin: 0,
    borderWidth: 2,
    padding: 5,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 18,
  },
  reward_name: {
    view: {
      flex: 10,
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
    borderRadius: 5,
  },
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
		borderWidth: 1.5,
		alignItems: 'center',
		justifyContent: 'left',
		display: 'flex',
		borderRadius: 12,
	},
	divider: {
		height: 23,
		width: 5,
		borderRadius: 5,
	},
});


export default ShopTab;
