import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {color} from '../../constants/color';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {font} from '../../constants/font';
import TextField from '../../components/TextField';
import HelperComponent from '../../components/HelperComponent';
import CustomBtn from '../../components/CustomBtn';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {};
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SIGN UP</Text>
      <TextField
        placeholder={'Enter your username'}
        iconName={'user'}
        type={'AntDesign'}
        value={name}
        onChange={setName}
        secure={false}
      />
      <TextField
        placeholder={'Enter your email'}
        iconName={'email-outline'}
        type={'MaterialCommunityIcons'}
        value={email}
        onChange={setEmail}
        secure={false}
      />
      <TextField
        placeholder={'Enter your password'}
        iconName={'lock-outline'}
        type={'MaterialCommunityIcons'}
        value={password}
        onChange={setPassword}
        secure={true}
      />
      <HelperComponent placeholder={'Already a user ?'} type={'Login'} />
      <CustomBtn placeholder={'Register'} />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
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
