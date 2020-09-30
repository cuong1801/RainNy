import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
    padding: 5,
    backgroundColor: "white",
  },
  imgRow: { flex: 1, top: 20, alignItems: "center" },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  inputRow: {
    flex: 1,
    width: "80%",
    alignSelf: "center",
    marginTop: 60,
  },
  inputColumn: { flexDirection: "column" },
  labelError: {
    flexDirection: "column",
  },
  textError: {
    color: "red",
  },
  forgotPassRow: { flexDirection: "column", marginTop: 10 },
  forgotLable: {
    alignSelf: "flex-end",
    marginBottom: 40,
    color: "blue",
  },
});

export default styles;
