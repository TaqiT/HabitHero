import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

class Task{
  constructor(id, name, point_value){
    this.id = id;
    this.name = name;
    this.point_value = point_value;
  }
  get_name() {
    return this.name;
  }
  get_point_value() {
    return this.point_value;
  }
  get_task_str = () => {
    return String(this.name) + " - " + String(this.point_value) + " points";
  }
}

const App = () => {
  var task1 = new Task(0, "Do the dishes", 10);
  var task2 = new Task(1, "Take out the trash", 5);
  var taskList = [task1, task2];
  return DisplayTaskList(taskList);
}

const DisplayTaskList = (taskList) => {
  return (
    <View>
      {taskList.map((task, index) => (
        <TouchableOpacity
          key = {index}
          style = {styles.container}>
          <Text style={styles.text}>
            {task.get_task_str()}
          </Text>
        </TouchableOpacity>
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontSize: 20,
  }
});

export default App;
