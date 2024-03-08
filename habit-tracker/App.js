import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TaskTab from './src/screens/TaskTab';
import ShopTab from './src/screens/ShopTab';
//import HomeTab from './src/screens/HomeTab'; // Correct import for HomeTab
import { points } from './src/screens/TaskTab'; // Importing points variable from TaskTab
import {
  Text,
  View,
  StyleSheet
} from "react-native"

<<<<<<< HEAD

const stack = createNativeStackNavigator();
const tab = createBottomTabNavigator();

const MyStack = () => {
  return (
    <stack.Navigator>
      <stack.Screen name="Habit Hero" component={MyTabs}/>
    </stack.Navigator>
  )
}

const MyTabs = () => {
  return (
    <tab.Navigator>
      <stack.Screen name="Tasks" component={TaskTab}/>
      <stack.Screen name="Shop" component={ShopTab}/>
    </tab.Navigator>
=======
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tasks" component={TaskTab} />
      <Tab.Screen name="Shop" component={ShopTab} />
    </Tab.Navigator>
>>>>>>> Total-Points
  )
}

const App = () => {
  return (
<<<<<<< HEAD
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  )
}
=======
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Habit Hero" component={MyTabs} />
        </Stack.Navigator>
        <View style={styles.pointsContainer}>
          <Text style={styles.pointsText}>Points: <Text>{points}</Text></Text>
        </View>
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
    top: 50,
    right: 20,
    backgroundColor: '#7FFFD4',
    padding: 10,
    borderRadius: 5,
    elevation: 5,
  },
  pointsText: {
    fontSize: 16,
  },
});
>>>>>>> Total-Points

export default App;

