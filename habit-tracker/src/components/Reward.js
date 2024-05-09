import React, { useContext, useRef } from 'react';
import {
  StyleSheet, TouchableOpacity, Text, View, Alert
} from 'react-native';
import { Button } from '@rneui/themed';
import { PointsContext } from '../providers/PointsProvider.js';
import { ShopModalContext } from '../providers/ShopModalProvider.js';
import { ThemeContext } from '../providers/AppThemeProvider';
import LottieView from 'lottie-react-native';
import confetti from '../components/confetti.json';

const RewardComponent = ({ reward }) => {
  const {
    navBarColor, backgroundColor, highlightColor, containerColor
  } = useContext(ThemeContext);
  const { setPointsTotal, pointTotal } = useContext(PointsContext);
  const { setModalType, setRewardModalVisible, setNewRewardName, setNewRewardPointValue, setNewRewardColor, setSelectedReward } = useContext(ShopModalContext);
  const lottieRef = useRef(null);

  const triggerConfetti = () => {
    if (lottieRef.current) {
      lottieRef.current.play();
    }
  };

  return (
    <TouchableOpacity
      style={styles.rewardTouchable}>
      <View style={styles.spacer}></View>
      <View style={styles.spacer}></View>
      <View style={styles.reward_name.view}>
        <Text style={styles.reward_name.text}>
          {reward.name}
        </Text>
      </View>
      <View style={styles.spacer}></View>
      <View style={[styles.divider, {backgroundColor: highlightColor}]}></View>
      <View style={styles.reward_points.view}>
        <Text style={styles.reward_points.text}>
          {reward.point_value}
        </Text>
      </View>
      <View style={styles.button.view}>
        <Button
          titleStyle={styles.button.textStyle}
          buttonStyle={[styles.button.buttonStyle, {backgroundColor: highlightColor}]}
          title='Redeem'
          onPress={() => {
            if (pointTotal >= reward.point_value) {
              setPointsTotal(pointTotal - reward.point_value);
              triggerConfetti();
              Alert.alert('Congratulations on Redeeming!');
            } else {
              Alert.alert('Not enough points!');
            }
          }}
        />
      </View>
      <LottieView
        ref={lottieRef}
        source={confetti}
        style={styles.lottie}
        resizeMode='cover'
        animationDuration={30000}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  reward_name: {
    view: {
      flex: 20,
      justifyContent: 'center',
    },
    text: {
      color: '#000',
      fontSize: 15,
    },
  },
  reward_points: {
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
  rewardTouchable: {
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
    justifyContent: 'center'
  },
  button: {
    view: {
      flex: 7,
      height: 30,
      right: -3,
      borderRadius: 6,
    },
    buttonStyle: {
      height: 30,
      width: 66,
      top:-4,
    },
    textStyle: {
      color: 'white',
      fontSize: 12,
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1
    }
  },
  lottie: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    pointerEvents: 'none',
  }

});

export default RewardComponent;
