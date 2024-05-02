import React, { useContext, useRef } from 'react';
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { PointsProvider, PointsContext } from "../providers/PointsProvider";
import LottieView from 'lottie-react-native';
import confetti from '../components/confetti.json';

const Points = () => {
    const { pointTotal } = useContext(PointsContext);
    const lottieRef = useRef(null);

    function triggerConfetti() {
        if (lottieRef.current) {
            lottieRef.current.play();
        }
    }

    return (
        <PointsProvider>
            <TouchableOpacity style={styles.pointsContainer} onPress={triggerConfetti}>
                <Text style={styles.pointsText}>{`Points: ${pointTotal}`}</Text>
                <LottieView 
                    ref={lottieRef}
                    source={confetti}
                    loop={false}
                    style={styles.lottie}
                    resizeMode='cover'
                />
            </TouchableOpacity>
        </PointsProvider>
    );
}

const styles = StyleSheet.create({
  pointsContainer: {
    position: 'absolute',
    top: 45,
    left: 25,
    backgroundColor: '#A852FF',
    padding: 10,
    borderRadius: 5,
    elevation: 5,
  },
  pointsText: {
    fontSize: 16,
  },
  lottie: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    zIndex: 1000,
    pointerEvents: 'none',
  },
});

export default Points;
