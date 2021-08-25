import React, { useState } from "react";
import { WebView } from "react-native-webview";
import { View, Modal } from "react-native";
import { DotIndicator } from "react-native-indicators";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export default () => {
  const [loading, setLoading] = useState(true);
  return (
    <View style={{ flex: 1 }}>
      <Modal visible={loading} transparent={false}>
        <View
          style={{
            flex: 1,
            backgroundColor: "#rgba(0, 0, 0, 0.85)",
          }}
        >
          <DotIndicator count={5} color="#22eaaa" size={wp(3)} />
        </View>
      </Modal>
      <WebView
        source={{
          uri: "https://ukpersonal.finance/windfall/",
        }}
        onLoad={() => setLoading(false)}
      />
    </View>
  );
};
