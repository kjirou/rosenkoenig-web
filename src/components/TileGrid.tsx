import { StyleSheet, View } from "react-native";

const TILE_GRID_SIZE = 9;

const styles = StyleSheet.create<{ [key in string]: object }>({
  container: {
    width: 360,
    height: 720,
  },
  ...(() => {
    // "tile-{x}-{y}"
    const keysForEachTile: { [key in string]: object } = {};
    for (let y = 0; y < TILE_GRID_SIZE; y++) {
      for (let x = 0; x < TILE_GRID_SIZE; x++) {
        keysForEachTile[`tile-${x}-${y}`] = {
          ...StyleSheet.absoluteFillObject,
          top: y * 36 + 18,
          left: x * 36 + 18,
          width: 36,
          height: 36,
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
  return (
    <View style={styles.container}>
      {(() => {
        const tiles = [];
        for (let y = 0; y < TILE_GRID_SIZE; y++) {
          for (let x = 0; x < TILE_GRID_SIZE; x++) {
            tiles.push(<Tile styleKey={`tile-${x}-${y}`} />);
          }
        }
        return tiles;
      })()}
    </View>
  );
};

export default TileGrid;
