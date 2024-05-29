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
import TaskComponent from '../components/CalendarTask';
import { ThemeContext } from '../providers/AppStyleProvider';
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
      <Text style={styles.subtitle}>
        {moment(value).format("YYYY-MM-DD") === moment().format("YYYY-MM-DD") ? 'Today' : moment(value).format("MMM D")}
      </Text>

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
                          isActive ? {
                            backgroundColor: '#111',
                            borderColor: '#111',
                          } : {
                            backgroundColor: '#fff',
                          },

                        ]}>
                        <Text
                          style={[
                            styles.itemWeekday,
                            isActive ? { color: '#fff' }: { color: '#000' },
                          ]}>
                          {item.weekday}
                        </Text>
                        <Text
                          style={[
                            styles.itemDate,
                            isActive ? { color: '#fff' } : { color: '#000' },
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
        <View
          style={{
            paddingHorizontal: 16, paddingVertical: 24, paddingTop: 5
          }}
        >
          <ScrollView style={[styles.taskContainer, {backgroundColor: highlightColor}]}>
            {taskList.map((task, index) => {
              if (!showTask(task, value)){
                return null;
              }
              return(
                <TaskComponent key={index} task={task} />);
            })}
          </ScrollView>
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
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    marginBottom: 5,
    marginTop: -5,
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
  taskContainer: {
    paddingBottom: 10,
    paddingTop: 2,
    borderWidth: 4,
    borderColor: '#e5e7eb',
    borderStyle: 'solid',
    borderRadius: 9,
    textAlign: "center",
  },
});

export default CalendarTab;
