import { Container, Content, List, ListItem, Text } from "native-base";
import React from "react";
import { Image } from "react-native";
interface SideBarProps {
  navigate?: (data: boolean) => void;
}
const routes = ["Home", "Chat", "Profile"];

export default function SideBar({ navigate }: SideBarProps): JSX.Element {
  return (
    <Container>
      <Content>
        <Image
          source={{
            uri:
              "https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/drawer-cover.png",
          }}
          style={{
            height: 120,
            alignSelf: "stretch",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ height: 80, width: 70 }}
            source={{
              uri:
                "https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/logo.png",
            }}
          />
        </Image>
        <List
          dataArray={routes}
          renderRow={(data) => {
            return (
              <ListItem button onPress={() => navigate(data)}>
                <Text>{data}</Text>
              </ListItem>
            );
          }}
        />
      </Content>
    </Container>
  );
}
