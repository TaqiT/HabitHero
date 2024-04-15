import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TaskTab from './src/screens/TaskTab';
import ShopTab from './src/screens/ShopTab';
import SettingsTab from './src/screens/SettingsTab';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native"

const stack = createNativeStackNavigator();
const tab = createBottomTabNavigator();


// sets style for the bottom navigation bar
const screenOptions = {
  tabBarStyle: {
    backgroundColor: 'black',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 0,
    borderColor: 'white',
    borderRadius: 0
  }
}

const MyTabs = () => {
  return (
    <tab.Navigator screenOptions={screenOptions}>
      <stack.Screen name="Tasks" component={TaskTab}/>
      <stack.Screen name="Shop" component={ShopTab}/>
      <stack.Screen name="Settings" component={SettingsTab}/>
    </tab.Navigator>
  )
}

const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen
            name="Habit Hero"
            component={MyTabs}
            options={{
              title: 'My home',
              headerStyle: {
                backgroundColor: '#000000',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
        </stack.Navigator>
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
