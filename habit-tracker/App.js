import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TaskTab from './src/screens/TaskTab';
import SettingsTab from './src/screens/SettingsTab';
import Points from './src/components/Points';
import AddTaskButton from './src/components/AddTaskButton';
import CalendarTab from './src/screens/CalendarTab';
import { PointsProvider } from './src/providers/PointsProvider';
import { FrequencyProvider } from './src/providers/FrequencyProvider';
import { TaskModalProvider } from './src/providers/TaskModalProvider';
import { View, StyleSheet } from 'react-native';
import ShopTab from './src/screens/ShopTab';
import { ShopModalProvider } from './src/providers/ShopModalProvider';
import FeatherIcon from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <ShopModalProvider>
    <TaskModalProvider>
    <FrequencyProvider>
    <PointsProvider>
      <RootApp/>
    </PointsProvider>
    </FrequencyProvider>
    </TaskModalProvider>
    </ShopModalProvider>
  );
};

const RootApp = () => {
  return (
      <View style={styles.container}>
        <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#070F2B',
            },
            headerTintColor: 'white',
            tabBarStyle: {
              backgroundColor: '#070F2B',
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              elevation: 0,
              borderColor: 'black',
              borderRadius: 0
            },
            tabBarActiveTintColor: '#8000FF',
            tabBarInactiveTintColor: 'white',
          }}
        >
          <Tab.Screen
            name="Tasks"
            component={TaskTab}
            options={{
              tabBarIcon: () => (
                <FeatherIcon name="list" color={"#9290C3"} size={20} />
              ),
            }}
          />
          <Tab.Screen
            name="Shop"
            component={ShopTab}
            options={{
              tabBarIcon: () => (
                <FeatherIcon name="shopping-bag" color={"#9290C3"} size={20} />
              ),
            }}
          />
          <Tab.Screen
            name="Calendar"
            component={CalendarTab}
            options={{
              tabBarIcon: () => (
                <FeatherIcon name="calendar" color={"#9290C3"} size={20} />
              ),
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsTab}
            options={{
              tabBarIcon: () => (
                <FeatherIcon name="settings" color={"#9290C3"} size={20} />
              ),
            }}
          />
        </Tab.Navigator>
        </NavigationContainer>
        <Points/>
        <AddTaskButton/>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  pointsContainer: {
    position: 'absolute',
    top: 45,
    left: 25,
    backgroundColor: '#black',
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
  screen: {
    backgroundColor: "black",
  }

});

export default App;
