import React, { useContext } from 'react'
import {
  StyleSheet, ScrollView, View, StatusBar, Modal, Text, TouchableOpacity, TextInput
} from 'react-native';
import TaskComponent from '../components/Task.js';
import FrequencyButtonGroup from '../components/SelectFrequency.js';
import { FrequencyContext } from "../providers/FrequencyProvider.js";
import { TaskModalContext } from '../providers/TaskModalProvider.js';

var taskCount = 0;

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

class Task {
  constructor(name, point_value, frequency='Daily', frequency_data=[], color='') {
    this.id = taskCount++;
    this.name = name;
    this.point_value = point_value;
    this.frequency = frequency;
    this.frequency_data = frequency_data;
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

const removeTask = (task) => {
  taskList = taskList.filter((t) => t.id !== task.id);
};

const TaskTab = () => {
  const {
    modalType, setModalType, taskModalVisible, setTaskModalVisible, newTaskName, setNewTaskName, newTaskPointValue, setNewTaskPointValue, newTaskColor, changeColor, selectedTask
  } = useContext(TaskModalContext);
  const {
    weekData, clearWeekData, monthData, clearMonthData, frequencyType, setFrequencyType
  } = React.useContext(FrequencyContext);
  var saveButtonPressed = false;
  const saveButtonPress = () => {
    if (newTaskName.length > 0 && newTaskPointValue.length > 0 && ( (frequencyType === 'Weekly' && weekData.length != 0) || (frequencyType === 'Monthly' && monthData.length != 0) || frequencyType === 'Daily') && !isNaN(Number(newTaskPointValue))
    ){
      setTaskModalVisible(false);
      if (modalType === 'add') {
        newTask = new Task(
          newTaskName, newTaskPointValue, frequencyType
        );
        ((frequencyType === 'Weekly') ? newTask.frequency_data = weekData : newTask.frequency_data = monthData);
        newTask.color = newTaskColor;
        taskList.push(newTask);
      }
      else{
        selectedTask.name = newTaskName;
        selectedTask.point_value = newTaskPointValue;
        selectedTask.frequency = frequencyType;
        ((frequencyType === 'Weekly') ? selectedTask.frequency_data = weekData : selectedTask.frequency_data = monthData);
        selectedTask.color = newTaskColor;
      }
    }
    else if (saveButtonPressed && isNaN(Number(newTaskPointValue))){
      alert('Please enter a valid point value');
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
        visible={taskModalVisible}
        onRequestClose={() => {
          setTaskModalVisible(false);
      }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.topView}>
              <TouchableOpacity style={styles.backButton}
                onPress={() => setTaskModalVisible(false)}
              />
              <View style={styles.topViewDivider} />
              <Text style={styles.modalText}>New Task</Text>
            </View>
            <TextInput
              style={styles.nameInput}
              value={newTaskName}
              onChangeText={setNewTaskName}
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
                  setTaskModalVisible(false); removeTask(selectedTask);
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
              <Text style={styles.saveButtonText}>Save Task</Text>
            </TouchableOpacity>
            <View style={{ height: 30, width: 350 }} />
          </View>
        </View>
      </Modal>
      <View style={styles.container}>
      <TouchableOpacity
        style={[styles.addButton, styles.addButtonOpen]}
        onPress={() => {
          setTaskModalVisible(true);
          setModalType('add');
          setNewTaskName('');
          setNewTaskPointValue('');
          changeColor('');
          setFrequencyType('Daily');
          clearWeekData();
          clearMonthData();
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
    flex: 12,
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
    borderColor: '#A852FF',
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
  backButton: {
    position: 'absolute',
    borderBottomWidth: 4,
    borderLeftWidth: 4,
    top: 7,
    left: -100,
    height: 17,
    width: 17,
    transform: [{ rotate: '45deg' }],
  },
  colorsView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
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
    borderColor: '',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    borderRadius: 15,
  },
  addButtonOpen: {
    backgroundColor: '#A852FF',
  },
  saveButton: {
    padding: 10,
    marginTop: 20,
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
    borderColor: '#A852FF',
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
    borderColor: '#A852FF',
    fontSize: 18,
  },
  task_name: {
    view: {
      flex: 20,
      justifyContent: 'center',
    },
    text: {
      color: '#000',
      fontSize: 15,
    },
  },
  task_points: {
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
  taskTouchable: {
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
    backgroundColor: '#A852FF',
    borderRadius: 5,
  },
});

export default TaskTab;
