import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TaskTab from './src/screens/TaskTab';
import ShopTab from './src/screens/ShopTab';
import Points from './src/components/Points';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native"
import { PointsProvider , PointsContext } from './src/providers/PointsProvider';

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
    <PointsProvider>
      <View style={styles.container}>
        <NavigationContainer>
            <stack.Navigator>
              <stack.Screen name="Habit Hero" component={MyTabs}/>
            </stack.Navigator>
          <Points/>
        </NavigationContainer>
      </View>
    </PointsProvider>
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
