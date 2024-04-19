import React, { useState } from "react";
import {
  StyleSheet, Pressable, View, Text
} from 'react-native';

const data = [
  { key: 0, name: 'Daily'},
  { key: 1, name: 'Weekly'},
  { key: 2, name: 'Monthly'},
];

const weekdayData = [
  { key: 0, name: 'Sun'},
  { key: 1, name: 'Mon'},
  { key: 2, name: 'Tue'},
  { key: 3, name: 'Wed'},
  { key: 4, name: 'Thu'},
  { key: 5, name: 'Fri'},
  { key: 6, name: 'Sat'},
];

function range(start, end) {
  if(start === end) return [start];
  return [start, ...range(start + 1, end)];
}

const WeekdayButton = (props) => {
  const [selected, setSelected] = useState(false);
  return (
    <Pressable
      style={selected ? styles.weekday.selected.pressable : styles.weekday.unselected.pressable}
      onPress={() => setSelected(!selected)}
    >
      <Text style={selected ? styles.weekday.selected.text : styles.weekday.unselected.text}>
        {props.day}
      </Text>
    </Pressable>
  );
}

const MonthButton = (props) => {
  const [selected, setSelected] = useState(false);
  return (
    <Pressable
      style={selected ? styles.month.selected.pressable : styles.month.unselected.pressable}
      onPress={() => setSelected(!selected)}
    >
      <Text style={selected ? styles.month.selected.text : styles.month.unselected.text}>
        {props.day}
      </Text>
    </Pressable>
  );
}


const WeekdayButtonGroup = () => {
  return(
    <View>
      <View style={styles.weekdayView}>
        {weekdayData.map((item, index) => {
          key = index;
          return (
            <WeekdayButton key={index} day={item.name}/>
          );
          })}
      </View>
      <View style={styles.weeklySpacer}/>
    </View>

);
}

const MonthButtonGroup = () => {
  return(
    <View style={styles.monthView}>
      <View style={styles.monthRowView}>
        {range(1, 7).map((item) => {
          key = item;
          return (
            <MonthButton key={item} day={item.toString()}/>
          );
        })}
      </View>
      <View style={styles.monthRowView}>
        {range(8, 14).map((index) => {
          key = index;
          return (
            <MonthButton key={index} day={index.toString()}/>
          );
        })}
      </View>
      <View style={styles.monthRowView}>
        {range(15, 21).map((index) => {
          key = index;
          return (
            <MonthButton key={index} day={index.toString()}/>
          );
        })}
      </View>
      <View style={styles.monthRowView}>
        {range(22, 28).map((index) => {
          key = index;
          return (
            <MonthButton key={index} day={index.toString()}/>
          );
        })}
      </View>
      <View style={styles.monthLastRowView}>
        <View style={styles.monthLastRowFirstDivider}/>
        <MonthButton day={29}/>
        <View style={styles.monthLastRowSecondDivider}/>
        <MonthButton day={30}/>
        <View style={styles.monthLastRowThirdDivider}/>
        <MonthButton day={31}/>
      </View>
    </View>
  );
}


const FrequencyButtonGroup = () => {
  const [userOption, setUserOption] = useState('Daily');
  return (
    <View style={styles.view}>
    <View style={styles.periodView}>
      {data.map((item, index) => {
        key = index;
        return (
          <View key={index}>
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
          </View>
        );
      })}
    </View>
    <View>
      {
        userOption === 'Daily' ? <View style={styles.dailySpacer}/> : null
      }
    </View>
    <View>
      {
        userOption === 'Weekly' ? <WeekdayButtonGroup /> : null
      }
    </View>
    <View>
      {
        userOption === 'Monthly' ? <MonthButtonGroup /> : null
      }
    </View>

  </View>
  );
}

const styles = StyleSheet.create({
  view: {
    margin: 10,
    // backgroundColor: 'red',
  },
  periodView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // backgroundColor: 'red',
  },
  weekdayView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 5,
  },
  monthView: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    // backgroundColor: 'red',
  },
  dailySpacer: {
    height: 225,
  },
  weeklySpacer: {
    height: 173,
  },
  monthRowView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 5,
  },
  monthLastRowView: {
    flexDirection: 'row',
    justifyContent: 'left',
    margin: 5,
  },
  monthLastRowFirstDivider: {
    width: 4.5,
  },
  monthLastRowSecondDivider: {
    width: 8.5,
  },
  monthLastRowThirdDivider: {
    width: 9.5,
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
  }},
  month: {
    unselected: {
      pressable: {
        backgroundColor: 'white',
        borderColor: 'pink',
        borderWidth: 2,
        borderRadius: 10,
        width: 35,
        height: 35,
        justifyContent: 'center',
      },
      text: {
        color: 'black',
        fontSize: 15,
        textAlign: 'center',
      },
    },
  selected: {
    pressable: {
      backgroundColor: 'pink',
      borderColor: 'pink',
      borderWidth: 2,
      borderRadius: 10,
      width: 35,
      height: 35,
      justifyContent: 'center',
    },
    text: {
      color: 'white',
      fontSize: 15,
      textAlign: 'center',
    },
  }}
});

export default FrequencyButtonGroup;
