import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TaskTab from './src/screens/TaskTab';
import ShopTab from './src/screens/ShopTab';
import SettingsTab from './src/screens/SettingsTab';
import Points from './src/components/Points';
import AddTaskButton from './src/components/AddButton';
import CalendarTab from './src/screens/CalendarTab';
import { PointsProvider } from './src/providers/PointsProvider';
import { FrequencyProvider } from './src/providers/FrequencyProvider';
import { TaskModalProvider } from './src/providers/TaskModalProvider';
import { ShopModalProvider } from './src/providers/ShopModalProvider';
import { ThemeProvider, ThemeContext } from './src/providers/AppStyleProvider';
import {
  TaskListProvider, TaskListContext
} from './src/providers/TaskListProvider';
import {
  CurrentTabProvider, CurrentTabContext
} from './src/providers/CurrentTabProvider';

import FeatherIcon from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <CurrentTabProvider>
    <TaskListProvider>
    <ThemeProvider>
    <ShopModalProvider>
    <TaskModalProvider>
    <FrequencyProvider>
    <PointsProvider>
      <RootApp/>
    </PointsProvider>
    </FrequencyProvider>
    </TaskModalProvider>
    </ShopModalProvider>
    </ThemeProvider>
    </TaskListProvider>
    </CurrentTabProvider>
  );
};

const RootApp = () => {
  const {
    showNavLabels, navBarColor, backgroundColor, highlightColor, containerColor
  } = useContext(ThemeContext);
  const { currentTab, setCurrentTab } = useContext(CurrentTabContext);
  const { taskList } = useContext(TaskListContext);
  const iconSize = showNavLabels ? 25 : 32;
  return (
      <View style={styles.container}>
        <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: navBarColor,
            },
            headerTintColor: 'white',
            tabBarShowLabel: showNavLabels,
            tabBarStyle: {
              backgroundColor: navBarColor,
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              elevation: 0,
              borderColor: 'black',
              borderRadius: 0
            },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: containerColor,
          }}
        >
          <Tab.Screen
            name="Tasks"
            component={TaskTab}
            options={{
              tabBarIcon: () => (
                <FeatherIcon
                  name="list"
                  color={currentTab == "Tasks" ? "white" :highlightColor}
                  size={iconSize}
                />
              ),
            }}
            listeners={() => ({
              tabPress: e =>
                setCurrentTab('Tasks')
            })}
          />
          <Tab.Screen
            name="Shop"
            component={ShopTab}
            options={{
              tabBarIcon: () => (
                <FeatherIcon
                  name="shopping-cart"
                  color={currentTab == "Shop" ? "white" :highlightColor}
                  size={iconSize}
                />
              ),
            }}
            listeners={() => ({
              tabPress: e =>
                setCurrentTab('Shop')
            })}
          />
          <Tab.Screen
            name="Calendar"
            component={CalendarTab}
            initialParams={{taskList: taskList}}
            options={{
              tabBarIcon: () => (
                <FeatherIcon
                  name="calendar"
                  color={currentTab == "Calendar" ? "white" :highlightColor}
                  size={iconSize}
                />
              ),
            }}
            listeners={() => ({
              tabPress: e =>
                setCurrentTab('Calendar')
            })}
          />
          <Tab.Screen
            name="Account"
            component={SettingsTab}
            options={{
              tabBarIcon: () => (
                <FeatherIcon
                  name="user"
                  color={currentTab == "Settings" ? "white" :highlightColor}
                  size={iconSize}
                />
              ),
            }}
            listeners={() => ({
              tabPress: e =>
                setCurrentTab('Settings')
            })}
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
  screen: {
    backgroundColor: "black",
  }

});

export default App;
