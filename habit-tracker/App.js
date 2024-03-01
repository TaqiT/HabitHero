import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

var task_list = [];

class Task{
  constructor(name, point_value){
    this.id = task_list.length;
    this.name = name;
    this.point_value = point_value;
    task_list.push(this);
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
  var task1 = new Task("Do the dishes", 10);
  var task2 = new Task("Take out the trash", 5);
  return DisplayTaskList(task_list);
}

const DisplayTaskList = (taskList) => {
  return (
    <View>
      {taskList.map((task, index) => (
        <View
          key = {index}
          style = {styles.container}>
          <Text style={styles.text}>
            {task.get_task_str()}
          </Text>
        </View>
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginHorizontal: 60,
    padding: 5,
    width: 300,
    marginTop: 50,
    backgroundColor: '#A5A5A5',
    alignItems: 'center',
    display: 'flex',
  },
  text: {
    color: '#000',
    fontSize: 20,
  }
});

export default App;
