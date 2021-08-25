import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SimpleLineIcons, Feather } from "@expo/vector-icons";

export default () => {
  return (
    <ScrollView style={styles.container}>
      <View style={{ alignItems: "center", marginTop: hp(5) }}>
        <View
          style={{
            flexDirection: "row",
            width: wp(50),
            justifyContent: "space-between",
          }}
        >
          <Feather name="flag" size={28} color="white" />
          <Text style={{ color: "white", fontSize: 24 }}>Start here</Text>
          <Feather name="flag" size={28} color="white" />
        </View>
        <View
          style={{
            width: wp(50),
            height: hp(10),
            backgroundColor: "#F8CECC",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
            borderColor: "#B85450",
            borderWidth: 1,
            marginVertical: hp(5),
          }}
        >
          <Text style={{ color: "#4e4e4e", fontSize: 20 }}>
            Create a budget
          </Text>
        </View>
        <SimpleLineIcons name="arrow-down" size={64} color="white" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4e4e4e",
  },
});
