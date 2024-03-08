import React from 'react'
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet, TouchableOpacity, Text, View, ScrollView, Switch, Button
} from 'react-native';

var task_list = [];

class Task{
  constructor(name, point_value){
    this.id = task_list.length;
    this.name = name;
    this.point_value = point_value;
    this.completed = false;
    task_list.push(this);
  }
}

const ShopTab = () => {
  var task1 = new Task('Skip the gym', 100);
  var task2 = new Task('Go get fast food', 50);
  var task3 = new Task('Buy concert tickets', 400);
  var task4 = new Task('Weekend getaway', 200);
  var task5 = new Task('Fine dining experience', 150);
  var task6 = new Task('Spa Day', 100);
  var task7 = new Task('Get ur nails done', 250);
  var task8 = new Task('Skip a chore', 60);
  var task9 = new Task('Night out', 120);
  var task10 = new Task('DIY beauty night', 140);
  var task11 = new Task('Indulge in junk food', 240);
  var task12 = new Task('Shopping spree', 400);
  return (
    DisplayTaskList(task_list)
  )
}


const DisplayTaskList = (taskList) => {
  return (
    <ScrollView>
      {taskList.map((task, index) => (
        <TouchableOpacity
          key = {index}
          style = {styles.touchable}>
          <View style={styles.spacer}></View>
          <View style={styles.spacer}></View>
          <View style={styles.task_name.view}>
            <Text style={styles.task_name.text}>
              {task.name}
            </Text>
          </View>
          <View style={styles.spacer}></View>
          <View style={styles.divider}></View>
          <View style={styles.task_points.view}>
            <Text style={styles.task_points.text}>
              {task.point_value}
            </Text>
          </View>
          <View style={styles.divider}></View>
          <View style={styles.spacer}></View>
          <View style={{borderWidth:1, borderRadius:4}}>
            <Button
              title="Redeem"
              color="#000"
              onPress={() => alert('Redeemed!')}
            />
          </View>
        </TouchableOpacity>
      ))}
      <View style={{height: 20}}></View>
      <StatusBar style='auto' />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  task_name: {
    view: {
      flex: 20,
      justifyContent: 'center',
    },
    text: {
      color: '#000',
      fontSize: 15,
    },
  },
  task_points: {
    view: {
      flex: 5.5,
      // backgroundColor: '#0f0',
      alignItems: 'center',
    },
    text: {
      color: '#000',
      fontSize: 18,
      justifyContent: 'center',
    },
  },
  spacer: {
    flex: 1,
    height: 10,
    // backgroundColor: '#f00',
  },
  check_box: {
    flex: 4,
    height: 20,
    // backgroundColor: '#00f',
    borderWidth: 1,
  },
  touchable:{
    flexDirection: 'row',
    alignSelf: 'center',
    padding: 5,
    width: 350,
    height: 50,
    marginTop: 10,
    borderColor: '#000',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'left',
    display: 'flex',
    borderRadius: 5,
  },
  divider: {
    height: 23,
    width: 5,
    backgroundColor: '#8A2BE2',
    borderRadius: 5,
  },
});

export default ShopTab;
