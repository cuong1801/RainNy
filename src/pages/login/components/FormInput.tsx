import * as React from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

type Props = TextInputProps;

export const FormInput = (props): JSX.Element => {
  const textInputRef = React.createRef<TextInput>();

  return (
    <TextInput style={styles.textInput} selectionColor={"blue"} {...props} />
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: "silver",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 10,
  },
});
