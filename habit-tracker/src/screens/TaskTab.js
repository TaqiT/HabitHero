import React, { useState } from 'react'
import {
  StyleSheet, ScrollView, View, StatusBar, Modal, Text, TouchableOpacity, TextInput,
} from 'react-native';
import TaskComponent from '../components/Task';
import FrequencyButtonGroup from '../components/SelectFrequency.js';
import { FrequencyContext } from "../providers/FrequencyProvider";

var taskCount = 0;

const colors = [
  {key: 0, color: 'red'},
  {key: 8, color: 'white'},
  {key: 1, color: 'orange'},
  {key: 2, color: 'yellow'},
  {key: 3, color: 'green'},
  {key: 4, color: 'blue'},
  {key: 5, color: 'purple'},
  {key: 6, color: 'pink'},
  {key: 7, color: 'teal'},
  {key: 9, color: 'brown'},
];


class Task {
  constructor(name, point_value, frequency='daily', color='default') {
    this.id = taskCount++;
    this.name = name;
    this.point_value = point_value;
    this.frequency = frequency;
    this.frequency_data = [];
    this.color = color
  }
  toString() {
    return this.name + ' - ' + this.point_value + ' points' + ' - ' +
    this.frequency + ' - ' + this.color;
  }
}

var taskList = [
  new Task('Take out the trash', 9999),
  new Task('Clean the bathroom', 10),
  new Task('Do the laundry', 10),
  new Task('Sweep the floors', 10),
  new Task('Mop the floors', 10),
  new Task('Clean the kitchen', 10),
  new Task('Clean the living room', 10),
  new Task('Clean the bedroom', 10),
];

const TaskTab = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [newTaskName, onChangeTaskName] = React.useState('');
  const [newTaskPointValue, onChangePointValue] = React.useState('');
  const [selectedColor, setSelectedColor] = React.useState('red');
  const { weekdayData, monthData, frequencyType } = React.useContext(FrequencyContext);
  return (
    <ScrollView style={styles.scrollView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{ height: 10 }} />
            <Text style={styles.modalText}>New Task</Text>
            <TextInput
              style={styles.nameInput}
              value={newTaskName}
              onChangeText={onChangeTaskName}
              placeholder='Task Name'
              enablesReturnKeyAutomatically={true}
              maxLength={26}
              placeholderTextColor='black'
              returnKeyType={'done'}
            />
            <View style={{ height: 15 }} />
            <TextInput
              style={styles.pointValueInput}
              value={newTaskPointValue}
              onChangeText={onChangePointValue}
              keyboardType="numeric"
              placeholder='Point Value'
              enablesReturnKeyAutomatically={true}
              maxLength={4}
              placeholderTextColor='black'
              returnKeyType={'done'}
            />
            <FrequencyButtonGroup />
            <View style={styles.colorsView}>
              {colors.map((props) => {
                key = props.key;
                return (
                  <TouchableOpacity
                    style={{
                      backgroundColor: props.color, width: 50, height: 50, borderRadius: 50, margin: 5, borderWidth: (selectedColor === props.color) ? 5 : 2
                    }}
                    onPress={() => {
                      setSelectedColor(props.color);
                    }}
                  />
                );
              })}
            </View>
            <View style={{ height: 20 }} />
            <TouchableOpacity
              style={[styles.doneButton, styles.buttonClose]}
              onPress={() => {
                if (newTaskName.length > 0 && newTaskPointValue.length > 0) {
                  setModalVisible(!modalVisible);
                  newTask = new Task(newTaskName, newTaskPointValue, frequencyType, selectedColor);
                  (frequencyType === 'Weekly') ? newTask.frequency_data = weekdayData : newTask.frequency_data = monthData;
                  taskList.push(newTask);
                  console.log(newTask.toString());
                }
                else {
                  alert('Please fill out all fields');
                }
              }}>
              <Text style={styles.doneButtonText}>Done</Text>
            </TouchableOpacity>
            <View style={{ height: 150, width: 350 }} />
          </View>
        </View>
      </Modal>
      <View style={styles.container}>
      <TouchableOpacity
        style={[styles.addButton, styles.addButtonOpen]}
        onPress={() => {
          setModalVisible(true);
          onChangeTaskName('');
          onChangePointValue('');
          }}>
        <Text style={styles.addButtonText}>Create New Task!</Text>
      </TouchableOpacity>
        {taskList.map((task, index) => (
          <TaskComponent key={index} task={task} />
        ))}
        <View style={{ height: 90 }} />
        <StatusBar style='auto' />
      </View>
    </ScrollView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: 'white',
  },
  scrollView: {
    backgroundColor: 'white',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  modalView: {
    margin: 0,
    backgroundColor: 'white',
    borderRadius: 50,
    borderWidth: 4,
    borderColor: 'pink',
    padding: 20,
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
  colorsView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 120,
    width: 300,
    flexWrap: 'wrap',
    // backgroundColor: 'red',
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
  addButtonOpen: {
    backgroundColor: 'pink',
  },
  doneButton: {
    padding: 10,
    width: 300,
    elevation: 2,
		borderRadius: 10,
    backgroundColor: '#2196F3',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  addButtonText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  doneButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
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
    borderColor: 'pink',
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
    borderColor: 'pink',
    fontSize: 18,
  },
});

export default TaskTab;
