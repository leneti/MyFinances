import { useState, useEffect } from "react";
import { Platform, Keyboard } from "react-native";

const IsKeyBoardShown = () => {
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  const handleKeyboardShow = () => {
    setKeyboardVisible(true);
  };
  const handleKeyboardHide = () => {
    setKeyboardVisible(false);
  };

  useEffect(() => {
    const show = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow",
      handleKeyboardShow
    );
    const hide = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide",
      handleKeyboardShow
    );

    return () => {
      show.remove();
      hide.remove();
    };
  }, [handleKeyboardHide, handleKeyboardShow]);

  return { keyboardVisible };
};

export default IsKeyBoardShown;
