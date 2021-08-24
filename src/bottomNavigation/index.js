import React, { useReducer } from "react";
import { View, Pressable, Dimensions, StatusBar } from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";
import styles from "./style";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  Easing,
} from "react-native-reanimated";
import {
  tabBlock,
  iconContainer,
  icons,
  bottomBarHeight,
  NavContext,
} from "./constant.js";
import IsKeyBoardShown from "./keyboardListener";

const BottomNavigationTapPress = (props) => {
  const { keyboardVisible } = IsKeyBoardShown();
  const selectedIndex = useSharedValue(0);
  const [navIndex, setNavIndex] = useReducer((_, item) => item, 0);
  /* #region  Config */
  const config = {
    damping: 10,
    mass: 1,
    stiffness: 100,
    velocity: 2,
  };
  const animateSelectedContainer = useAnimatedStyle(() => ({
    backgroundColor: icons[selectedIndex.value].color,
    transform: [
      {
        translateX: withSpring(
          selectedIndex.value * tabBlock + tabBlock / 2 - iconContainer / 2,
          { config }
        ),
      },
    ],
  }));
  const animateIconContainer = ({ index }) =>
    useAnimatedStyle(() => ({
      transform: [
        {
          translateY: withSpring(
            index === selectedIndex.value ? -bottomBarHeight : 0,
            config
          ),
        },
      ],
    }));
  // const handleKeyboardAnimation = ({ forActiveBar }) => {
  //   return useAnimatedStyle(() => {
  //     let offSet = forActiveBar ? bottomBarHeight * 2 : bottomBarHeight;
  //     return {
  //       transform: [
  //         {
  //           translateY: withTiming(keyboardVisible ? offSet : 0, {
  //             duration: 500,
  //             easing: Easing.linear,
  //           }),
  //         },
  //       ],
  //     };
  //   });
  // };
  /* #endregion */

  const Icon = ({ name, color, iconGroup }) => {
    switch (iconGroup) {
      case "AntDesign":
        return <AntDesign name={name} size={24} color={color} />;
      default:
        return <Feather name={name} size={24} color={color} />;
    }
  };

  return (
    <>
      <NavContext.Provider value={{ navIndex, setNavIndex }}>
        <View
          style={{
            flex: 1,
            paddingBottom: bottomBarHeight,
            paddingTop: StatusBar.currentHeight,
          }}
        >
          {props.children[navIndex]}
        </View>
      </NavContext.Provider>
      <Animated.View
        style={[
          styles.bottomTabContainer,
          { position: "absolute", bottom: 0 },
          // handleKeyboardAnimation({ forActiveBar: true }),
        ]}
      >
        {icons.map((item, index) => (
          <Pressable
            key={item.name}
            onPress={() => {
              selectedIndex.value = index;
              setNavIndex(index);
            }}
          >
            <View style={styles.tabContainer}>
              <Animated.View style={styles.iconContainer}>
                <Icon
                  name={item.name}
                  color={item.color}
                  iconGroup={item.iconGroup}
                />
              </Animated.View>
            </View>
          </Pressable>
        ))}

        <Animated.View
          style={[styles.selectedContainer, animateSelectedContainer]}
        />
      </Animated.View>
      <Animated.View
        style={[
          styles.bottomTabContainer,
          { position: "absolute", bottom: -bottomBarHeight },
          // handleKeyboardAnimation({ forActiveBar: false }),
        ]}
      >
        {icons.map((item, index) => (
          <View
            style={styles.tabContainer}
            key={`${item.name} unique unique unique `}
          >
            <Animated.View
              style={[styles.iconContainer, animateIconContainer({ index })]}
            >
              <Icon name={item.name} color="white" iconGroup={item.iconGroup} />
            </Animated.View>
          </View>
        ))}
      </Animated.View>
    </>
  );
};

export default BottomNavigationTapPress;
