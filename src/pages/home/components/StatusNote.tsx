import { Badge, Text, View } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
export const StatusNote = (): JSX.Element => {
  return (
    <View style={styles.statusRainy}>
      <Badge primary style={styles.hight}>
        <Text>Cao</Text>
      </Badge>
      <Badge primary style={styles.alway}>
        <Text>Bình thường</Text>
      </Badge>
      <Badge primary style={styles.low}>
        <Text>Thấp</Text>
      </Badge>
    </View>
  );
};
const styles = StyleSheet.create({
  statusRainy: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "center",
  },
  hight: {
    backgroundColor: "#ff3535",
    margin: 10,
  },
  low: {
    backgroundColor: "#13f27b",
    margin: 10,
  },
  alway: {
    backgroundColor: "#f2d013",
    margin: 10,
  },
});
