import { Icon, Left, List, ListItem, Right, Text } from "native-base";
import React, { useLayoutEffect } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { DistrictListProps } from "../../navigator";
import { fieldOption } from "../../share/interfaces/fieldOption";
import { Provinces } from "../../share/interfaces/interface";
import { SearchOption } from "../home/components/SearchOption";
import styles from "../home/style/styles";

export const DistrictList = (props: DistrictListProps): JSX.Element => {
  const { item: DetailCity, provinceName } = props.route.params;
  const onPressToListTown = (district: Provinces) => {
    props.navigation.navigate("Detail", {
      districtName: district.provinceName,
      detail: district,
    });
  };

  useLayoutEffect(() => {
    props.navigation.setOptions({ headerTitle: provinceName });
  }, []);

  return (
    <SafeAreaView style={styles.home}>
      <ScrollView>
        <SearchOption></SearchOption>
        <List style={styles.list}>
          {DetailCity?.map((district, i) => (
            <ListItem
              key={i}
              style={styles.listItem}
              onPress={() => onPressToListTown(district)}
            >
              <Left>
                <Text style={styles.listItemLeft}>{district.provinceName}</Text>
              </Left>
              <Right style={styles.listItemRight}>
                <Icon
                  style={[
                    styles.listItemRightIcon,
                    { color: `${fieldOption[district.status].color}` },
                  ]}
                  name="rainy"
                />
                <Text style={styles.textRainyAmount}>
                  {district.rainyAround}ml
                </Text>
              </Right>
            </ListItem>
          ))}
        </List>
      </ScrollView>
    </SafeAreaView>
  );
};
