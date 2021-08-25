import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ActivityIndicator } from "react-native-paper";
import { View } from "react-native";

export default () => {
  return (
    <View
      style={{
        width: 100,
        height: 100,
        backgroundColor: "green",
        borderRadius: 15,
        alignSelf: "center",
        top: 200,
      }}
    />
  );
};
