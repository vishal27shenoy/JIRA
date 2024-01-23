import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {memo} from 'react';
const MyIcon = ({type, name, size}: any) => {
  if (type === 'MaterialCommunityIcons') {
    return <MaterialCommunityIcons name={name} size={size} />;
  } else if (type === 'AntDesign') {
    return <AntDesign name={name} size={size} />;
  } else if (type === 'MaterialIcons') {
    return <MaterialIcons name={name} size={size} />;
  }
};
export default memo(MyIcon);
