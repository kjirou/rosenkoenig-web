import { StyleSheet, View } from "react-native";

const MAX_TILES_LENGTH = 9;

const styles = StyleSheet.create<{ [key in string]: object }>({
  container: {
    width: 480,
    height: 480,
  },
  ...(() => {
    // "tile-{x}-{y}"
    const keysForEachTile: { [key in string]: object } = {};
    for (let y = 0; y < MAX_TILES_LENGTH; y++) {
      for (let x = 0; x < MAX_TILES_LENGTH; x++) {
        keysForEachTile[`tile-${x}-${y}`] = {
          ...StyleSheet.absoluteFillObject,
          top: y * 48,
          left: x * 48,
          width: 48,
          height: 48,
        };
      }
    }
    return keysForEachTile;
  })(),
});

const Tile = (props: { styleKey: string }) => {
  return <View style={styles[props.styleKey]}></View>;
};

const TileGrid = () => {
  return <View style={styles.container}></View>;
};

export default TileGrid;
