import React, { useState } from "react";
import { View, TouchableOpacity, Animated, StyleSheet } from "react-native";

const GlobalToggleButton = ({ isOn, onToggle }:any) => {
  const translateX = new Animated.Value(isOn ? 25 : 0);

  const toggleSwitch = () => {
    Animated.timing(translateX, {
      toValue: isOn ? 0 : 25,
      duration: 200,
      useNativeDriver: true,
    }).start();
    onToggle(!isOn);
  };

  return (
    <TouchableOpacity
      style={[
        styles.toggleContainer,
        { backgroundColor: isOn ? "grey" : "#5a001f" },
      ]}
      onPress={toggleSwitch}
      activeOpacity={0.8}
    >
      <Animated.View style={[styles.circle, { transform: [{ translateX }] }]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  toggleContainer: {
    width: 50,
    height: 25,
    borderRadius: 15,
    padding: 2,
    justifyContent: "center",
  },
  circle: {
    width: 20,
    height: 20,
    backgroundColor: "white",
    borderRadius: 10,
  },
});

export default GlobalToggleButton;
