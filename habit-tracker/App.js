import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TaskTab from './src/screens/TaskTab';
import ShopTab from './src/screens/ShopTab';


const stack = createNativeStackNavigator();
const tab = createBottomTabNavigator();

const MyStack = () => {
  return (
    <stack.Navigator>
      <stack.Screen name="Habit Hero" component={MyTabs} />
    </stack.Navigator>
  )
}

const MyTabs = () => {
  return (
    <tab.Navigator>
      <stack.Screen name="Tasks" component={TaskTab} />
      <stack.Screen name="Shop" component={ShopTab} />
    </tab.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  )
}

export default App;
