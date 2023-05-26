import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import TileGrid from "./components/TileGrid";

const styles = StyleSheet.create({
  // 360x720 の画面サイズについて
  //
  // React Native では、viewport の設定は width=device-width 固定にした方が良さそう。
  // つまり、実際の CSS ピクセル or dp 解像度 の値から調整しないといけない。
  // iOS / Android の端末一覧を眺めて、キリが良い数値だったのがこれだった。
  container: {
    flex: 1,
    // 40 * 9(tiles)
    width: 360,
    height: 720,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Root = () => {
  return (
    <View style={styles.container}>
      <TileGrid />
      <StatusBar style="auto" />
    </View>
  );
};

export default Root;
