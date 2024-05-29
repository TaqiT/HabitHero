import React, { useContext } from 'react'
import {
  StyleSheet, ScrollView, View, StatusBar, Modal, Text, TouchableOpacity, TextInput, Keyboard
} from 'react-native';
import TaskComponent from '../components/Task.js';
import FrequencyButtonGroup from '../components/SelectFrequency.js';
import { FrequencyContext } from "../providers/FrequencyProvider.js";
import { TaskModalContext } from '../providers/TaskModalProvider.js';
import { ThemeContext } from '../providers/AppStyleProvider';
import { TaskListContext } from '../providers/TaskListProvider.js';
import FeatherIcon from 'react-native-vector-icons/Feather';

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



const TaskTab = () => {
  const {taskList, addTask, editTask, removeTask} = useContext(TaskListContext);
  const {
    navBarColor, backgroundColor, highlightColor, containerColor
  } = useContext(ThemeContext);
  const {
    taskModalType, taskModalVisible, setTaskModalVisible, newTaskName, setNewTaskName, newTaskPointValue, setNewTaskPointValue, newTaskColor, changeTaskColor, selectedTask
  } = useContext(TaskModalContext);
  const {
    weekData, monthData, frequencyType
  } = React.useContext(FrequencyContext);
  var frequency_data;
  var color = '';
  const saveButtonPress = () => {
    if (newTaskName.length > 0 && ((frequencyType === 'Weekly' && weekData.length != 0) || (frequencyType === 'Monthly' && monthData.length != 0) || frequencyType === 'Daily') && Number(newTaskPointValue) > 0
    ){
      setTaskModalVisible(false);
      if (taskModalType === 'add') {
        ((frequencyType === 'Weekly') ? frequency_data = weekData : frequency_data = monthData);
        color = newTaskColor;
        addTask(newTaskName, newTaskPointValue, frequencyType, frequency_data, color);
      }
      else{
        if (frequencyType === 'Weekly'){
          frequency_data = weekData
        }
        else if (frequencyType === 'Monthly'){
          frequency_data = monthData;
        }
        color = newTaskColor;
        editTask(selectedTask.id, newTaskName, newTaskPointValue, frequencyType, frequency_data, color);
      }
    }
    else if (newTaskPointValue.length == 0){
      alert('Please enter a valid point value');
    }
    else if(isNaN(Number(newTaskPointValue))){
      alert('Nice Try. Enter a valid point value.');
    }
    else if (Number(newTaskPointValue) <= 0){
      alert('Please enter a point value greater than 0');
    }
    else if (frequencyType === 'Weekly' && weekData.length === 0){
      alert('Please select at least one day of the week');
    }
    else if (frequencyType === 'Monthly' && monthData.length === 0){
      alert('Please select at least one day of the month');
    }
    else {
      alert('Please fill out all fields');
    }
  };
  return (
    <ScrollView style={{backgroundColor: backgroundColor}}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={taskModalVisible}
        onRequestClose={() => {
          setTaskModalVisible(false);
      }}>
        <View style={styles.centeredView}>
          <View style={[styles.modalView, {backgroundColor: backgroundColor}]}>
            <View style={styles.topView}>
              <TouchableOpacity
                style={styles.backButton.touchable}
                onPress={() => setTaskModalVisible(false)}
              >
                <FeatherIcon name={"arrow-left"} size={30}/>
              </TouchableOpacity>
              <View style={styles.topViewDivider}/>
              <Text style={styles.modalText}>New Task</Text>
            </View>
            <TextInput
              style={[styles.nameInput, {borderColor: highlightColor}]}
              value={newTaskName}
              multiline={true}
              onChangeText={setNewTaskName}
              placeholder='Task Name'
              enablesReturnKeyAutomatically={true}
              maxLength={100}
              placeholderTextColor='black'
              returnKeyType={'done'}
              onSubmitEditing={Keyboard.dismiss}
            />
            <View style={{ height: 15 }} />
            <TextInput
              style={[styles.pointValueInput, {borderColor: highlightColor}]}
              value={newTaskPointValue}
              onChangeText={setNewTaskPointValue}
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
                      borderWidth: (newTaskColor === color) ? 3 : 0
                    }}
                    onPress={() => {changeTaskColor(color)}}
                  />
                );
              })}
            </View>
            {taskModalType == 'edit' ? // If the modal is in edit mode, show delete button, else show spacer view
            <View style={styles.deleteButton.view}>
              <TouchableOpacity
                style={styles.deleteButton.touchable}
                onPress = {() => {
                  setTaskModalVisible(false);
                  removeTask(selectedTask.id);
                }}
              >
                <Text style={styles.deleteButton.text}> Delete </Text>
              </TouchableOpacity>
            </View> :
            <View style={{ height: 70 }} />
            }
            <TouchableOpacity
              style={[styles.saveButton, {backgroundColor: containerColor}]}
              onPress={() => {saveButtonPress()}}
            >
              <Text style={styles.saveButtonText}>Save Task</Text>
            </TouchableOpacity>
            <View style={{ height: 30, width: 350 }} />
          </View>
        </View>
      </Modal>
      <View style={[styles.container, {backgroundColor: backgroundColor}]}>
        {taskList.map((task, index) => (
          <TaskComponent key={index} task={task} />
        ))}
        <View style={{ height: 90 }} />
      </View>
      <StatusBar style='auto' />
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
      marginTop: 20,
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
    margin: 0,
    backgroundColor: 'white',
    borderRadius: 40,
    borderWidth: 4,
    padding: 15,
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
  backButton:{
    touchable: {
      position: 'absolute',
      left: -115,
      height: 40,
      width: 40,
      borderRadius: 50,
      // backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    },
    view:{
      left: 2,
      borderBottomWidth: 4,
      borderLeftWidth: 4,
      height: 17,
      width: 17,
      transform: [{ rotate: '45deg' }],
    },
  },
  colorsView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 120,
    width: 300,
    flexWrap: 'wrap',
  },
  saveButton: {
    padding: 10,
    marginTop: 20,
    width: 300,
    elevation: 2,
    borderRadius: 10,
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
    width: 300,
    margin: 0,
    borderWidth: 2,
    padding: 7,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 15,
    backgroundColor: 'white',
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
    backgroundColor: 'white',
  },
  spacer: {
    flex: 1,
    height: 10,
  },
});

export default TaskTab;
