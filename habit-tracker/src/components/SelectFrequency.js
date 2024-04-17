import React, { useState } from "react";
import {
  StyleSheet, Pressable, View, Text
} from 'react-native';


const data = [
  { name: 0, name: 'Daily'},
  { key: 1, name: 'Weekly'},
  { key: 2, name: 'Monthly'},
];

const weekdays = [
  { key: 0, name: 'Sun'},
  { key: 1, name: 'Mon'},
  { key: 2, name: 'Tue'},
  { key: 3, name: 'Wed'},
  { key: 4, name: 'Thu'},
  { key: 5, name: 'Fri'},
  { key: 6, name: 'Sat'},
];

const WeekdayRadioGroup = () => {
  const [userOption, setUserOption] = useState('Sun');
  return(
    <View style={styles.weekdayView}>
      {weekdays.map((item) => {
        return (
          <Pressable
            style={
              item.name === userOption ? styles.weekday.selected.pressable :
              styles.weekday.unselected.pressable
            }
            onPress={() => setUserOption(item.name)}
          >
            <Text style={
                item.name === userOption ? styles.weekday.selected.text :
                styles.weekday.unselected.text
            }>
              {item.name}
            </Text>
          </Pressable>
        );
      })}
    </View>
)};

const FrequencyRadioGroup = () => {
  const [userOption, setUserOption] = useState('Daily');
  return (
    <View style={styles.view}>
    <View style={styles.periodView}>
      {data.map((item) => {
        return (
          <Pressable
            style={
              item.name === userOption ? styles.period.selected.pressable :
              styles.period.unselected.pressable
            }
            onPress={() => setUserOption(item.name)}
          >
            <Text style={
                item.name === userOption ? styles.period.selected.text :
                styles.period.unselected.text
            }>
              {item.name}
            </Text>
          </Pressable>
        );
      })}
    </View>
    <View style={styles.weekdayView}>
      {
        userOption === 'Weekly' ? <WeekdayRadioGroup /> : null
      }
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    margin: 10,
  },
  periodView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 10,
  },
  weekdayView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 5,
  },
  option: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  period: {
    unselected: {
      pressable: {
        backgroundColor: 'white',
        borderColor: 'pink',
        borderWidth: 2,
        margin: 10,
        padding: 10,
        borderRadius: 10,
      },
      text: {
        color: 'black',
        fontSize: 23,
      },
    },
  selected: {
    pressable: {
      backgroundColor: 'pink',
      borderColor: 'pink',
      borderWidth: 2,
      margin: 10,
      padding: 10,
      borderRadius: 10,
    },
    text: {
      color: 'white',
      fontSize: 23,
    },
  }
  },
  weekday: {
    unselected: {
      pressable: {
        backgroundColor: 'white',
        borderColor: 'pink',
        borderWidth: 2,
        margin: 5,
        padding: 5,
        borderRadius: 10,
      },
      text: {
        color: 'black',
        fontSize: 15,
      },
    },
  selected: {
    pressable: {
      backgroundColor: 'pink',
      borderColor: 'pink',
      borderWidth: 2,
      margin: 5,
      padding: 5,
      borderRadius: 10,
    },
    text: {
      color: 'white',
      fontSize: 15,
    },
  }}
});

export default FrequencyRadioGroup;
