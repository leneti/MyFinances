import React from "react";
import { StatusBar } from "expo-status-bar";
import BottomNavigationTapPress from "./src/bottomNavigation";
import { View, StyleSheet } from "react-native";

import FlowChart from "./src/screens/flowchart";
import CityComparison from "./src/screens/cityComparison";
import UKPF from "./src/screens/ukpf";
import Interest from "./src/screens/interest";

export default function Wrapper() {
  return (
    <View style={styles.statusBar}>
      <StatusBar style="light" />
      <BottomNavigationTapPress>
        <FlowChart />
        <Interest />
        <CityComparison />
        <UKPF />
      </BottomNavigationTapPress>
    </View>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    flex: 1,
    backgroundColor: "#4e4e4e",
  },
});
