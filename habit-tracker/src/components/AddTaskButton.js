import React, { useContext } from 'react';
import {
  StyleSheet, TouchableOpacity
} from "react-native";
import { TaskModalContext } from '../providers/TaskModalProvider';
import { FrequencyContext } from '../providers/FrequencyProvider';
import { ThemeContext } from '../providers/AppThemeProvider';
import FeatherIcon from 'react-native-vector-icons/Feather';


const AddTaskButton = () => {
  const {
    navBarColor, backgroundColor, highlightColor, containerColor
  } = useContext(ThemeContext);
  const {
    setModalType, setTaskModalVisible, setNewTaskName, setNewTaskPointValue, changeColor
  } = useContext(TaskModalContext);
  const {
    clearWeekData, clearMonthData, setFrequencyType
  } = React.useContext(FrequencyContext);
  return (
    <TouchableOpacity
      style={styles.addButton}
      onPress={() => {
        setTaskModalVisible(true);
        setModalType('add');
        setNewTaskName('');
        setNewTaskPointValue('');
        changeColor('');
        setFrequencyType('Daily');
        clearWeekData();
        clearMonthData();
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

export default AddTaskButton;
