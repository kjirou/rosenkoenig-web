import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import TileGrid from "./components/TileGrid";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // 48 * 9(tiles) + 48(left and right margins)
    width: 480,
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
