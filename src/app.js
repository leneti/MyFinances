import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavContext } from "./bottomNavigation/constant";

export default () => {
  const { navIndex } = useContext(NavContext);
  return (
    <View style={styles.container}>
      <Text style={{ color: "white", fontSize: 28 }}>
        Active Index: {navIndex}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4e4e4e",
  },
});
