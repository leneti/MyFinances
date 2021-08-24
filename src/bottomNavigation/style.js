import { StyleSheet } from "react-native";
import {
  iconContainer,
  tabBlock,
  bottomBarHeight,
  bottomBarWidth,
} from "./constant.js";

const styles = StyleSheet.create({
  bottomTabContainer: {
    elevation: 4,
    height: bottomBarHeight,
    width: bottomBarWidth,
    backgroundColor: "#3e3e3e",
    flexDirection: "row",
    alignItems: "center",
  },
  tabContainer: {
    height: "100%",
    width: tabBlock,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    height: iconContainer,
    justifyContent: "center",
    alignItems: "center",
    width: iconContainer,
    borderRadius: iconContainer / 2,
  },
  selectedContainer: {
    alignItems: "center",
    height: iconContainer,
    width: iconContainer,
    backgroundColor: "#28c7fa",
    borderRadius: iconContainer / 2,
    bottom: bottomBarHeight / 2 - iconContainer / 2,
    justifyContent: "center",
    left: 0,
    overflow: "hidden",
    position: "absolute",
  },
});

export default styles;
