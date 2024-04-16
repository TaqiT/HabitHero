import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TaskTab from './src/screens/TaskTab';
import ShopTab from './src/screens/ShopTab';
import SettingsTab from './src/screens/SettingsTab';
import Points from './src/components/Points';
import EditButton from './src/components/Edit'; 
import { PointsProvider } from './src/providers/PointsProvider';
import { View, StyleSheet,} from 'react-native';

const stack = createNativeStackNavigator();
const tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'black',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          borderColor: 'pink',
          borderRadius: 0
        }
      }}
    >
      <tab.Screen name="Tasks" component={TaskTab}/>
      <tab.Screen name="Shop" component={ShopTab}/>
      <tab.Screen name="Settings" component={SettingsTab}/>
    </tab.Navigator>
  )
}

const App = () => {
  return (
    <PointsProvider>
      <View style={styles.container}>
        <NavigationContainer>
          <stack.Navigator>
            <stack.Screen
              name="Habit Hero"
              component={ MyTabs }
              options={{
                title: 'My Home',
                headerStyle: {
                  backgroundColor: 'black',
                },
                headerTintColor: 'Pink',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
          </stack.Navigator>
        </NavigationContainer>
      </View>
      <Points/>
      <EditButton/> 
    </PointsProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#blue',
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
  },
});

export default App;

