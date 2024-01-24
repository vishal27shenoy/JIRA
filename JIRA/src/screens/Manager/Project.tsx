import {
  Pressable,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {color} from '../../constants/color';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from 'react-native-reanimated';
import Myicon from '../../helper/Myicon';
const Project = () => {
  const [toggle, setToggle] = useState(false);
  const scale = useSharedValue(1);
  const handlePress = () => {
    scale.value = withTiming(1, {duration: 300});
  };
  const closeAction = () => {
    scale.value = withTiming(0, {duration: 300});
  };
  return (
    <Pressable onPress={() => closeAction()} style={{flex: 1}}>
      <View style={styles.projectContainer}>
        <Pressable style={styles.clickBtn} onPress={() => handlePress()}>
          <Text>click</Text>
        </Pressable>
        <Animated.View
          style={[styles.actionHolder, {transform: [{scale: scale}]}]}>
          <Pressable style={[styles.ActionBtn, styles.progress]}>
            <Myicon
              type={'Entypo'}
              name="circular-graph"
              size={responsiveHeight(3)}
              color={color.PRIMARY}
            />
            <Text>prog..</Text>
          </Pressable>
          <View style={styles.midActionBtn}>
            <Pressable style={[styles.ActionBtn, styles.done]}>
              <Myicon
                type={'MaterialIcons'}
                name="done"
                size={responsiveHeight(3)}
                color={color.PRIMARY}
              />
              <Text>Done</Text>
            </Pressable>
            <Pressable style={[styles.ActionBtn, styles.close]}>
              <Myicon
                type={'AntDesign'}
                name="close"
                size={responsiveHeight(3)}
                color={color.PRIMARY}
              />
              <Text>Cancel</Text>
            </Pressable>
            <Pressable style={[styles.ActionBtn, styles.clipboard]}>
              <Myicon
                type={'Feather'}
                name="clipboard"
                size={responsiveHeight(3)}
                color={color.PRIMARY}
              />
              <Text>ToDo</Text>
            </Pressable>
          </View>
          <Pressable style={[styles.ActionBtn, styles.testing]}>
            <Myicon
              type={'Octicons'}
              name="gear"
              size={responsiveHeight(3)}
              color={color.PRIMARY}
            />
            <Text>QA</Text>
          </Pressable>
        </Animated.View>
      </View>
    </Pressable>
  );
};

export default Project;

const styles = StyleSheet.create({
  projectContainer: {
    flex: 1,
  },
  actionHolder: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: responsiveWidth(60),
    width: responsiveWidth(60),
    borderRadius: responsiveWidth(25),
    position: 'absolute',
    bottom: responsiveHeight(3),
    marginLeft: responsiveWidth(15),
    overflow: 'hidden',
    zIndex: 2,
  },
  ActionBtn: {
    height: responsiveWidth(15),
    width: responsiveWidth(15),
    backgroundColor: 'white',
    margin: responsiveWidth(2),
    borderRadius: responsiveWidth(7.5),
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  midActionBtn: {
    flexDirection: 'column',
  },
  done: {
    backgroundColor: color.DONE,
  },
  clickBtn: {
    color: 'black',
    height: 50,
    backgroundColor: 'red',
  },
  close: {
    backgroundColor: color.CLOSE,
  },
  clipboard: {
    backgroundColor: color.TODO,
  },
  progress: {
    backgroundColor: color.PROGRESS,
  },
  testing: {
    backgroundColor: color.TESTING,
  },
});
