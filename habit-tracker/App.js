import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet, TouchableOpacity, Text, View, AppRegistry, ScrollView, FlatList
} from 'react-native';

var task_list = [];
var container_background_color = '#A5A5A5';
class Task{
  constructor(name, point_value){
    this.id = task_list.length;
    this.name = name;
    this.point_value = point_value;
    task_list.push(this);
  }
  get_name = () => {
    return this.name;
  }
  get_point_value = () => {
    return this.point_value;
  }
  get_task_str = () => {
    return String(this.name) + ' - ' + String(this.point_value) + ' points';
  }
}

const App = () => {
  var task1 = new Task('Task Name', 10);
  var task2 = new Task('Take out the trash---------', 5);
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
  return DisplayTaskList(task_list);
}

const DisplayTaskList = (taskList) => {
  return (
    <ScrollView>
      <View style={{height:50}}></View>
      {taskList.map((task, index) => (
        <TouchableOpacity
          key = {index}
          style = {styles.touchable}>
          <View style={styles.spacer}></View>
          <Text style={styles.task_name}>
            {task.get_name()}
          </Text>
          <View style={styles.spacer}></View>
          <View style={styles.task_points}>
            <Text>
              {task.get_point_value()}
            </Text>
          </View>
          <View style={styles.spacer}></View>
          <View style={styles.check_box}></View>
        </TouchableOpacity>
      ))}
      <StatusBar style='auto' />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    padding: 5,
    width: 350,
    height: 50,
    marginTop: 10,
    borderColor: '#000',
    borderWidth: 1,
    // backgroundColor: container_background_color,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  task_name: {
    flex: 10,
    color: '#000',
    fontSize: 15,
    justifyContent: 'center',
  },
  task_points: {
    flex: 3,
    color: '#000',
    backgroundColor: '#0f0',
    fontSize: 20,
    alignItems: 'center',
  },
  spacer: {
    flex:1,
    height: 10,
    // width: 50,
    backgroundColor: '#f00',
  },
  check_box: {
    flex: 2,
    height: 10,
    width: 50,
    backgroundColor: '#00f',
  },
  touchable:{
    // flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    padding: 5,
    width: 350,
    height: 50,
    marginTop: 10,
    borderColor: '#000',
    borderWidth: 1,
    // backgroundColor: container_background_color,
    alignItems: 'center',
    justifyContent: 'left',
    display: 'flex',
  }
});

{/* <Header
  statusBarProps={{ barStyle: 'light-content' }}
  barStyle='light-content' // or directly
  leftComponent={<MyCustomCenterComponent />}
  centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
  containerStyle={{
    backgroundColor: '#3D6DCC',
    justifyContent: 'space-around',
  }}
/> */}

export default App;
