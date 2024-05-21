import React, { createContext, useState } from 'react';

var taskCount = 0;

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

const TaskListContext = createContext();

const TaskListProvider = ({ children }) => {
  const taskList = [
    new Task('Take out the trash', 9999),
    new Task('Clean the bathroom', 10),
    new Task('Do the laundry', 10),
    new Task('Sweep the floors', 10),
    new Task('Mop the floors', 10),
    new Task('Clean the kitchen', 10),
    new Task('Clean the living room', 10),
    new Task('Clean the bedroom', 10),
  ];
  const addTask = (name, point_value, frequency, frequency_data, color) => {
    taskList.push(new Task(name, point_value, frequency, frequency_data, color));
  }
  const editTask = (taskID, name='', point_value=0, frequency='Daily', frequency_data=[], color='') => {
    const taskIndex = taskList.findIndex(task => task.id === taskID);
    if (taskIndex === -1) {
      return false;
    }
    name= (name==='')? taskList[taskIndex].name:name;
    point_value= (point_value===0)? taskList[taskIndex].point_value:point_value;
    frequency= (frequency==='Daily')? taskList[taskIndex].frequency:frequency;
    frequency_data=(frequency_data.length===0)?taskList[taskIndex].frequency_data:frequency_data;
    color=(color==='') ? taskList[taskIndex].color : color;
    taskList[taskIndex] = new Task(name, point_value, frequency, frequency_data, color);
  };
  const removeTask = (taskID) => {
    const taskIndex = taskList.findIndex(task => Number(task.id) === Number(taskID));
    if (taskIndex === -1) {
      console.log("Error: Task not found.");
      return;
    }
    taskList.splice(taskIndex, 1);
  }
  return (
    <TaskListContext.Provider value={{
      taskList, addTask, editTask, removeTask
    }}>
      {children}
    </TaskListContext.Provider>
  );
};

export { TaskListProvider, TaskListContext };
