import React from 'react'
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet, TouchableOpacity, Text, View, ScrollView, Switch
} from 'react-native';
import TaskComponent from '../components/Task';

var task_list = [];

class Task{
  constructor(name, point_value){
    this.id = task_list.length;
    this.name = name;
    this.point_value = point_value;
    this.completed = false;
    task_list.push(this);
  }
}

const HomeTab = () => {
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
        <TaskComponent key={index} name={task.name} point_value={task.point_value}/>
      ))}
      <View style={{height: 20}}></View>
      <StatusBar style='auto'/>
    </ScrollView>
  );
}

export default HomeTab;
