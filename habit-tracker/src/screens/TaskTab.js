import React, { useState } from 'react'
import {
  StyleSheet, ScrollView, View, StatusBar, Modal, Text, TouchableOpacity, TextInput,
} from 'react-native';
import TaskComponent from '../components/Task';

var taskCount = 0;

class Task {
  constructor(name, point_value) {
    this.id = taskCount++;
    this.name = name;
    this.point_value = point_value;
    this.completed = false;
  }
}

var task_list = [
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
  return (
    DisplayTaskList(task_list)
  );
};

const DisplayTaskList = (taskList) => {
  const [modalVisible, setModalVisible] = useState(false);
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
              value={"Task Name"}
            />
            <View style={{ height: 10 }} />
            <TextInput
              style={styles.pointValueInput}
              value={"Task Point value"}
              keyboardType="numeric"
            />
            <View style={{ height: 550, width: 350 }} />
            <TouchableOpacity
              style={[styles.doneButton, styles.buttonClose]}
              onPress={() => {
                setModalVisible(!modalVisible);
                newTask = new Task('Clean the attic', 10);
                taskList.push(newTask);
                }}>
              <Text style={styles.textStyle}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={styles.container}>
      <TouchableOpacity
        style={[styles.addButton, styles.addButtonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Create New Task!</Text>
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
  addButton: {
    padding: 10,
    elevation: 2,
		flexDirection: 'row',
		alignSelf: 'center',
		padding: 5,
		width: 350,
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
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
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
  },
  pointValueInput: {
    height: 50,
    width: 300,
    margin: 0,
    borderWidth: 2,
    padding: 5,
    borderRadius: 10,
    textAlign: 'center',
    borderColor: 'pink',
  },
});

export default TaskTab;
