import * as React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface ButtonProps {
  label: string;
  onPress: () => void;
}
export const Button = ({ label, onPress }: ButtonProps): JSX.Element => {
  return (
    <TouchableOpacity style={styles.btnLogin} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  btnLogin: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#61dafb",
    marginBottom: 12,
    paddingVertical: 12,
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "white",
  },
  text: {
    color: "white",
    textAlign: "center",
    height: 20,
  },
});
