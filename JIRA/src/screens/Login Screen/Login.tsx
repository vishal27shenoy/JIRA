import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';
import {color} from '../../constants/color';
import {font} from '../../constants/font';
import TextField from '../../components/TextField';
import CustomBtn from '../../components/CustomBtn';
import HelperComponent from '../../components/HelperComponent';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.loginContainer}>
      <Text style={styles.text}>SIGN IN</Text>
      <TextField
        placeholder={'Enter your Email'}
        iconName={'user'}
        type={'AntDesign'}
        onChange={setEmail}
        value={email}
      />
      <TextField
        placeholder={'Enter your Password'}
        iconName={'lock-outline'}
        type={'MaterialCommunityIcons'}
        onChange={setPassword}
        value={password}
      />
      <HelperComponent
        placeholder={'Dont have an account ?'}
        type={'Register'}
      />
      <CustomBtn placeholder={'Login'} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: color.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: responsiveFontSize(4),
    fontFamily: font.REGULAR,
    color: color.SECONDARY,
    alignSelf: 'center',
  },
});
