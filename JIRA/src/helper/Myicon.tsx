import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {memo} from 'react';
import {color} from '../constants/color';
const MyIcon = ({type, name, size, color}: any) => {
  if (type === 'MaterialCommunityIcons') {
    return <MaterialCommunityIcons name={name} size={size} color={color} />;
  } else if (type === 'AntDesign') {
    return <AntDesign name={name} size={size} color={color} />;
  } else if (type === 'MaterialIcons') {
    return <MaterialIcons name={name} size={size} color={color} />;
  } else if (type === 'Feather') {
    return <Feather name={name} size={size} color={color} />;
  } else if (type === 'Octicons') {
    return <Octicons name={name} size={size} color={color} />;
  } else if (type === 'Entypo') {
    return <Entypo name={name} size={size} color={color} />;
  }
};
export default memo(MyIcon);
