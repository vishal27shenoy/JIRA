import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import React, {memo} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {color} from '../constants/color';
import {font} from '../constants/font';

const CustomBtn = ({placeholder, onPress, load}: any) => {
  return (
    <Pressable onPress={onPress} style={styles.btnContainer}>
      <Text style={styles.btnText}>
        {load ? <ActivityIndicator color={color.PRIMARY} /> : placeholder}
      </Text>
    </Pressable>
  );
};

export default memo(CustomBtn);

const styles = StyleSheet.create({
  btnContainer: {
    height: responsiveHeight(6),
    width: responsiveWidth(60),
    backgroundColor: color.SECONDARY,
    marginTop: responsiveHeight(4),
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: color.PRIMARY,
    fontFamily: font.REGULAR,
    fontSize: responsiveFontSize(1.8),
  },
});
