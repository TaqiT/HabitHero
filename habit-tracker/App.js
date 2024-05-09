import React, { useContext } from 'react'
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
import { ThemeProvider, ThemeContext } from './src/providers/AppThemeProvider';
import { View, StyleSheet } from 'react-native';
import ShopTab from './src/screens/ShopTab';
import { ShopModalProvider } from './src/providers/ShopModalProvider';
import FeatherIcon from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
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
  );
};

const RootApp = () => {
  const {
    navBarColor, backgroundColor, highlightColor, containerColor
  } = useContext(ThemeContext);
  return (
      <View style={styles.container}>
        <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: navBarColor,
            },
            headerTintColor: 'white',
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
            tabBarActiveTintColor: highlightColor,
            tabBarInactiveTintColor: 'white',
          }}
        >
          <Tab.Screen
            name="Tasks"
            component={TaskTab}
            options={{
              tabBarIcon: () => (
                <FeatherIcon name="list" color={highlightColor} size={20} />
              ),
            }}
          />
          <Tab.Screen
            name="Shop"
            component={ShopTab}
            options={{
              tabBarIcon: () => (
                <FeatherIcon name="shopping-bag" color={highlightColor} size={20} />
              ),
            }}
          />
          <Tab.Screen
            name="Calendar"
            component={CalendarTab}
            options={{
              tabBarIcon: () => (
                <FeatherIcon name="calendar" color={highlightColor} size={20} />
              ),
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsTab}
            options={{
              tabBarIcon: () => (
                <FeatherIcon name="settings" color={highlightColor} size={20} />
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
  screen: {
    backgroundColor: "black",
  }

});

export default App;
