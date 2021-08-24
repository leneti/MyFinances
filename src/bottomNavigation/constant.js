import { createContext } from "react";
import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");
export const icons = [
  { name: "git-pull-request", color: "#28c7fa", iconGroup: "Feather" },
  { name: "areachart", color: "#ff304f", iconGroup: "AntDesign" },
  { name: "calculator", color: "#22eaaa", iconGroup: "AntDesign" },
  { name: "dollar-sign", color: "#ffd717", iconGroup: "Feather" },
];
export const iconContainer = 50;
export const tabBlock = width / icons.length;
export const bottomBarHeight = 70;
export const bottomBarWidth = width;
export const NavContext = createContext();
