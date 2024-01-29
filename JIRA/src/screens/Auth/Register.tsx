import {
  Alert,
  Button,
  StyleSheet,
  Text,
  View,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {color} from '../../constants/color';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {font} from '../../constants/font';
import TextField from '../../components/TextField';
import HelperComponent from '../../components/HelperComponent';
import CustomBtn from '../../components/CustomBtn';

import {Formik} from 'formik';

import * as yup from 'yup';
import axios, {AxiosError} from 'axios';
import {BASE_URL} from '../../constants/api';

const registerValidationSchema = yup.object().shape({
  fullName: yup
    .string()
    .min(5, ({min}) => `fullName must be at least ${min} characters`)
    .required('fullName is required'),
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

const Register = ({navigation}: any) => {
  const [loading, setLoading] = useState(false);
  const handleRegister = async (data: any) => {
    console.log(data);
    try {
      const response = await axios.post(BASE_URL + '/register', data);
      if (response.status === 201) {
        navigation.navigate('Login');
      }

      console.log('response', response.data);
    } catch (err: any) {
      if (err.response.status === 409) {
        ToastAndroid.show('Email already in use.', ToastAndroid.SHORT);
      }
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SIGN UP</Text>
      <Formik
        validationSchema={registerValidationSchema}
        initialValues={{fullName: '', email: '', password: ''}}
        onSubmit={values => handleRegister(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => {
          return (
            <>
              <TextField
                placeholder={'Enter your fullName'}
                iconName={'user'}
                type={'AntDesign'}
                value={values.fullName}
                onChange={handleChange('fullName')}
                secure={false}
              />
              {errors.fullName && (
                <Text style={{fontSize: 10, color: 'red'}}>
                  {errors.fullName}
                </Text>
              )}
              <TextField
                placeholder={'Enter your email'}
                iconName={'email-outline'}
                type={'MaterialCommunityIcons'}
                value={values.email}
                onChange={handleChange('email')}
                secure={false}
              />
              {errors.email && (
                <Text style={{fontSize: 10, color: 'red'}}>{errors.email}</Text>
              )}
              <TextField
                placeholder={'Enter your password'}
                iconName={'lock-outline'}
                type={'MaterialCommunityIcons'}
                value={values.password}
                onChange={handleChange('password')}
                secure={true}
              />
              {errors.password && (
                <Text style={{fontSize: 10, color: 'red'}}>
                  {errors.password}
                </Text>
              )}
              <HelperComponent
                placeholder={'Already a user ?'}
                type={'Login'}
                onPress={() => navigation.replace('Login')}
              />

              <CustomBtn
                placeholder={'Register'}
                onPress={handleSubmit}
                load={loading}
              />
            </>
          );
        }}
      </Formik>
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
