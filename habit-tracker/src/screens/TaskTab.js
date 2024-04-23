import React, { useState, useContext } from 'react'
import {
  StyleSheet, ScrollView, View, StatusBar, Modal, Text, TouchableOpacity, TextInput, Switch
} from 'react-native';
import FrequencyButtonGroup from '../components/SelectFrequency.js';
import { FrequencyContext } from "../providers/FrequencyProvider";
import { PointsContext } from '../providers/PointsProvider';

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
  constructor(name, point_value, frequency='daily', color='') {
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



const TaskComponent = ({task}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const { pointTotal, setPointsTotal } = useContext(PointsContext);
  const toggleSwitch = () => { setIsEnabled(previousState => !previousState) }

  return (
    <TouchableOpacity
      style={[styles.touchable, {borderColor: task.color==='' ? 'black' : task.color}]}>
      <View style={styles.spacer}/>
      <View style={styles.spacer}/>
      <View style={styles.task_name.view}>
        <Text style={styles.task_name.text}>
          {task.name}
        </Text>
      </View>
      <View style={styles.spacer}/>
      <View style={[styles.divider, {backgroundColor: task.color==='' ? 'pink' : task.color}]}/>
      <View style={styles.task_points.view}>
        <Text style={styles.task_points.text}>
          {task.point_value}
        </Text>
      </View>
      <View style={[styles.divider, {backgroundColor: task.color==='' ? 'pink' : task.color}]}/>
      <View style={styles.spacer}/>
      <View>
        <Switch
          value={isEnabled}
          onValueChange={(state) => {
            {state ? setPointsTotal(pointTotal + Number(task.point_value)) :
            setPointsTotal(pointTotal - Number(task.point_value))}
            toggleSwitch();
          }}
        />
      </View>
    </TouchableOpacity>
  );
}




const TaskTab = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [newTaskName, onChangeTaskName] = React.useState('');
  const [newTaskPointValue, onChangePointValue] = React.useState('');
  const {
    weekData, clearWeekData, monthData, clearMonthData, frequencyType
  } = React.useContext(FrequencyContext);
  const [selectedColor, setSelectedColor] = React.useState('');
  const changeColor = (color) => {
    if (selectedColor === color) {
      setSelectedColor('');
      return;
    }
    setSelectedColor(color);
  }
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
            <View style={styles.topView}>
              <TouchableOpacity style={styles.backButton}
                onPress={() => setModalVisible(!modalVisible)}
              />
              <View style={styles.topViewDivider} />
              <Text style={styles.modalText}>New Task</Text>
            </View>
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
              {colors.map((color) => {
                return (
                  <TouchableOpacity
                    key={colors.indexOf(color)}
                    style={{
                      backgroundColor: color, width: 50, height: 50, borderRadius: 30, margin: 5,
                      borderColor: (color === 'black') ? 'grey' : 'black',
                      borderWidth: (selectedColor === color) ? 3 : 0
                    }}
                    onPress={() => {
                      changeColor(color);
                    }}
                  />
                );
              })}
            </View>
            <View style={styles.deleteButton.view}>
              <TouchableOpacity
                style={styles.deleteButton.touchable}
                onPress = {() => {setModalVisible(false)}}
              >
                <Text style={styles.deleteButton.text}> Delete </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={[styles.saveButton, styles.buttonClose]}
              onPress={() => {
                if (newTaskName.length > 0 && newTaskPointValue.length > 0 && ( (frequencyType === 'Weekly' && weekData.length != 0) || (frequencyType === 'Monthly' && monthData.length != 0))
                ) {
                  setModalVisible(!modalVisible);
                  newTask = new Task(newTaskName, newTaskPointValue, frequencyType, selectedColor);
                  (frequencyType === 'Weekly') ? newTask.frequency_data = weekData : newTask.frequency_data = monthData;
                  taskList.push(newTask);
                }
                else {
                  alert('Please fill out all fields');
                }
              }}>
              <Text style={styles.saveButtonText}>Save Task</Text>
            </TouchableOpacity>
            <View style={{ height: 50, width: 350 }} />
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
          setSelectedColor('')
          clearWeekData()
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
  deleteButton: {
    view: {
      marginTop: 30,
      justifyContent: 'center',
      alignItems: 'center',
      width: 300,
      height: 50,
      backgroundColor: 'red',
      borderRadius: 10,
    },
    touchable: {},
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
  topViewDivider: {
    height: 10,
    width: 10,
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
  backButton: {
    position: 'absolute',
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    top: 2,
    left: -90,
    height: 15,
    width: 15,
    transform: [{ rotate: '45deg' }],
    borderRadius: 0,
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
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    borderRadius: 15,
  },
  addButtonOpen: {
    backgroundColor: 'pink',
  },
  saveButton: {
    padding: 10,
    marginTop: 30,
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
  touchable: {
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
    backgroundColor: 'pink',
    borderRadius: 5,
  },
});

export default TaskTab;
