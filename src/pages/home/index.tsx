import firebase from "firebase";
import { Icon, Left, List, ListItem, Right, Text } from "native-base";
import React, { useEffect, useLayoutEffect } from "react";
import { Button, SafeAreaView, ScrollView, View } from "react-native";
import { HomeProps } from "../../navigator";
import { City } from "../../share/interfaces/interface";
import { SearchOption } from "./components/SearchOption";
import { DataSource } from "./data";
import styles from "./style/styles";
const fieldColor: { [key: string]: string } = {
  alway: "#f2d013",
  little: "#13f27b",
  many: "#ff3535",
};

export const Home = (props: HomeProps): JSX.Element => {
  const onPressToListTown = (city: City) => {
    props.navigation.navigate("DistrictList", {
      item: city.provinces,
      provinceName: city.cityName,
    });
  };
  const pushNotification = async () => {
    const idTokenResult = await firebase.auth().currentUser?.getIdTokenResult();
    console.log("User JWT: ", idTokenResult?.token);
  };

  useLayoutEffect(() => {
    props.navigation.setOptions({
      gestureEnabled: false,
      headerRight: () => (
        <Button
          onPress={() => {
            firebase
              .auth()
              .signOut()
              .then(() => {
                props.navigation.navigate("Login");
              });
          }}
          title="Thoát"
          color="#C1549C"
        />
      ),
    });
  }, []);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user === null) {
        props.navigation.navigate("Login");
      }
    });
  }, []);

  return (
    <SafeAreaView style={styles.home}>
      <ScrollView>
        <SearchOption></SearchOption>
        <View>
          <Button onPress={pushNotification} title="Reset" color="#C1549C" />
        </View>
        <List style={styles.list}>
          {DataSource.map((city, i) => (
            <ListItem
              key={i}
              style={styles.listItem}
              onPress={() => onPressToListTown(city)}
            >
              <Left>
                <Text style={styles.listItemLeft}>{city.cityName}</Text>
              </Left>
              <Right style={styles.listItemRight}>
                <Icon
                  style={[
                    styles.listItemRightIcon,
                    { color: fieldColor[city.status] },
                  ]}
                  name="rainy"
                />
                <Text style={styles.textRainyAmount}>{city.rainyAround}ml</Text>
              </Right>
            </ListItem>
          ))}
        </List>
      </ScrollView>
    </SafeAreaView>
  );
};
