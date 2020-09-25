import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#dddbdb",
    fontFamily: "",
  },
  home: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
  },
  list: { paddingHorizontal: 8 },
  listItem: {
    backgroundColor: "white",
    padding: 10,
    marginLeft: 0,
    marginBottom: 15,
    borderRadius: 4,
  },
  listItemLeft: { fontSize: 15 },
  listItemRight: {
    flex: 1,
    flexDirection: "column",
  },
  listItemRightIcon: { fontSize: 25 },
  titleHome: {
    flex: 1,
    padding: 6,
    textAlign: "center",
  },
  textRainyAmount: { color: "#001dff" },
  listCity: {
    flex: 2,
    padding: 6,
  },
});

export default styles;
