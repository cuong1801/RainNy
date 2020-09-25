import { List, Text } from "native-base";
import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { SearchOption } from "../home/components/SearchOption";
import styles from "../home/style/styles";

export const ListCity = (props: { route: any }): JSX.Element => {
  const { route } = props;
  const { item } = route.params;
  console.log("props :>> ", props);
  return (
    <SafeAreaView style={styles.home}>
      <ScrollView>
        <SearchOption></SearchOption>
        <List style={styles.list}>
          <Text>sss</Text>
        </List>
      </ScrollView>
    </SafeAreaView>
  );
};
