import React, { memo } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { colors } from '../../../library/styles/colors';

interface iProps {
  isEnabled: boolean;
  toggleSwitch?: () => void;
}

const ToggleButton = ({ isEnabled, toggleSwitch }: iProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={toggleSwitch}
      style={styles.switchContainer}
    >
      <View
        style={[
          styles.switchThumb,
          isEnabled ? styles.switchThumbEnabled : styles.switchThumbDisabled,
        ]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    width: 42,
    height: 24,
    borderRadius: 13,
    padding: 4,
    justifyContent: "center",
    marginHorizontal: 5,
    backgroundColor: colors.appSecondary,
  },
  switchThumb: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: colors.white,
  },
  switchThumbEnabled: {
    alignSelf: "flex-end",
  },
  switchThumbDisabled: {
    alignSelf: "flex-start",
  },
});

export default memo(ToggleButton);
