import React, { createContext, useState } from 'react';

const TaskModalContext = createContext();

const TaskModalProvider = ({ children }) => {
  const [modalType, setModalType] = useState('add'); // 'add', 'edit'
  const [selectedTask, setSelectedTask] = useState(null);
  const [taskModalVisible, setTaskModalVisible] = useState(false);
  const [newTaskName, setNewTaskName] = useState('');
  const [newTaskPointValue, setNewTaskPointValue] = useState('0');
  const [newTaskColor, setNewTaskColor] = useState('');
  const changeColor = (color) => {
    if (newTaskColor === color) {
      setNewTaskColor('');
      return;
    }
    setNewTaskColor(color);
  }
  return (
    <TaskModalContext.Provider value={{
      modalType, setModalType, taskModalVisible, setTaskModalVisible, newTaskName, setNewTaskName, newTaskPointValue, setNewTaskPointValue, newTaskColor, setNewTaskColor, changeColor, selectedTask, setSelectedTask
      }}>
      {children}
    </TaskModalContext.Provider>
  );
};

export { TaskModalProvider, TaskModalContext };
