import React, { createContext, useState } from 'react';

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
  const addTask = (task) => {
    taskList.push(task);
  }
  const removeTask = (taskID) => {
    const taskIndex = taskList.findIndex(task => task.id === taskID);
    taskList.splice(taskIndex, 1);
  }
  return (
    <TaskListContext.Provider value={{
      taskList, addTask, removeTask
    }}>
      {children}
    </TaskListContext.Provider>
  );
};

export { TaskListProvider, TaskListContext };
