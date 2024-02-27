import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

class Task{
  constructor(name, point_value){
    this.name = name;
    this.point_value = point_value;
  }
  get_name() {
    return this.name;
  }
  get_point_value() {
    return this.point_value;
  }
}

const App = () => {
  const task1 = new Task("Do the dishes", 10);
  const task2 = new Task("Take out the trash", 5);
  const taskList = [task1, task2];
  return DisplayTaskList(taskList);
}

const DisplayTask = task => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f00',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  return (
    <View style={styles}>
      <Text>{task.get_name()} - {task.get_point_value()} points</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const DisplayTaskList = (taskList) => {
  return (
    <View style={styles.container}>
      <DisplayTask task={taskList[0]} />
      <DisplayTask task={taskList[0]} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
