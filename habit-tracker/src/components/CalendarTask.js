import React, { useContext, useState, useRef } from 'react';
import {
  StyleSheet, TouchableOpacity, Text, View, Switch, Alert
} from 'react-native';
import { PointsContext } from '../providers/PointsProvider';
import { TaskModalContext } from '../providers/TaskModalProvider';
import { FrequencyContext } from '../providers/FrequencyProvider';
import { ThemeContext } from '../providers/AppStyleProvider';
import { TaskListContext } from '../providers/TaskListProvider';
import { CurrentTabContext } from '../providers/CurrentTabProvider';
import LottieView from 'lottie-react-native';
import confetti from '../components/confetti.json';
import fire from '../components/fire.json';


const CalendarTaskComponent = ({ task }) => {
  const {
    navBarColor, backgroundColor, highlightColor, containerColor
  } = useContext(ThemeContext);
  const { toggle } = useContext(TaskListContext);
  const {
    setTaskModalType, setTaskModalVisible, setNewTaskName, setNewTaskPointValue, setNewTaskColor, setSelectedTask
  } = useContext(TaskModalContext);
  const {
    setFrequencyType, setWeekData, setMonthData, clearMonthData, clearWeekData
  } = useContext(FrequencyContext);
  const { setCurrentTab } = useContext(CurrentTabContext);
  const confettiRef = useRef(null);
  const fireRef = useRef(null);
  const [isFireVisible, setIsFireVisible] = useState(false);
  const [streakCount, setStreakCount] = useState(0);
  const { pointTotal, setPointsTotal } = useContext(PointsContext);
  var newPointTotal = Number(task.point_value);
  const toggleSwitch = (state) => {
    newPointTotal = state
      ? pointTotal + Number(task.point_value)
      : pointTotal - Number(task.point_value);
    setPointsTotal(newPointTotal);
    if (state) {
      triggerConfetti();
      changeStreak(1);
    }
    else {
      changeStreak(-1);
    }
    if (state) {
      setTimeout(() => {
        toggle(task.id);
      }, 12 * 60 * 60 * 1000);
    }
  };

  const triggerConfetti = () => {
    if (confettiRef.current) {
      confettiRef.current.play();
    }
  };

  const triggerFire = () => {
    setTimeout(() => {
      if (fireRef.current){
        fireRef.current.play();
      }
    }, 5);
  };

  const changeStreak = ( state ) => {
    setStreakCount(prevCount => {
      const newCount = prevCount + state;
      if (newCount > 0) {
        setIsFireVisible(true);
        if (state > 0){
          triggerFire();
        }
      }
      else {
        setIsFireVisible(false);
      }
      return newCount;
    });
  };

  const openModal = () => {
    setCurrentTab('Tasks');
    setSelectedTask(task);
    setTaskModalType('edit');
    setTaskModalVisible(true);
    setNewTaskName(task.name);
    setNewTaskPointValue(String(task.point_value));
    setNewTaskColor(task.color);
    setFrequencyType(task.frequency);
    if (task.frequency === 'Daily') {
      clearWeekData();
      clearMonthData();
    }
    if (task.frequency === 'Weekly') {
      clearMonthData();
      setWeekData(task.frequency_data);
    }
    if (task.frequency === 'Monthly') {
      clearWeekData();
      setMonthData(task.frequency_data);
    }
  };

  return (
    <TouchableOpacity
      style={[styles.taskTouchable, { borderColor: task.color === '' ? 'black' : task.color, backgroundColor: containerColor }]}
      onPress={openModal}
    >
      <LottieView
        ref={confettiRef}
        source={confetti}
        style={styles.confetti}
        resizeMode='cover'
        loop={false}
      />
      {isFireVisible && (
        <LottieView
          ref={fireRef}
          source={fire}
          style={styles.fire}
          loop={false}
        />
      )}
      {isFireVisible && (<Text style={styles.streakCount}>{streakCount}</Text>)}
      <View style={styles.spacer} />
      <View style={styles.spacer} />
      <View style={styles.task_name.view}>
        <Text style={styles.task_name.text}>
          {task.name}
        </Text>
      </View>
      <View style={styles.spacer} />
      <View style={[styles.divider, { backgroundColor: task.color === '' ? highlightColor : task.color }]} />
      <View style={styles.task_points.view}>
        <Text style={styles.task_points.text}>
          {task.point_value}
        </Text>
      </View>
      <View>
        <Switch
          style={styles.switch}
          value={task.isOn}
          ios_backgroundColor={"lightgrey"}
          onValueChange={(state) => {
            toggle(task.id);
            if (state) {
              Alert.alert(
                'Are you sure you have completed this task?', '🤔', [
                  {
                    text: 'No',
                    style: 'cancel',
                    onPress: () => {
                      toggle(task.id);
                    }
                  },
                  {
                    text: 'Yes',
                    onPress: () => {
                      toggleSwitch(state);
                      // setIsEnabled(!state);
                    }
                  }
                ]
              );
            } else {
              toggleSwitch(state);
            }
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  task_name: {
    view: {
      marginLeft: -10,
      marginTop: 10,
      marginBottom: 10,
      flex: 20,
      justifyContent: 'left',
    },
    text: {
      color: '#000',
      fontSize: 15,
    },
  },
  task_points: {
    view: {
      flex: 5.5,
      alignItems: 'left',
      marginLeft: 10,
    },
    text: {
      color: '#000',
      fontSize: 18,
      justifyContent: 'center',
    },
  },
  spacer: {
    flex: 1,
    height: 10,
  },
  taskTouchable: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: 340,
    marginTop: 10,
    borderColor: '#000',
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'left',
    display: 'flex',
    borderRadius: 8,
  },
  divider: {
    height: 25,
    width: 5,
    borderRadius: 5,
  },
  fire: {
    position: 'absolute',
    top: -16,
    right: -12,
    zIndex: 1000,
    pointerEvents: 'none',
    width: 28,
    height: 28,
  },
  streakCount: {
    position: 'absolute',
    top: -7,
    right: -2,
    fontSize: 15,
    color: '#000',
    zIndex: 1000,
  },
  switch: {
    marginRight: 7,
  },
  confetti: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    pointerEvents: 'none',
  },
});

export default CalendarTaskComponent;
