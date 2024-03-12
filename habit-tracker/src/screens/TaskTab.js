import React from 'react'
import { StatusBar } from 'expo-status-bar';
import {
  View, ScrollView
} from 'react-native';
import TaskComponent, { points } from '../components/Task';

var task_list = [];
// var points = 0;

class Task{
  constructor(name, point_value){
    this.id = task_list.length;
    this.name = name;
    this.point_value = point_value;
    this.completed = false;
    task_list.push(this);
  }
}

const TaskTab = (props) => {
  var task2 = new Task('Take out the trash', 9999);
  var task3 = new Task('Clean the bathroom', 10);
  var task4 = new Task('Do the laundry', 10);
  var task5 = new Task('Sweep the floors', 10);
  var task6 = new Task('Mop the floors', 10);
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
    DisplayTaskList(task_list, Boolean(props.editModeEnabled))
  )
}


const DisplayTaskList = (taskList, editModeEnabled) => {
  return (
    <ScrollView>
      {taskList.map((task, index) => (
        <TaskComponent key={index} task={task} editMode={editModeEnabled}/>
      ))}
      <View style={{height: 20}}></View>
      <StatusBar style='auto'/>
    </ScrollView>
  );
}

// export { points, };
export default TaskTab;
