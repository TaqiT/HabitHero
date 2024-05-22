import React, { useContext } from 'react';
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { PointsContext } from "../providers/PointsProvider";
import { ThemeContext } from '../providers/AppThemeProvider';
import { CurrentTabContext } from '../providers/CurrentTabProvider';

const Points = () => {
  const {
    navBarColor, backgroundColor, highlightColor, containerColor
  } = useContext(ThemeContext);
  const { currentTab } = useContext(CurrentTabContext);
  if (currentTab == 'Settings') {
    return null;
  }
  const { pointTotal } = useContext(PointsContext);
  return (
      <TouchableOpacity
        style={[styles.pointsContainer, { backgroundColor: containerColor }]}
      >
        <Text style={styles.pointsText}>{`Points: ${pointTotal}`}</Text>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  pointsContainer: {
    position: 'absolute',
    top: 45,
    left: 25,
    padding: 10,
    borderRadius: 5,
    elevation: 5,
  },
  pointsText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default Points;
