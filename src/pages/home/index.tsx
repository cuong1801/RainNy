import { Icon, Left, List, ListItem, Right, Text } from "native-base";
import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { Any } from "../../share/interfaces/Unknown";
import { SearchOption } from "./components/SearchOption";
import { DataSource } from "./data";
import styles from "./style/styles";

const fieldColor: { [key: string]: string } = {
  alway: "#f2d013",
  little: "#13f27b",
  many: "#ff3535",
};

export const Home = ({ navigation }: Any): JSX.Element => {
  const onPressToListTown = (value: Any) => {
    navigation.navigate("Detail", { item: value });
  };
  return (
    <SafeAreaView style={styles.home}>
      <ScrollView>
        <SearchOption></SearchOption>
        <List style={styles.list}>
          {DataSource?.map((city, i) => (
            <ListItem
              key={i}
              style={styles.listItem}
              onPress={() => onPressToListTown(city)}
            >
              <Left>
                <Text style={styles.listItemLeft}>{city.name}</Text>
              </Left>
              <Right style={styles.listItemRight}>
                <Icon
                  style={[
                    styles.listItemRightIcon,
                    { color: fieldColor[city.status] },
                  ]}
                  name="rainy"
                />
                <Text style={styles.textRainyAmount}>{city.RainyAround}ml</Text>
              </Right>
            </ListItem>
          ))}
        </List>
      </ScrollView>
    </SafeAreaView>
  );
};
