import React, { createContext, useState } from 'react';

const TaskModalContext = createContext();

const TaskModalProvider = ({ children }) => {
  const [taskModalType, setTaskModalType] = useState('add'); // 'add', 'edit'
  const [selectedTask, setSelectedTask] = useState(null);
  const [taskModalVisible, setTaskModalVisible] = useState(false);
  const [newTaskName, setNewTaskName] = useState('');
  const [newTaskPointValue, setNewTaskPointValue] = useState('0');
  const [newTaskColor, setNewTaskColor] = useState('');
  const changeTaskColor = (color) => {
    if (newTaskColor === color) {
      setNewTaskColor('');
      return;
    }
    setNewTaskColor(color);
  }
  return (
    <TaskModalContext.Provider value={{
      taskModalType, setTaskModalType, taskModalVisible, setTaskModalVisible, newTaskName, setNewTaskName, newTaskPointValue, setNewTaskPointValue, newTaskColor, setNewTaskColor, changeTaskColor, selectedTask, setSelectedTask
      }}>
      {children}
    </TaskModalContext.Provider>
  );
};

export { TaskModalProvider, TaskModalContext };
