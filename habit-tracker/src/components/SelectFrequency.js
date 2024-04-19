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

const weekOne = [
  { key: 0, name: '1'},
  { key: 1, name: '2'},
  { key: 2, name: '3'},
  { key: 3, name: '4'},
  { key: 4, name: '5'},
  { key: 5, name: '6'},
  { key: 6, name: '7'},
];

const weekTwo = [
  { key: 0, name: '8'},
  { key: 1, name: '9'},
  { key: 2, name: '10'},
  { key: 3, name: '11'},
  { key: 4, name: '12'},
  { key: 5, name: '13'},
  { key: 6, name: '14'},
];

const weekThree = [
  { key: 0, name: '15'},
  { key: 1, name: '16'},
  { key: 2, name: '17'},
  { key: 3, name: '18'},
  { key: 4, name: '19'},
  { key: 5, name: '20'},
  { key: 6, name: '21'},
];

const weekFour = [
  { key: 0, name: '22'},
  { key: 1, name: '23'},
  { key: 2, name: '24'},
  { key: 3, name: '25'},
  { key: 4, name: '26'},
  { key: 5, name: '27'},
  { key: 6, name: '28'},
];

const weekFive = [
  { key: 0, name: '29'},
  { key: 1, name: '30'},
  { key: 2, name: '31'},
];


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
        {weekOne.map((item, index) => {
          key = index;
          return (
            <MonthButton key={index} day={item.name}/>
          );
        })}
      </View>
      <View style={styles.monthRowView}>
        {weekTwo.map((item, index) => {
          key = index;
          return (
            <MonthButton key={index} day={item.name}/>
          );
        })}
      </View>
      <View style={styles.monthRowView}>
        {weekThree.map((item, index) => {
          key = index;
          return (
            <MonthButton key={index} day={item.name}/>
          );
        })}
      </View>
      <View style={styles.monthRowView}>
        {weekFour.map((item, index) => {
          key = index;
          return (
            <MonthButton key={index} day={item.name}/>
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
