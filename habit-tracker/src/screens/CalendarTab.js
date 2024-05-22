import React, { useState, useRef, useContext } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableWithoutFeedback,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import moment from 'moment';
import Swiper from 'react-native-swiper';
import { ThemeContext } from '../providers/AppThemeProvider';
import { TaskListContext } from '../providers/TaskListProvider';

const { width } = Dimensions.get('window');

var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const CalendarTab = () => {
  const {
    navBarColor, backgroundColor, highlightColor, containerColor
  } = useContext(ThemeContext);
  const { taskList } = useContext(TaskListContext);
  const swiper = useRef();
  const [value, setValue] = useState(new Date());
  const [week, setWeek] = useState(0);
  const showTask = (task, date) => {
    if (task.frequency === 'Daily') {
      return true;
    }
    if (task.frequency === 'Weekly') {
      return task.frequency_data.includes(days[date.getDay()]);
    }
    if (task.frequency === 'Monthly') {
      return task.frequency_data.includes(String(date.getDate()));
    }
  };
  const weeks = React.useMemo(() => {
    const start = moment().add(week, 'weeks').startOf('week');

    return [-1, 0, 1].map(adj => {
      return Array.from({ length: 7 }).map((_, index) => {
        const date = moment(start).add(adj, 'week').add(index, 'day');

        return {
          weekday: date.format('ddd'),
          date: date.toDate(),
        };
      });
    });
  }, [week]);


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[styles.container, {backgroundColor: containerColor}]}>
        <View style={styles.header}>
          <Text style={styles.title}>Your Task Schedule</Text>
        </View>

        {/* The top part of the page will the swiping calendar system */}
        <View style={styles.picker}>
          <Swiper
            index={1}
            ref={swiper}
            loop={false}
            showsPagination={false}
            onIndexChanged={ind => {
              if (ind === 1) {
                return;
              }
              setTimeout(() => {
                const newIndex = ind - 1;
                const newWeek = week + newIndex;
                setWeek(newWeek);
                setValue(moment(value).add(newIndex, 'week').toDate());
                swiper.current.scrollTo(1, false);
              }, 100);
            }}>
            {weeks.map((dates, index) => (
              <View
                style={[styles.itemRow, { paddingHorizontal: 16 }]}
                key={index}>
                {dates.map((item, dateIndex) => {
                  const isActive =
                    value.toDateString() === item.date.toDateString();
                  return (
                    <TouchableWithoutFeedback
                      key={dateIndex}
                      onPress={() => setValue(item.date)}>
                      <View
                        style={[
                          styles.item,
                          isActive && {
                            backgroundColor: '#111',
                            borderColor: '#111',
                          },
                        ]}>
                        <Text
                          style={[
                            styles.itemWeekday,
                            isActive && { color: '#fff' },
                          ]}>
                          {item.weekday}
                        </Text>
                        <Text
                          style={[
                            styles.itemDate,
                            isActive && { color: '#fff' },
                          ]}>
                          {item.date.getDate()}
                        </Text>
                      </View>
                    </TouchableWithoutFeedback>
                  );
                })}
              </View>
            ))}
          </Swiper>
        </View>

        {/* The section created to hold the place where the tasks for that day will be stored */}
        <View style={{ flex: 1, paddingHorizontal: 16, paddingVertical: 24, }}>
          <Text style={styles.subtitle}>{value.toDateString()}</Text>
          <View style={styles.placeholder}>
            {/* <View style={styles.placeholderInset}>

            </View> */}
            <ScrollView style={[styles.taskContainer, {backgroundColor: highlightColor}]}>
                {taskList.map((task, index) => {
                  if (!showTask(task, value)){
                    return null;
                  }
                  return (
                    <TouchableOpacity
                      key={index}
                      style={{
                        alignItems: 'center',
                        margin: 8,
                        backgroundColor: 'white',
                        borderRadius: 10,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 20,
                          color: 'black',
                          padding: 10,
                        }}
                      >{task.name}</Text>
                    </TouchableOpacity>
                  );
                })}
            </ScrollView>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
  },
  header: {
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: 'white',
    marginBottom: 12,
  },
  picker: {
    flex: 1,
    maxHeight: 74,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 17,
    fontWeight: '600',
    color: 'white',
    marginBottom: 12,
    marginTop: -15,
  },
  footer: {
    marginTop: 'auto',
    paddingHorizontal: 16,
  },
  /** Item */
  item: {
    flex: 1,
    height: 50,
    marginHorizontal: 4,
    paddingVertical: 6,
    paddingHorizontal: 4,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#e3e3e3',
    flexDirection: 'column',
    alignItems: 'center',
  },
  itemRow: {
    width: width,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginHorizontal: -4,
  },
  itemWeekday: {
    fontSize: 13,
    fontWeight: '500',
    color: '#737373',
    marginBottom: 4,
    color: 'white',
  },
  itemDate: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111',
    color: 'white',
  },
  /** Placeholder */
  placeholder: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    height: 400,
    marginTop: 0,
    padding: 0,
    backgroundColor: 'transparent',
  },
  taskContainer: {
    borderWidth: 4,
    borderColor: '#e5e7eb',
    borderStyle: 'solid',
    borderRadius: 9,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    textAlign: "center",
  },
});

export default CalendarTab;
