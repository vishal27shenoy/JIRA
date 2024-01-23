import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {memo} from 'react';
import {
  responsiveHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {color} from '../constants/color';
import {font} from '../constants/font';
import MyIcon from '../helper/Myicon';

const TextField = ({
  type,
  placeholder,
  iconName,
  value,
  onChange,
  secure,
}: any) => {
  return (
    <View style={styles.textFieldContainer}>
      <MyIcon type={type} name={iconName} size={responsiveHeight(2.3)} />
      <TextInput
        placeholder={placeholder}
        style={styles.inputHolder}
        placeholderTextColor={color.SECONDARY}
        value={value}
        onChangeText={text => onChange(text)}
        secureTextEntry={secure}
      />
    </View>
  );
};

export default memo(TextField);

const styles = StyleSheet.create({
  textFieldContainer: {
    flexDirection: 'row',
    width: responsiveWidth(80),
    height: responsiveHeight(6),
    borderBottomWidth: 1,
    borderBottomColor: color.SECONDARY,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    gap: responsiveWidth(3),
    paddingHorizontal: responsiveWidth(3),
    marginTop: responsiveHeight(2),
  },
  inputHolder: {
    flex: 1,
    fontFamily: font.REGULAR,
    color: color.SECONDARY,
  },
});
