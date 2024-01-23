import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {color} from '../constants/color';
import {font} from '../constants/font';
import {responsiveScreenHeight} from 'react-native-responsive-dimensions';

const HelperComponent = ({placeholder, type, onPress}: any) => {
  return (
    <Text style={styles.helperText}>
      {placeholder}{' '}
      <Text style={styles.typeText} onPress={onPress}>
        {type}
      </Text>
    </Text>
  );
};

export default memo(HelperComponent);

const styles = StyleSheet.create({
  helperText: {
    color: color.GRAY,
    fontFamily: font.REGULAR,
    marginTop: responsiveScreenHeight(1),
  },
  typeText: {
    color: color.ACCENT,
    fontFamily: font.BOLD,
  },
});
