import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TaskTab from './src/screens/TaskTab';
import ShopTab from './src/screens/ShopTab';
import SettingsTab from './src/screens/SettingsTab';
import Points from './src/components/Points';
import CalendarTab from './src/screens/CalendarTab';
import { PointsProvider } from './src/providers/PointsProvider';
import { FrequencyProvider } from './src/providers/FrequencyProvider';
import { TaskModalProvider } from './src/providers/TaskModalProvider';
import { View, StyleSheet } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <TaskModalProvider>
    <FrequencyProvider>
    <PointsProvider>
      <View style={styles.container}>
        <NavigationContainer>
        <Tab.Navigator
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
            },
            tabBarActiveTintColor: 'pink',
            tabBarInactiveTintColor: 'grey',
          }}
        >
          {/* <tab.Screen name="Tasks" component={TaskTab}/>
          <tab.Screen name="Shop" component={ShopTab}/>
          <tab.Screen name="Calendar" component={CalendarTab}/>
          <tab.Screen name="Settings" component={SettingsTab}/> */}
          <Tab.Screen
            name="Tasks"
            component={TaskTab}
            options={{
              tabBarIcon: ({ color, size }) => (
                <FeatherIcon name="list" color={"white"} size={10} />
              ),
            }}
          />
          <Tab.Screen
            name="Shop"
            component={ShopTab}
            options={{
              tabBarIcon: ({ color, size }) => (
                <FeatherIcon name="shopping-bag" color={"white"} size={10} />
              ),
            }}
          />
          <Tab.Screen
            name="Calendar"
            component={CalendarTab}
            options={{
              tabBarIcon: ({ color, size }) => (
                <FeatherIcon name="calendar" color={"white"} size={10} />
              ),
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsTab}
            options={{
              tabBarIcon: ({ color, size }) => (
                <FeatherIcon name="settings" color={"white"} size={10} />
              ),
            }}
          />
        </Tab.Navigator>
        </NavigationContainer>
      </View>
      <Points/>
    </PointsProvider>
    </FrequencyProvider>
    </TaskModalProvider>
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
    textStyle: {
      fontSize: 20,
      color: '#8A2BE2',
    },
});

export default App;
