import { NavigationContainer, RouteProp } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import * as firebase from "firebase";
import React from "react";
import { DetailCity } from "../pages/city/DetailDistrict";
import { DistrictList } from "../pages/city/DistrictList";
import { Home } from "../pages/home";
import { LoginAuthor } from "../pages/login";
import { Provinces } from "../share/interfaces/interface";

const firebaseConfig = {
  apiKey: "AIzaSyCRA5tcyoDqEMuLd9f4gJV0RDmIq0WnGVI",
  authDomain: "vrainy-9058e.firebaseapp.com",
  databaseURL: "https://vrainy-9058e.firebaseio.com",
  projectId: "vrainy-9058e",
  storageBucket: "vrainy-9058e.appspot.com",
  messagingSenderId: "672036479622",
  appId: "1:672036479622:web:09074e389d3099cef2a707",
  measurementId: "G-BZSJSB5BX9",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  DistrictList: { provinceName: string; item?: Provinces[] };
  Detail: { districtName: string; detail: Provinces };
};

export type LoginProps = {
  route: RouteProp<RootStackParamList, "Login">;
  navigation: StackNavigationProp<RootStackParamList, "Login">;
};

export type HomeProps = {
  route: RouteProp<RootStackParamList, "Home">;
  navigation: StackNavigationProp<RootStackParamList, "Home">;
};

export type DistrictListProps = {
  route: RouteProp<RootStackParamList, "DistrictList">;
  navigation: StackNavigationProp<RootStackParamList, "DistrictList">;
};

export type DetailProps = {
  route: RouteProp<RootStackParamList, "Detail">;
  navigation: StackNavigationProp<RootStackParamList, "Detail">;
};

const Stack = createStackNavigator();

export function AppContainer(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"Home"}
        screenOptions={{
          gestureEnabled: true,
        }}
      >
        <Stack.Screen
          name="Login"
          component={LoginAuthor}
          options={{
            title: "VRainy",
          }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Trang chủ",
            headerTintColor: "white",
            headerStyle: { backgroundColor: "tomato" },
          }}
        />
        <Stack.Screen name="DistrictList" component={DistrictList} />
        <Stack.Screen name="Detail" component={DetailCity} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
