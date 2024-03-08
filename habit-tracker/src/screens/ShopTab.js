import React from 'react'
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet, TouchableOpacity, Text, View, ScrollView, Switch
} from 'react-native';

var task_list = [];

class Task{
  constructor(name, point_value){
    this.id = task_list.length;
    this.name = name;
    this.point_value = point_value;
    this.completed = false;
    task_list.push(this);
  }
  get_name = () => {
    return this.name;
  }
  get_point_value = () => {
    return this.point_value;
  }
}

const ShopTab = () => {
    var task1 = new Task('Task Name', 9999);
    var task2 = new Task('Take out the trash', 5);
    var task3 = new Task('Clean the bathroom', 15);
    var task4 = new Task('Do the laundry', 20);
    var task5 = new Task('Sweep the floors', 10);
    var task6 = new Task('Mop the floors', 15);
    var task7 = new Task('Clean the kitchen', 10);
    var task8 = new Task('Clean the living room', 10);
    var task9 = new Task('Clean the bedroom', 10);
    var task10 = new Task('Clean the office', 10);
    var task11 = new Task('Clean the garage', 10);
    var task12 = new Task('Clean the car', 10);
    var task13 = new Task('Clean the yard', 10);
    var task14 = new Task('Clean the pool', 10);
    var task15 = new Task('Clean the shed', 10);
    var task16 = new Task('Clean the attic', 10);
    return (
        DisplayTaskList(task_list)
    )
}


const DisplayTaskList = (taskList) => {
  return (
    <ScrollView>
      {taskList.map((task, index) => (
        <TouchableOpacity
          key = {index}
          style = {styles.touchable}>
          <View style={styles.spacer}></View>
          <View style={styles.spacer}></View>
          <View style={styles.task_name.view}>
            <Text style={styles.task_name.text}>
              {task.get_name()}
            </Text>
          </View>
          <View style={styles.spacer}></View>
          <View style={styles.divider}></View>
          <View style={styles.task_points.view}>
            <Text style={styles.task_points.text}>
              {task.get_point_value()}
            </Text>
          </View>
          <View style={styles.divider}></View>
          <View style={styles.spacer}></View>
          <View>
            <Switch/>
          </View>
        </TouchableOpacity>
      ))}
      <View style={{height: 20}}></View>
      <StatusBar style='auto' />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
  check_box: {
    flex: 4,
    height: 20,
    // backgroundColor: '#00f',
    borderWidth: 1,
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
    justifyContent: 'left',
    display: 'flex',
    borderRadius: 5,
  },
  divider: {
    height: 23,
    width: 5,
    backgroundColor: '#777',
    borderRadius: 5,
  },
});


export default ShopTab;