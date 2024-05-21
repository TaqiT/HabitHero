import React, { useContext, useState, useRef } from 'react'
import {
  StyleSheet, TouchableOpacity, Text, View, Switch, Alert
} from 'react-native';
import { PointsContext } from '../providers/PointsProvider';
import { TaskModalContext } from '../providers/TaskModalProvider';
import { FrequencyContext } from '../providers/FrequencyProvider';
import { ThemeContext } from '../providers/AppThemeProvider';
import LottieView from 'lottie-react-native';
import confetti from '../components/confetti.json';


function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

const toggleSwtich = (state) => {
  setIsEnabled(state);
  if (state) {
    setTimeout(() => {
      setIsEnabled(false);
    }, 12 * 60 * 60 * 1000);
  }
};

const TaskComponent = ({task}) => {
  const {
    navBarColor, backgroundColor, highlightColor, containerColor
  } = useContext(ThemeContext);
  const lottieRef = useRef(null);
  const [isEnabled, setIsEnabled] = useState(false);
  const { pointTotal, setPointsTotal } = useContext(PointsContext);
  const {
    setTaskModalType, setTaskModalVisible, setNewTaskName, setNewTaskPointValue, setNewTaskColor, setSelectedTask
  } = useContext(TaskModalContext);
  const {
    setFrequencyType, addWeekData, addMonthData
  } = useContext(FrequencyContext);
  var newPointTotal = Number(task.point_value);
  const toggleSwitch = (state) => {
    newPointTotal = state
      ? pointTotal + Number(task.point_value)
      : pointTotal - Number(task.point_value);
    setPointsTotal(newPointTotal);
    if (state) {
      triggerConfetti();
    }
  }
  const triggerConfetti = () => {
    if (lottieRef.current) {
      lottieRef.current.play();
    }
  };
  return (
    <TouchableOpacity
      style={[styles.taskTouchable, {borderColor: task.color==='' ? 'black' : task.color, backgroundColor: containerColor}]}
      onPress={() => {
        setSelectedTask(task);
        setTaskModalType('edit');
        setTaskModalVisible(true);
        setNewTaskName(task.name);
        setNewTaskPointValue(String(task.point_value));
        setNewTaskColor(task.color);
        setFrequencyType(task.frequency);
        (task.frequency === 'Weekly') ? addWeekData(task.frequency_data) : addMonthData(task.frequency_data);
      }}
    >
      <LottieView
        ref={lottieRef}
        source={confetti}
        style={styles.lottie}
        resizeMode='cover'
        loop={false}
      />
      <View style={styles.spacer}/>
      <View style={styles.spacer}/>
      <View style={styles.task_name.view}>
        <Text style={styles.task_name.text}>
          {task.name}
        </Text>
      </View>
      <View style={styles.spacer}/>
      <View style={[styles.divider, {backgroundColor: task.color==='' ? highlightColor : task.color}]}/>
      <View style={styles.task_points.view}>
        <Text style={styles.task_points.text}>
          {task.point_value}
        </Text>
      </View>
      <View style={styles.spacer}/>
      <View>
      <Switch
          value={isEnabled}
          onValueChange={(state) => {
            setIsEnabled(previousState => !previousState);
            if (state) {
              Alert.alert(
                'Are you sure you have completed this task?', '🤔', [
                  {
                    text: 'No',
                    style: 'cancel',
                    onPress: () => setIsEnabled(previousState => !previousState)
                  },
                  {
                    text: 'Yes',
                    onPress: () => {
                      toggleSwitch(state);
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
      flex: 20,
      justifyContent: 'center',
    },
    text: {
      color: '#000',
      fontSize: 15,
    },
  },
  task_points: {
    view: {
      flex: 5.5,
      alignItems: 'center',
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
    padding: 5,
    width: 375,
    height: 50,
    marginTop: 10,
    borderColor: '#000',
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'left',
    display: 'flex',
    borderRadius: 12,
  },
  divider: {
    height: 5,
    width: 45,
    borderRadius: 5,
  },
  lottie: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    pointerEvents: 'none',
  },
});

export default TaskComponent;
