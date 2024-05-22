import React, { useContext, useState } from 'react'
import {
  StyleSheet, Pressable, View, Text
} from 'react-native';
import { FrequencyContext } from "../providers/FrequencyProvider";
import { ThemeContext } from '../providers/AppThemeProvider';

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
  const {
    navBarColor, backgroundColor, highlightColor, containerColor
  } = useContext(ThemeContext);
  const {
    addWeekData, removeWeekData, weekData
  } = useContext(FrequencyContext);
  const [selected, setSelected] = useState(weekData.includes(props.day));
  return (
    <Pressable
      style={selected ? [styles.weekday.selected.pressable, {backgroundColor: containerColor, borderColor: highlightColor}] : [styles.weekday.unselected.pressable, {borderColor: highlightColor}]}
      onPress={() => {
        !selected ? addWeekData([props.day]) : removeWeekData(props.day);
        setSelected(!selected);
      }}
    >
      <Text style={selected ? styles.weekday.selected.text : styles.weekday.unselected.text}>
        {props.day}
      </Text>
    </Pressable>
  );
}

const MonthButton = (props) => {
  const {
    navBarColor, backgroundColor, highlightColor, containerColor
  } = useContext(ThemeContext);
  const {
    addMonthData, removeMonthData, monthData
  } = useContext(FrequencyContext);
  const [selected, setSelected] = useState(monthData.includes(props.day));
  return (
    <Pressable
      style={selected ? [styles.month.selected.pressable, {backgroundColor: containerColor, borderColor: highlightColor}] : [styles.month.unselected.pressable, {borderColor: highlightColor}]}
      onPress={() => {
        !selected ? addMonthData([props.day]) : removeMonthData(props.day);
        setSelected(!selected);
      }}
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
        {range(1, 7).map((index) => {
          key = index;
          return (
            <MonthButton key={index} day={String(index)}/>
          );
        })}
      </View>
      <View style={styles.monthRowView}>
        {range(8, 14).map((index) => {
          key = index;
          return (
            <MonthButton key={index} day={String(index)}/>
          );
        })}
      </View>
      <View style={styles.monthRowView}>
        {range(15, 21).map((index) => {
          key = index;
          return (
            <MonthButton key={index} day={String(index)}/>
          );
        })}
      </View>
      <View style={styles.monthRowView}>
        {range(22, 28).map((index) => {
          key = index;
          return (
            <MonthButton key={index} day={String(index)}/>
          );
        })}
      </View>
      <View style={styles.monthLastRowView}>
        <View style={styles.monthLastRowFirstDivider}/>
        <MonthButton day={String(29)}/>
        <View style={styles.monthLastRowSecondDivider}/>
        <MonthButton day={String(30)}/>
        <View style={styles.monthLastRowThirdDivider}/>
        <MonthButton day={String(31)}/>
      </View>
    </View>
  );
}


const FrequencyButtonGroup = () => {
  const {
    navBarColor, backgroundColor, highlightColor, containerColor
  } = useContext(ThemeContext);
  const { frequencyType, setFrequencyType } = useContext(FrequencyContext);
  const updateFrequencyType = (name) => {
    // idk why this but this is the only way to set the frequencyType
    setFrequencyType(name);
  };
  return (
    <View style={styles.view}>
    <View style={styles.periodView}>
      {data.map((item) => {
        var name = item.name;
        return (
          <View key={item.key}>
            <Pressable
              style={
                name === frequencyType ? [styles.period.selected.pressable, {backgroundColor: containerColor, borderColor: highlightColor}] :
                [styles.period.unselected.pressable, {borderColor: highlightColor}]
              }
              onPress={() => {
                updateFrequencyType(name);
              }}
            >
              <Text style={
                  name === frequencyType ? styles.period.selected.text :
                  styles.period.unselected.text
              }>
                {name}
              </Text>
            </Pressable>
          </View>
        );
      })}
    </View>
    <View>
      {
        frequencyType === 'Daily' ? <View style={styles.dailySpacer}/> : null
      }
    </View>
    <View>
      {
        frequencyType === 'Weekly' ? <WeekdayButtonGroup /> : null
      }
    </View>
    <View>
      {
        frequencyType === 'Monthly' ? <MonthButtonGroup /> : null
      }
    </View>

  </View>
  );
}

const styles = StyleSheet.create({
  view: {
    margin: 10,
  },
  periodView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  weekdayView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 5,
  },
  monthView: {
    flexDirection: 'column',
    justifyContent: 'space-around',
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
  period: {
    unselected: {
      pressable: {
        backgroundColor: 'white',
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
        borderWidth: 2,
        margin: 5,
        padding: 5,
        borderRadius: 10,
      },
      text: {
        color: 'white',
        fontSize: 15,
      },
    }
  },
  month: {
    unselected: {
      pressable: {
        backgroundColor: 'white',
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
    }
  }
});

export default FrequencyButtonGroup;
