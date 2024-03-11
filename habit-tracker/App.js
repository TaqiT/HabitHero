import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TaskTab from './src/screens/TaskTab';
import ShopTab from './src/screens/ShopTab';
import { points } from './src/screens/TaskTab'; // Importing points variable from TaskTab
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native"
import { Button } from '@rneui/themed'; // run 'npm install @rneui/themed'

const stack = createNativeStackNavigator();
const tab = createBottomTabNavigator();


const MyTabs = () => {
  return (
    <tab.Navigator>
      <stack.Screen name="Tasks" component={TaskTab}/>
      <stack.Screen name="Shop" component={ShopTab}/>
    </tab.Navigator>
  )
}

const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen name="Habit Hero" component={MyTabs}/>
        </stack.Navigator>
        <TouchableOpacity style={styles.pointsContainer}>
          <Text style={styles.pointsText}>Points: <Text>{points}</Text></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.editButton.container}>
          <Text style={styles.editButton.textStyle}>Edit</Text>
        </TouchableOpacity>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7FFFD4',
  },
  pointsContainer: {
    position: 'absolute',
    top: 45,
    left: 25,
    backgroundColor: '#7FFFD4',
    padding: 10,
    borderRadius: 5,
    elevation: 5,
  },
  pointsText: {
    fontSize: 16,
  },
  editButton: {
    container: {
      position: 'absolute',
      top: 45,
      right: 20,
      width: 70,
      height: 50,
      padding: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textStyle: {
      fontSize: 20,
      color: '#8A2BE2',
    },
  }
});

export default App;
