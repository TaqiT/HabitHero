import React, { useContext } from 'react';
import {
  StyleSheet, TouchableOpacity
} from "react-native";
import { TaskModalContext } from '../providers/TaskModalProvider';
import { ShopModalContext } from '../providers/ShopModalProvider';
import { FrequencyContext } from '../providers/FrequencyProvider';
import { ThemeContext } from '../providers/AppStyleProvider';
import { CurrentTabContext } from '../providers/CurrentTabProvider';
import FeatherIcon from 'react-native-vector-icons/Feather';


const AddButton = () => {
  const {
    navBarColor, backgroundColor, highlightColor, containerColor
  } = useContext(ThemeContext);
  const {
    setTaskModalType, setTaskModalVisible, setNewTaskName, setNewTaskPointValue, changeTaskColor
  } = useContext(TaskModalContext);
  const {
    setShopModalType, setShopModalVisible, setNewRewardName, setNewRewardPointValue, changeRewardColor
  } = useContext(ShopModalContext);
  const { currentTab } = useContext(CurrentTabContext);
  if (currentTab != 'Tasks' && currentTab != 'Shop') {
    return null;
  }
  const {
    clearWeekData, clearMonthData, setFrequencyType
  } = React.useContext(FrequencyContext);
  return (
    <TouchableOpacity
      style={styles.addButton}
      onPress={() => {
        if (currentTab === 'Shop') {
          setShopModalVisible(true);
          setShopModalType('add');
          setNewRewardName('');
          setNewRewardPointValue('');
          changeRewardColor('');
        }
        else if (currentTab === 'Tasks') {
          setTaskModalVisible(true);
          setTaskModalType('add');
          setNewTaskName('');
          setNewTaskPointValue('');
          changeTaskColor('');
          setFrequencyType('Daily');
          clearWeekData();
          clearMonthData();
        }
      }}
    >
      <FeatherIcon name="plus-square" color={highlightColor} size={35} />
    </TouchableOpacity>
  );
}




const styles = StyleSheet.create({
  addButton: {
    padding: 10,
    elevation: 2,
    alignSelf: 'center',
    padding: 5,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    top: 41,
    right: 30,
    position: 'absolute',
  },
});

export default AddButton;
