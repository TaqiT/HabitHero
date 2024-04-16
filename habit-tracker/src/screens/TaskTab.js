import React from 'react';
import { StyleSheet, ScrollView, View, StatusBar } from 'react-native';
import TaskComponent from '../components/Task';

var task_list = [];

class Task {
  constructor(name, point_value) {
    this.id = task_list.length;
    this.name = name;
    this.point_value = point_value;
    this.completed = false;
    task_list.push(this);
  }
}

const TaskTab = () => {
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
    DisplayTaskList(task_list)
  );
};

const DisplayTaskList = (taskList) => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
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
    flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {
    backgroundColor: 'white',
  },
});

export default TaskTab;
