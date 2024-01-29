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
import {Formik} from 'formik';

import * as yup from 'yup';

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

const Login = ({navigation}: any) => {
  const [loading, setLoading] = useState(false);
  const handleLogin = async (data: any) => {
    try {
      setLoading(true);
      console.log('calling');
      navigation.replace('employeebottomtabs');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.loginContainer}>
      <Text style={styles.text}>SIGN IN</Text>

      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{email: '', password: ''}}
        onSubmit={values => handleLogin(values)}>
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
                placeholder={'Enter your Email'}
                iconName={'user'}
                type={'AntDesign'}
                onChange={handleChange('email')}
                value={values.email}
              />
              {errors.email && (
                <Text style={{fontSize: 10, color: 'red'}}>{errors.email}</Text>
              )}
              <TextField
                placeholder={'Enter your Password'}
                iconName={'lock-outline'}
                type={'MaterialCommunityIcons'}
                onChange={handleChange('password')}
                value={values.password}
              />
              {errors.password && (
                <Text style={{fontSize: 10, color: 'red'}}>
                  {errors.password}
                </Text>
              )}
              <HelperComponent
                placeholder={'Dont have an account ?'}
                type={'Register'}
                onPress={() => navigation.replace('Register')}
              />
              <CustomBtn
                onPress={handleSubmit}
                placeholder={'Login'}
                load={loading}
              />
            </>
          );
        }}
      </Formik>
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
