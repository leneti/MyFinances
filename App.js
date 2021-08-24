import React from "react";
import { StatusBar } from "expo-status-bar";
import App from "./src/app";
import BottomNavigationTapPress from "./src/bottomNavigation";
import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default function Wrapper() {
  return (
    <View style={styles.statusBar}>
      <StatusBar style="light" />
      <BottomNavigationTapPress>
        <App />
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
        <WebView
          source={{
            uri: "https://www.numbeo.com/cost-of-living/comparison.jsp",
          }}
        />
        <WebView
          source={{
            uri: "https://ukpersonal.finance/windfall/",
          }}
        />
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
